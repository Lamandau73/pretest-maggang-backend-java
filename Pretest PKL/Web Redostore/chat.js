const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

function appendMessage(text, fromUser = true) {
  const msg = document.createElement("div");
  msg.className = "message " + (fromUser ? "from-user" : "from-seller");
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (text !== "") {
    appendMessage(text);
    chatInput.value = "";

    setTimeout(() => {
      appendMessage("Terima kasih sudah menghubungi kami! saat ini kami sedang offline", false);
    }, 1000);
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
