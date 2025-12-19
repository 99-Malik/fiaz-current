# Google Ads Conversion Tracking Setup Guide

This guide will help you complete the Google Ads conversion tracking setup for your website.

## Current Setup Status

✅ **Google Tag Manager**: Already configured with ID `GT-KFTQ5FS`  
✅ **Conversion Tracking Functions**: All phone and WhatsApp buttons are set up to track conversions  
⚠️ **Conversion Labels**: Need to be configured in `src/lib/gtag.js`

## Step-by-Step Setup Instructions

### Step 1: Create Conversion Actions in Google Ads

1. Log in to your [Google Ads account](https://ads.google.com)
2. Click on **Tools & Settings** (wrench icon) in the top right
3. Under **Measurement**, click **Conversions**
4. Click the **+** button to create a new conversion action

### Step 2: Create Phone Call Conversion

1. Select **Website** as the conversion source
2. Choose **Phone calls** as the conversion category
3. Fill in the details:
   - **Conversion name**: "Phone Call Click"
   - **Category**: Phone call leads
   - **Value**: Set to "Use different values for each conversion" (optional)
   - **Count**: One
   - **Click-through window**: 30 days (recommended)
   - **View-through window**: 1 day
4. Click **Create and continue**
5. On the "Tag setup" page, select **Use Google Tag Manager** or **Install the tag yourself**
6. Copy the **Conversion ID** and **Conversion Label**
   - Format: `AW-XXXXXXXXX` (Conversion ID)
   - Format: `AbC-D_efG-hIj12` (Conversion Label)

### Step 3: Create WhatsApp Click Conversion

1. Create another conversion action following the same steps
2. **Conversion name**: "WhatsApp Click"
3. **Category**: Website engagement
4. Copy the Conversion ID and Label

### Step 4: Update the Code

1. Open `src/lib/gtag.js`
2. Find the `trackPhoneCall` function
3. Replace `'AW-XXXXX/XXXXX'` with your phone call conversion label:
   ```javascript
   const phoneConversionLabel = 'AW-123456789/AbC-D_efG-hIj12';
   ```
4. Find the `trackWhatsAppClick` function
5. Replace `'AW-XXXXX/XXXXX'` with your WhatsApp conversion label:
   ```javascript
   const whatsappConversionLabel = 'AW-123456789/XyZ-A_bC-dEf34';
   ```

### Step 5: Test Your Setup

1. Deploy your changes
2. Visit your website
3. Click on a phone or WhatsApp button
4. In Google Ads, go to **Tools & Settings > Conversions**
5. Check if conversions are being recorded (may take 24-48 hours to appear)

## What's Being Tracked

### Phone Call Conversions
- ✅ Header phone button clicks
- ✅ Footer phone button clicks
- ✅ Fixed floating phone button clicks
- ✅ "Call Us" button clicks throughout the site

### WhatsApp Conversions
- ✅ Header WhatsApp button clicks
- ✅ Footer WhatsApp button clicks
- ✅ Fixed floating WhatsApp button clicks
- ✅ "WhatsApp Us" button clicks throughout the site

### Custom Events
All conversions are also tracked as custom events in Google Analytics/Tag Manager for additional insights.

## Troubleshooting

### Conversions Not Showing Up

1. **Wait 24-48 hours**: Conversions may take time to appear in Google Ads
2. **Check conversion labels**: Ensure they're correctly formatted (AW-XXXXX/XXXXX)
3. **Verify Google Tag**: Make sure `GT-KFTQ5FS` is loading correctly
4. **Use Google Tag Assistant**: Install the Chrome extension to debug
5. **Check browser console**: Look for any JavaScript errors

### Testing Conversions

1. Use Google Ads' **Conversion Tracking Test Tool**
2. Or use browser DevTools to check if `gtag('event', 'conversion', ...)` is being called
3. Check the Network tab for requests to `google-analytics.com` or `googletagmanager.com`

## Additional Resources

- [Google Ads Conversion Tracking Help](https://support.google.com/google-ads/answer/1727054)
- [Google Tag Manager Documentation](https://developers.google.com/tag-manager)
- [Google Analytics Events](https://developers.google.com/analytics/devguides/collection/gtagjs/events)

## Support

If you need help setting up conversions, contact your Google Ads representative or refer to the Google Ads Help Center.

