async function fetchUnifiLogs() {
  const response = await fetch('https://your-backend-api/unifi-logs');
  const data = await response.json();
  document.getElementById("logOutput").textContent = JSON.stringify(data, null, 2);
}

window.onload = fetchUnifiLogs;
