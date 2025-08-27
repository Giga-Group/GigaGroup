# Al Ghurair Giga - Google Sheets Lead Management Setup Guide

## 📋 Overview
This guide will help you set up the centralized lead management system that collects form data from all pages (Registration, Contact, Project Single) and stores it in Google Sheets with automated daily email reports.

## 🚀 Step-by-Step Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Al Ghurair Giga Leads"
4. Copy the Sheet ID from the URL (long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

### Step 2: Set up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default `Code.gs` content with the code from `Google_Apps_Script.js`
4. Update the `SHEET_ID` variable with your actual Google Sheet ID:
   ```javascript
   const SHEET_ID = 'YOUR_ACTUAL_SHEET_ID_HERE';
   ```

### Step 3: Deploy Web App
1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Description: "Al Ghurair Giga Lead Collection"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/...../exec`)

### Step 4: Update Website Code
1. Open `src/utils/formSubmission.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
   ```

### Step 5: Set up Daily Email Reports
1. In Google Apps Script, run the `setupDailyTrigger()` function once:
   - Select the function from dropdown
   - Click "Run"
   - Authorize permissions when prompted
2. This will send daily lead summaries at 5 PM PKT to info@gigagroup.com

### Step 6: Test the System
1. Run the `testFunction()` in Google Apps Script to verify sheet creation
2. Submit a test form on your website
3. Check Google Sheets to see if data appears

## 📊 What You'll Get

### Google Sheets Dashboard
Your sheet will have these columns:
- **Timestamp** - When the lead was submitted (Pakistan time)
- **Name** - Full name from form
- **Email** - Email address
- **Contact** - Phone number
- **Project** - Project interest (or "Not specified")
- **Message** - Message from form (or "No message")
- **Source** - Where the lead came from (Registration/Contact/Project Single)
- **Status** - Lead status (defaults to "New")
- **Notes** - For your team to add notes
- **Follow-up Date** - For tracking follow-ups

### Daily Email Reports (5 PM PKT)
You'll receive emails like this:
```
Subject: Daily Lead Report - Al Ghurair Giga (5 New Leads)

📈 Daily Summary
• Total Leads Today: 5
• Registration Forms: 3
• Contact Forms: 2
• Project Inquiries: 0

📋 Today's Leads
1. Ahmad Khan | 9:30 AM
   Email: ahmad@email.com
   Contact: +92-300-123456
   Project Interest: Goldcrest Views
   Source: Registration
```

## 🔧 Features

### Form Data Collection
- ✅ **Name, Email, Contact** (required from all forms)
- ✅ **Project Interest** (optional, auto-selected in project pages)
- ✅ **Message** (optional)
- ✅ **Source tracking** (Registration/Contact/Project Single)

### Validation
- ✅ **Email format validation**
- ✅ **Pakistani phone number validation**
- ✅ **Required field checking**

### User Experience
- ✅ **Success/error messages**
- ✅ **Form reset after successful submission**
- ✅ **Consistent experience across all pages**

### Analytics
- ✅ **Lead source tracking**
- ✅ **Daily summaries**
- ✅ **Project interest analysis**
- ✅ **Time-based reporting**

## 🛠️ Troubleshooting

### Forms not submitting?
1. Check browser console for JavaScript errors
2. Verify Google Apps Script URL is correct
3. Ensure Google Apps Script is deployed as "Anyone" access

### Not receiving emails?
1. Check Google Apps Script trigger is set up
2. Verify email address in the script
3. Check spam folder

### Data not appearing in sheets?
1. Run `testFunction()` in Google Apps Script
2. Check Google Apps Script execution logs
3. Verify Sheet ID is correct

## 📈 Benefits

### For Al Ghurair Giga Team:
- 🎯 **Centralized lead management**
- 📊 **Daily performance insights**
- 📞 **Immediate contact information**
- 🏢 **Project interest tracking**
- 📱 **Mobile-accessible via Google Sheets app**

### For Website Visitors:
- ⚡ **Fast form submissions**
- ✅ **Clear success feedback**
- 📝 **Consistent form experience**
- 🔒 **Secure data handling**

## 💰 Cost
- **Completely FREE** for reasonable usage
- Google Sheets: Free for up to 15GB
- Google Apps Script: Free for up to 20,000 executions/day
- Gmail: Free for up to 500 emails/day

This setup will handle thousands of leads per month without any cost!

## 🔄 Next Steps After Setup
1. Test all forms on your website
2. Train your team to use the Google Sheets dashboard
3. Set up additional team members to receive daily emails
4. Customize the email template if needed
5. Add more lead sources as your website grows

Your centralized lead management system is now ready! 🎉