// Google Ads Conversion Tracking Utility
// 
// SETUP INSTRUCTIONS:
// 1. Go to Google Ads > Tools & Settings > Conversions
// 2. Create conversion actions for:
//    - Phone Calls (when someone clicks to call)
//    - WhatsApp Clicks (when someone clicks WhatsApp button)
// 3. For each conversion action, copy the conversion ID and label
//    Format: AW-CONVERSION_ID/CONVERSION_LABEL
// 4. Replace the placeholder values below with your actual conversion labels
//
// Example: If your conversion ID is AW-123456789 and label is AbC-D_efG-hIj12,
//          the conversion label would be: 'AW-123456789/AbC-D_efG-hIj12'

/**
 * Track Google Ads conversion
 * @param {string} conversionLabel - The conversion label from Google Ads (format: AW-XXXXX/XXXXX)
 * @param {string} conversionValue - Optional conversion value
 * @param {string} currency - Currency code (default: 'AED')
 */
export const trackConversion = (conversionLabel, conversionValue = null, currency = 'AED') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': conversionLabel,
      'value': conversionValue,
      'currency': currency,
      'transaction_id': ''
    });
  }
};

/**
 * Track phone call conversion
 * 
 * TO SETUP:
 * 1. In Google Ads, create a conversion action for "Phone calls"
 * 2. Copy the conversion ID and label
 * 3. Replace 'AW-XXXXX/XXXXX' below with your actual conversion label
 */
export const trackPhoneCall = () => {
  // Google Ads Phone Call Conversion Label
  // Format: 'AW-CONVERSION_ID/CONVERSION_LABEL'
  const phoneConversionLabel = 'AW-11336173490/bRyVCIenj9QbELKPwZ0q';
  
  // Track conversion
  trackConversion(phoneConversionLabel, 2500.0, 'PKR');
  
  // Always track as a custom event for analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      'event_category': 'engagement',
      'event_label': 'phone_call_click',
      'value': 1
    });
  }
};

/**
 * Track WhatsApp click conversion
 * 
 * TO SETUP:
 * 1. In Google Ads, create a conversion action for "WhatsApp clicks"
 * 2. Copy the conversion ID and label
 * 3. Replace 'AW-XXXXX/XXXXX' below with your actual conversion label
 */
export const trackWhatsAppClick = () => {
  // Google Ads WhatsApp Conversion Label
  // Format: 'AW-CONVERSION_ID/CONVERSION_LABEL'
  const whatsappConversionLabel = 'AW-11336173490/Rj4_CODEj9QbELKPwZ0q';
  
  // Track conversion
  trackConversion(whatsappConversionLabel, 2500.0, 'PKR');
  
  // Always track as a custom event for analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': 'whatsapp_click',
      'value': 1
    });
  }
};

/**
 * Track button click conversion
 * @param {string} buttonName - Name of the button clicked
 */
export const trackButtonClick = (buttonName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      'event_category': 'engagement',
      'event_label': buttonName,
      'value': 1
    });
  }
};

/**
 * Track page view
 * @param {string} pagePath - Path of the page
 */
export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GT-KFTQ5FS', {
      'page_path': pagePath
    });
  }
};

