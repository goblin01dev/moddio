var i = document.getElementById("chat-box").style.borderRadius = "5px"; document.getElementById("chat-box").style.borderStyle = "dotted";
function mod() {
  setInterval(()=>{
    postMessage(i);
  },1000)
}
mod();
