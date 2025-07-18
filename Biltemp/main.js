function calculate() {
  const temp = parseFloat(document.getElementById('temp').value);
  const time = parseFloat(document.getElementById('time').value);
  const sun = document.getElementById('sun').checked;
  const windows = document.getElementById('windows').checked;

  let risk = temp + (sun ? 15 : 5) + (time * 0.5) - (windows ? 5 : 0);
  let status = "";

  if (risk < 30) status = "Låg risk";
  else if (risk < 40) status = "Måttlig risk";
  else status = "HÖG RISK!";

  document.getElementById('result').textContent = `Beräknad temperatur: ${risk.toFixed(1)} °C – ${status}`;
}