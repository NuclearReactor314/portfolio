const emojis = ["😂", "💻", "🦅", "🏃‍♀️", "💥", "😵", "🎵", "🔥", "🚀"];
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "fixed";
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = Math.random() * window.innerHeight + "px";
  emoji.style.fontSize = "2rem";
  emoji.style.zIndex = 9999;
  emoji.style.transition = "all 3s linear";
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 3000);
}, 500);
