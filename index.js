function startScan() {
  const domain = document.getElementById("domain").value;
  const output = document.getElementById("output");
  const progressBar = document.getElementById("progress");

  if (!domain) {
    alert("Please enter a domain!");
    return;
  }

  output.innerHTML = "";
  progressBar.style.width = "0%";

  // Simulated subdomains
  const subdomains = [
    "www",
    "mail",
    "admin",
    "api",
    "blog",
    "dev",
    "test",
    "shop"
  ];

  let i = 0;

  function scanNext() {
    if (i >= subdomains.length) return;

    let sub = subdomains[i] + "." + domain;

    let line = document.createElement("div");
    line.innerHTML = "[SCANNING] " + sub;
    line.classList.add("scanning");
    output.appendChild(line);

    output.scrollTop = output.scrollHeight;

    // Update progress
    let percent = ((i + 1) / subdomains.length) * 100;
    progressBar.style.width = percent + "%";

    // After delay, mark as found
    setTimeout(() => {
      line.innerHTML = "[FOUND] " + sub;
      line.classList.remove("scanning");
      line.classList.add("found");
    }, 200);

    i++;
    setTimeout(scanNext, 400);
  }

  scanNext();
}
