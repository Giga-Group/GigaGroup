/**
 * Google Apps Script for Al Ghurair Giga Lead Management
 * This script receives form submissions and stores them in Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace Code.gs content with this code
 * 4. Create a Google Sheet for storing leads
 * 5. Update SHEET_ID below with your Google Sheet ID
 * 6. Deploy as web app with "Anyone" access
 * 7. Copy the web app URL to formSubmission.js
 */

// Replace with your Google Sheet ID
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'Leads'; // Name of the sheet tab

/**
 * Handle POST requests from the website forms
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add lead to Google Sheet
    addLeadToSheet(data);
    
    // Send daily summary email if it's end of day
    checkAndSendDailySummary();
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Add lead data to Google Sheet
 */
function addLeadToSheet(data) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      createLeadsSheet();
      return addLeadToSheet(data); // Retry after creating sheet
    }
    
    // Format timestamp for Pakistani timezone
    const pakistanTime = new Date(data.timestamp).toLocaleString('en-PK', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Add row with lead data
    sheet.appendRow([
      pakistanTime,           // Column A: Timestamp
      data.name,              // Column B: Name
      data.email,             // Column C: Email
      data.contact,           // Column D: Contact
      data.project,           // Column E: Project
      data.message,           // Column F: Message
      data.source,            // Column G: Source
      data.status || 'New',   // Column H: Status
      '',                     // Column I: Notes (empty initially)
      ''                      // Column J: Follow-up Date (empty initially)
    ]);
    
    console.log('Lead added successfully:', data.name);
    
  } catch (error) {
    console.error('Error adding lead to sheet:', error);
    throw error;
  }
}

/**
 * Create the leads sheet with proper headers
 */
function createLeadsSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.insertSheet(SHEET_NAME);
    
    // Add headers
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Contact',
      'Project',
      'Message',
      'Source',
      'Status',
      'Notes',
      'Follow-up Date'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Set column widths
    sheet.setColumnWidth(1, 120); // Timestamp
    sheet.setColumnWidth(2, 150); // Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 120); // Contact
    sheet.setColumnWidth(5, 150); // Project
    sheet.setColumnWidth(6, 200); // Message
    sheet.setColumnWidth(7, 100); // Source
    sheet.setColumnWidth(8, 80);  // Status
    sheet.setColumnWidth(9, 200); // Notes
    sheet.setColumnWidth(10, 120); // Follow-up Date
    
    console.log('Leads sheet created successfully');
    
  } catch (error) {
    console.error('Error creating leads sheet:', error);
    throw error;
  }
}

/**
 * Send daily summary email at 5 PM
 */
function sendDailyLeadSummary() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const today = new Date();
    const todayString = Utilities.formatDate(today, 'Asia/Karachi', 'yyyy-MM-dd');
    
    // Get all data
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);
    
    // Filter today's leads
    const todaysLeads = rows.filter(row => {
      const rowDate = new Date(row[0]);
      const rowDateString = Utilities.formatDate(rowDate, 'Asia/Karachi', 'yyyy-MM-dd');
      return rowDateString === todayString;
    });
    
    if (todaysLeads.length === 0) {
      console.log('No leads today, skipping email');
      return;
    }
    
    // Generate email content
    const emailBody = generateDailyEmailBody(todaysLeads, today);
    
    // Send email
    MailApp.sendEmail({
      to: 'gigagroup.dev@gmail.com',
      subject: `Daily Lead Report - Al Ghurair Giga (${todaysLeads.length} New Leads)`,
      htmlBody: emailBody
    });
    
    console.log(`Daily summary sent: ${todaysLeads.length} leads`);
    
  } catch (error) {
    console.error('Error sending daily summary:', error);
  }
}

/**
 * Generate HTML email body for daily summary
 */
function generateDailyEmailBody(leads, date) {
  const dateString = Utilities.formatDate(date, 'Asia/Karachi', 'MMMM d, yyyy');
  
  let emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #4285f4; color: white; padding: 20px; text-align: center;">
        <h1>Daily Lead Report - Al Ghurair Giga</h1>
        <p>${dateString}</p>
      </div>
      
      <div style="padding: 20px; background: #f9f9f9;">
        <h2>📈 Daily Summary</h2>
        <ul>
          <li><strong>Total Leads Today:</strong> ${leads.length}</li>
          <li><strong>Registration Forms:</strong> ${leads.filter(l => l[6] === 'Registration').length}</li>
          <li><strong>Contact Forms:</strong> ${leads.filter(l => l[6] === 'Contact').length}</li>
          <li><strong>Project Inquiries:</strong> ${leads.filter(l => l[6] === 'Project Single').length}</li>
        </ul>
      </div>
      
      <div style="padding: 20px;">
        <h2>📋 Today's Leads</h2>
  `;
  
  leads.forEach((lead, index) => {
    const time = new Date(lead[0]).toLocaleString('en-PK', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    emailBody += `
      <div style="border: 1px solid #ddd; margin: 10px 0; padding: 15px; border-radius: 5px;">
        <h3>${index + 1}. ${lead[1]} | ${time}</h3>
        <p><strong>Email:</strong> ${lead[2]}</p>
        <p><strong>Contact:</strong> ${lead[3]}</p>
        <p><strong>Project Interest:</strong> ${lead[4]}</p>
        <p><strong>Source:</strong> ${lead[6]}</p>
        ${lead[5] !== 'No message' ? `<p><strong>Message:</strong> ${lead[5]}</p>` : ''}
      </div>
    `;
  });
  
  emailBody += `
      </div>
      
      <div style="background: #4285f4; color: white; padding: 15px; text-align: center;">
        <p>Al Ghurair Giga Lead Management System</p>
        <p style="font-size: 12px;">Automated report generated at ${new Date().toLocaleString('en-PK', {timeZone: 'Asia/Karachi'})}</p>
      </div>
    </div>
  `;
  
  return emailBody;
}

/**
 * Check if it's time to send daily summary (5 PM PKT)
 */
function checkAndSendDailySummary() {
  const now = new Date();
  const pakistanTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Karachi"}));
  const hour = pakistanTime.getHours();
  
  // Send summary at 5 PM (17:00)
  if (hour === 17) {
    sendDailyLeadSummary();
  }
}

/**
 * Set up daily trigger for 5 PM summary
 * Run this function once to set up the daily email trigger
 */
function setupDailyTrigger() {
  ScriptApp.newTrigger('sendDailyLeadSummary')
    .timeBased()
    .everyDays(1)
    .atHour(17) // 5 PM
    .create();
    
  console.log('Daily trigger set up for 5 PM PKT');
}

/**
 * Test function to verify everything works
 */
function testFunction() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    contact: '+92-300-1234567',
    project: 'Goldcrest Views',
    message: 'This is a test message',
    source: 'Test',
    status: 'Test Lead'
  };
  
  addLeadToSheet(testData);
  console.log('Test completed successfully');
}