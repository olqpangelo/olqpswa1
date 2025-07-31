async function fetchUnifiLogs() {
  const response = await fetch('https://unifi.ui.com/consoles/28704E20271C0000000008237494000000000891E4970000000066784270:538230538/network/default/syslog/main');
  const data = await response.json();
  document.getElementById("logOutput").textContent = JSON.stringify(data, null, 2);
}

window.onload = fetchUnifiLogs;
