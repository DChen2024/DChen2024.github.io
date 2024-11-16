// Toggles between light mode and dark mode
function toggleDarkMode(e) {
  if (e.checked)
    document.documentElement.style.setProperty("color-scheme", "dark");
  else
    document.documentElement.style.setProperty("color-scheme", "light");
}

// Initialize dark mode toggle state
if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.getElementById("darkmode").checked = true;

// Update the datetime every second
setInterval(
  () => document.getElementById("datetime").innerText = Date(),
1000); // Date().slice(0, 24)
