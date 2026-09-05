
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (err) {
      console.warn("Clipboard API feilet, prøver fallback", err);
    }
  }

  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "fixed";
  tempInput.style.opacity = "0";
  document.body.appendChild(tempInput);
  tempInput.select();

  const copied = document.execCommand("copy");
  tempInput.remove();

  if (!copied) {
    throw new Error("Kopiering ble avvist av nettleseren");
  }
}

async function copyIP() {
  const btn = document.getElementById("ipButton");

  try {
    await copyText("play.thecoven.se");
    btn.innerText = "IP kopiert!";
    btn.style.backgroundColor = "#5c9c5c";

    setTimeout(function() {
      btn.innerText = "Husk whitelist!";
      btn.style.fontSize = "13px";
    }, 1500);

    setTimeout(function() {
      btn.innerText = "Play Now";
      btn.style.fontSize = "16px";
      btn.style.backgroundColor = "";
    }, 4500);
  } catch (err) {
    console.error("Feil under kopiering", err);
    btn.innerText = "Kopiering feilet";
    setTimeout(function() {
      btn.innerText = "Play Now";
    }, 2000);
  }
}

async function copyBedrockPort() {
  const btn = document.getElementById("bedrockPortButton");

  try {
    await copyText("12028");
    btn.innerText = "Port kopiert!";
    btn.style.backgroundColor = "#5c9c5c";

    setTimeout(function() {
      btn.innerText = "Bedrock Port";
      btn.style.backgroundColor = "";
    }, 2000);
  } catch (err) {
    console.error("Feil under kopiering", err);
    btn.innerText = "Kopiering feilet";
    setTimeout(function() {
      btn.innerText = "Bedrock Port";
    }, 2000);
  }
}

const mapFrame = document.querySelector(".map-page iframe");
const mapFallback = document.getElementById("mapFallback");

if (mapFrame && mapFallback) {
  fetch(mapFrame.src, { mode: "no-cors", cache: "no-store" })
    .catch(function() {
      mapFallback.hidden = false;
    });
}

