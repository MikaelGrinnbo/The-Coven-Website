
function copyIP() {
    const ip = "play.thecoven.se";
    const btn = document.getElementById("ipButton");
    const originalText = "Play Now";
    
    const tempInput = document.createElement("textarea");
    tempInput.value = ip;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    try {
      document.execCommand("copy");
      
      btn.innerText = "IP kopiert!";
      btn.style.backgroundColor = "#5c9c5c";
      
      setTimeout(function() {
        btn.innerText = "Husk whitelist!";
        btn.style.fontSize = "13px";
      }, 1500);
      
      setTimeout(function() {
        btn.innerText = originalText;
        btn.style.fontSize = "16px";
        btn.style.backgroundColor = "";
      }, 4500);
      
    } catch (err) {
      console.error('Feil under kopiering', err);
    }
    
    document.body.removeChild(tempInput);
  }

  function copyBedrockPort() {
    const port = "12028";
    const btn = document.getElementById("bedrockPortButton");
    const originalText = "Bedrock Port";
    
    const tempInput = document.createElement("textarea");
    tempInput.value = port;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    try {
      document.execCommand("copy");
      
      btn.innerText = "Port kopiert!";
      btn.style.backgroundColor = "#5c9c5c";
      
      setTimeout(function() {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
      }, 2000);
      
    } catch (err) {
      console.error('Feil under kopiering', err);
    }
    
    document.body.removeChild(tempInput);
  }