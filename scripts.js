/**
 * Check if device is connected to the internet
 */
document.addEventListener("DOMContentLoaded", function () {
  const statusIndicator = document.querySelector(".status-indicator");

  function updateStatus() {
    console.log("updateStatus", navigator.onLine);
    if (navigator.onLine) {
    } else {
    }
  }
  // Initial status check
  updateStatus();
  // Listen for status changes
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
});
