# Al Ghurair Giga Lead Management API Documentation

## Overview

The Al Ghurair Giga Lead Management API handles form submissions from the website and stores them in Google Sheets with automated daily email reports.

**Base URL:** `https://script.google.com/macros/s/{scriptId}/exec`

**API Version:** 1.0.0

---

## Features

- ✅ Lead form submission (Registration, Contact, Project Single)
- ✅ Automatic data storage in Google Sheets
- ✅ Daily email summaries at 5 PM PKT
- ✅ Email and phone number validation
- ✅ Source tracking for lead analytics

---

## Authentication

This API does not require authentication. The Google Apps Script web app should be deployed with "Anyone" access.

---

## Endpoints

### Submit a New Lead

Submit a lead form from the website. The lead will be stored in Google Sheets and included in the daily email summary if submitted during business hours.

**Endpoint:** `POST /`

#### Request

**Content-Type:** `application/json`

**Required Fields:**
- `name` (string): Full name of the lead
- `email` (string): Email address (will be converted to lowercase)
- `contact` (string): Phone number (Pakistani format supported)

**Optional Fields:**
- `timestamp` (string, ISO 8601): Timestamp of the submission (auto-generated if not provided)
- `project` (string): Project interest (defaults to 'Not specified')
- `message` (string): Additional message (defaults to 'No message')
- `source` (string): Source page - one of: `Registration`, `Contact`, `Project Single`, `Unknown` (defaults to 'Unknown')
- `status` (string): Lead status (defaults to 'New Lead')

#### Request Body Schema

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "name": "Ahmad Khan",
  "email": "ahmad@example.com",
  "contact": "+92-300-1234567",
  "project": "Goldcrest Views",
  "message": "I'm interested in learning more about this project",
  "source": "Registration",
  "status": "New Lead"
}
```

#### Request Examples

**Registration Form Submission:**

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "name": "Ahmad Khan",
  "email": "ahmad@example.com",
  "contact": "+92-300-1234567",
  "project": "Goldcrest Views",
  "message": "I'm interested in learning more about this project",
  "source": "Registration",
  "status": "New Lead"
}
```

**Contact Form Submission:**

```json
{
  "timestamp": "2024-01-15T11:00:00.000Z",
  "name": "Sara Ali",
  "email": "sara@example.com",
  "contact": "+92-321-9876543",
  "project": "Not specified",
  "message": "Please contact me regarding investment opportunities",
  "source": "Contact",
  "status": "New Lead"
}
```

**Project Single Page Inquiry:**

```json
{
  "timestamp": "2024-01-15T12:00:00.000Z",
  "name": "Mohammad Hassan",
  "email": "hassan@example.com",
  "contact": "+92-333-5557777",
  "project": "Giga City",
  "message": "I want to schedule a site visit",
  "source": "Project Single",
  "status": "New Lead"
}
```

#### Response

**Success Response (200 OK):**

```json
{
  "success": true
}
```

**Error Response (400 Bad Request):**

```json
{
  "success": false,
  "error": "Name, email, and contact are required fields"
}
```

**Error Response (500 Internal Server Error):**

```json
{
  "success": false,
  "error": "Error processing form submission: [error details]"
}
```

---

## Data Models

### LeadSubmission

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `timestamp` | string (ISO 8601) | No | ISO 8601 timestamp of the submission | `"2024-01-15T10:30:00.000Z"` |
| `name` | string | **Yes** | Full name of the lead (1-100 characters) | `"Ahmad Khan"` |
| `email` | string (email) | **Yes** | Email address (will be converted to lowercase) | `"ahmad@example.com"` |
| `contact` | string | **Yes** | Phone number (Pakistani format: +92, 92, or 0 prefix) | `"+92-300-1234567"` |
| `project` | string | No | Project interest (defaults to 'Not specified') | `"Goldcrest Views"` |
| `message` | string | No | Additional message (defaults to 'No message') | `"I'm interested..."` |
| `source` | string | No | Source page: `Registration`, `Contact`, `Project Single`, or `Unknown` | `"Registration"` |
| `status` | string | No | Lead status (defaults to 'New Lead') | `"New Lead"` |

### SuccessResponse

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Indicates if the operation was successful |

### ErrorResponse

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Always `false` for error responses |
| `error` | string | Error message describing what went wrong |

---

## Validation Rules

### Email Validation

- Must be a valid email format
- Will be automatically converted to lowercase
- Pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`

### Phone Number Validation

- Supports Pakistani phone number formats
- Patterns accepted:
  - `+92XXXXXXXXXX` (with country code)
  - `92XXXXXXXXXX` (without plus)
  - `0XXXXXXXXXX` (local format)
- Spaces and hyphens are automatically removed during validation
- Pattern: `^(\+92|92|0)?[0-9]{10}$`

### Required Fields

- `name`: Must be at least 1 character, max 100 characters
- `email`: Must be a valid email format
- `contact`: Must match Pakistani phone number pattern

---

## Error Codes

| Status Code | Description | Possible Causes |
|-------------|-------------|-----------------|
| `200` | Success | Lead submitted successfully |
| `400` | Bad Request | Missing required fields, invalid email/phone format |
| `500` | Internal Server Error | Google Sheets error, script execution error |

---

## Usage Examples

### JavaScript (Fetch API)

```javascript
const submitLead = async (formData) => {
  const submissionData = {
    timestamp: new Date().toISOString(),
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    contact: formData.contact.trim(),
    project: formData.project || 'Not specified',
    message: formData.message || 'No message',
    source: formData.source || 'Unknown',
    status: 'New Lead'
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    });

    // Note: no-cors mode means we can't read the response
    // But if no error is thrown, the submission was successful
    console.log('Form submitted successfully');
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};
```

### cURL

```bash
curl -X POST "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2024-01-15T10:30:00.000Z",
    "name": "Ahmad Khan",
    "email": "ahmad@example.com",
    "contact": "+92-300-1234567",
    "project": "Goldcrest Views",
    "message": "I'\''m interested in learning more about this project",
    "source": "Registration",
    "status": "New Lead"
  }'
```

### Python

```python
import requests
import json
from datetime import datetime

def submit_lead(name, email, contact, project=None, message=None, source="Unknown"):
    url = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
    
    data = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "name": name.strip(),
        "email": email.strip().lower(),
        "contact": contact.strip(),
        "project": project or "Not specified",
        "message": message or "No message",
        "source": source,
        "status": "New Lead"
    }
    
    try:
        response = requests.post(url, json=data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error submitting lead: {e}")
        raise
```

---

## Google Sheets Data Structure

When a lead is submitted, it is stored in Google Sheets with the following columns:

| Column | Description | Example |
|--------|-------------|---------|
| A: Timestamp | Submission time (Pakistan timezone) | `01/15/2024, 03:30 PM` |
| B: Name | Full name | `Ahmad Khan` |
| C: Email | Email address | `ahmad@example.com` |
| D: Contact | Phone number | `+92-300-1234567` |
| E: Project | Project interest | `Goldcrest Views` |
| F: Message | Additional message | `I'm interested...` |
| G: Source | Source page | `Registration` |
| H: Status | Lead status | `New Lead` |
| I: Notes | Team notes (empty initially) | - |
| J: Follow-up Date | Follow-up date (empty initially) | - |

---

## Daily Email Reports

The system automatically sends daily email summaries at **5 PM PKT** to `gigagroup.dev@gmail.com`.

### Email Content Includes:

- Total leads received today
- Breakdown by source (Registration, Contact, Project Single)
- Detailed list of all leads with:
  - Name and submission time
  - Email and contact information
  - Project interest
  - Source page
  - Message (if provided)

---

## Rate Limits

- Google Apps Script: Free tier allows up to 20,000 executions per day
- Google Sheets: Free tier allows up to 15GB storage
- Gmail: Free tier allows up to 500 emails per day

For typical usage, these limits are more than sufficient.

---

## Support

For API support or questions, contact:
- **Email:** gigagroup.dev@gmail.com
- **Company:** Giga Group
- **Address:** Giga City, DHA Phase II Islamabad, Pakistan-44000

---

## Changelog

### Version 1.0.0 (2024-01-15)
- Initial API release
- Lead submission endpoint
- Google Sheets integration
- Daily email reports
- Email and phone validation

---

## License

Proprietary - © Giga Group. All rights reserved.

