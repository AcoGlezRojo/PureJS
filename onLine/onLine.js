/**
 * Check if device is connected to the internet
 */
document.addEventListener("DOMContentLoaded", function () {
  function updateStatus() {
    console.log("is device online?", navigator.onLine);
    //it returns a online/offline status
  }
  // Initial status check
  updateStatus();
  // Listen for status changes
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
});
