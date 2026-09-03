/**
 * Google Apps Script for Giga Group Lead Management
 * Receives form submissions and stores them in the "Giga Group Leads" spreadsheet.
 *
 * SETUP (do this in script.google.com, not only in this repo):
 * 1. Create a new Apps Script project (or open the existing one)
 * 2. Paste this entire file into Code.gs
 * 3. Save
 * 4. Run testFunction once and authorize Sheets + Gmail
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL into .env as REACT_APP_GOOGLE_SCRIPT_URL
 * 7. After any future code change: Deploy → Manage deployments → pencil → New version
 */

const SHEET_ID = '1AJrvfW3nolHzknDdcanjAYTNAhUxoavlrEQzMM2gspM';
const SHEET_NAME = 'Leads';
const TIMEZONE = 'Asia/Karachi';

const HEADERS = [
  'Date',
  'Time',
  'Name',
  'Email',
  'Contact',
  'Project',
  'Message',
  'Source',
  'Status',
  'Notes',
  'Follow-up Date',
  'Budget',
  'Purchase Timeline',
  'WhatsApp',
  'City'
];

/**
 * Handle POST requests from the website forms
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    addLeadToSheet(data);
    checkAndSendDailySummary();

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Add lead data to Google Sheet
 * Column order: Date, Time, then all other fields
 */
function addLeadToSheet(data) {
  try {
    let sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = createLeadsSheet();
    }

    const submittedAt = data.timestamp ? new Date(data.timestamp) : new Date();
    const leadDate = Utilities.formatDate(submittedAt, TIMEZONE, 'dd/MM/yyyy');
    const leadTime = Utilities.formatDate(submittedAt, TIMEZONE, 'hh:mm a');

    ensureExtraLeadColumns(sheet);

    sheet.appendRow([
      leadDate,                         // A: Date
      leadTime,                         // B: Time
      data.name,                        // C: Name
      data.email,                       // D: Email
      data.contact,                     // E: Contact
      data.project,                     // F: Project
      data.message,                     // G: Message
      data.source,                      // H: Source
      data.status || 'New Lead',        // I: Status
      '',                               // J: Notes
      '',                               // K: Follow-up Date
      data.budget || '',                // L: Budget
      data.purchaseTimeline || '',      // M: Purchase Timeline
      data.whatsapp || '',              // N: WhatsApp
      data.city || ''                   // O: City
    ]);

    console.log('Lead added successfully:', data.name);
  } catch (error) {
    console.error('Error adding lead to sheet:', error);
    throw error;
  }
}

/**
 * Create the Leads tab with Date and Time as the first columns
 */
function createLeadsSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.insertSheet(SHEET_NAME);

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  sheet.setFrozenRows(1);

  sheet.setColumnWidth(1, 110);  // Date
  sheet.setColumnWidth(2, 100);  // Time
  sheet.setColumnWidth(3, 160);  // Name
  sheet.setColumnWidth(4, 220);  // Email
  sheet.setColumnWidth(5, 140);  // Contact
  sheet.setColumnWidth(6, 180);  // Project
  sheet.setColumnWidth(7, 220);  // Message
  sheet.setColumnWidth(8, 130);  // Source
  sheet.setColumnWidth(9, 100);  // Status
  sheet.setColumnWidth(10, 200); // Notes
  sheet.setColumnWidth(11, 130); // Follow-up Date
  sheet.setColumnWidth(12, 180); // Budget
  sheet.setColumnWidth(13, 180); // Purchase Timeline
  sheet.setColumnWidth(14, 160); // WhatsApp
  sheet.setColumnWidth(15, 140); // City

  console.log('Leads sheet created successfully');
  return sheet;
}

/**
 * Add extra lead columns to an existing sheet without shifting current data
 */
function ensureExtraLeadColumns(sheet) {
  const extraHeaders = ['Budget', 'Purchase Timeline', 'WhatsApp', 'City'];
  const lastCol = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const missing = extraHeaders.filter(header => headers.indexOf(header) === -1);

  if (missing.length === 0) {
    return;
  }

  const startCol = lastCol + 1;
  const headerRange = sheet.getRange(1, startCol, 1, missing.length);
  headerRange.setValues([missing]);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
}

/**
 * Send daily summary email at 5 PM
 */
function sendDailyLeadSummary() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const today = new Date();
    const todayString = Utilities.formatDate(today, TIMEZONE, 'dd/MM/yyyy');

    const data = sheet.getDataRange().getValues();
    const rows = data.slice(1);

    const todaysLeads = rows.filter(row => String(row[0]) === todayString);

    if (todaysLeads.length === 0) {
      console.log('No leads today, skipping email');
      return;
    }

    const emailBody = generateDailyEmailBody(todaysLeads, today);

    MailApp.sendEmail({
      to: 'gigagroup.dev@gmail.com',
      subject: `Daily Lead Report - Giga Group (${todaysLeads.length} New Leads)`,
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
  const dateString = Utilities.formatDate(date, TIMEZONE, 'MMMM d, yyyy');

  let emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #4285f4; color: white; padding: 20px; text-align: center;">
        <h1>Daily Lead Report - Giga Group</h1>
        <p>${dateString}</p>
      </div>
      
      <div style="padding: 20px; background: #f9f9f9;">
        <h2>Daily Summary</h2>
        <ul>
          <li><strong>Total Leads Today:</strong> ${leads.length}</li>
          <li><strong>Registration Forms:</strong> ${leads.filter(l => l[7] === 'Registration').length}</li>
          <li><strong>Contact Forms:</strong> ${leads.filter(l => l[7] === 'Contact').length}</li>
          <li><strong>Project Inquiries:</strong> ${leads.filter(l => l[7] === 'Project Single').length}</li>
        </ul>
      </div>
      
      <div style="padding: 20px;">
        <h2>Today's Leads</h2>
  `;

  leads.forEach((lead, index) => {
    emailBody += `
      <div style="border: 1px solid #ddd; margin: 10px 0; padding: 15px; border-radius: 5px;">
        <h3>${index + 1}. ${lead[2]} | ${lead[1]}</h3>
        <p><strong>Date:</strong> ${lead[0]}</p>
        <p><strong>Email:</strong> ${lead[3]}</p>
        <p><strong>Contact:</strong> ${lead[4]}</p>
        <p><strong>Project Interest:</strong> ${lead[5]}</p>
        <p><strong>Source:</strong> ${lead[7]}</p>
        ${lead[6] && lead[6] !== 'No message' ? `<p><strong>Message:</strong> ${lead[6]}</p>` : ''}
        ${lead[11] ? `<p><strong>Budget:</strong> ${lead[11]}</p>` : ''}
        ${lead[12] ? `<p><strong>Purchase Timeline:</strong> ${lead[12]}</p>` : ''}
        ${lead[13] ? `<p><strong>WhatsApp:</strong> ${lead[13]}</p>` : ''}
        ${lead[14] ? `<p><strong>City:</strong> ${lead[14]}</p>` : ''}
      </div>
    `;
  });

  emailBody += `
      </div>
      
      <div style="background: #4285f4; color: white; padding: 15px; text-align: center;">
        <p>Giga Group Lead Management System</p>
        <p style="font-size: 12px;">Automated report generated at ${Utilities.formatDate(new Date(), TIMEZONE, 'dd/MM/yyyy hh:mm a')}</p>
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
  const hour = Number(Utilities.formatDate(now, TIMEZONE, 'H'));

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
    .atHour(17)
    .create();

  console.log('Daily trigger set up for 5 PM');
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
