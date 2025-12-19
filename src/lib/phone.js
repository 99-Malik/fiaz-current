export const phoneNumber = "+971567197511";

// Predefined WhatsApp message
export const whatsappMessage = "Hello! I need help with appliance repair services.";

// Get WhatsApp URL with predefined message
export const getWhatsAppUrl = () => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};