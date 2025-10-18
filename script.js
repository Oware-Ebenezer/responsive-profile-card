function updateTime() {
  const timeStamp = document.querySelector('[data-testid = "test-user-time"]');
  if (timeStamp) {
    // const now = new Date();
    // const hr = String(now.getHours()).padStart(2, "0");
    // const mins = String(now.getMinutes()).padStart(2, "0");
    // const sec = String(now.getSeconds()).padStart(2, "0");
    // timeStamp.textContent = `${hr}: ${mins}: ${sec} ms`;
    timeStamp.textContent = `${Date.now()}ms`;
  }
}

updateTime();
setInterval(updateTime, 1000);

const avatar = document.querySelector('[data-testid="test-user-avatar"]');
avatar.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => (avatar.src = ev.target.result);
    reader.readAsDataURL(file);
  };
  input.click();
});
