export const whatsappUrl = (message) => {
  return `https://wa.me/2348109448643?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message) => {
  window.open(whatsappUrl(message), '_blank');
};