function mod() {
  setInterval(()=>{
    var i = document.getElementById("chat-box").style.borderRadius = "5px"; document.getElementById("chat-box").style.borderStyle = "dotted";
    postMessage(i);
  },1000)
}
