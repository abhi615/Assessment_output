// utils.js

// Keep the "export" keyword directly before the function name
export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  // You might want a slightly more accurate format to match the screenshot, 
  // e.g., "DD/MM/YYYY" or relative date logic. 
  // For now, let's keep the existing format.
  return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
}