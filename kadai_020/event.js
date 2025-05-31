const btnId = document.getElementById("btn");

btnId.addEventListener("click", () => {
  const textId = document.getElementById("text");
  textId.textContent = "ボタンをクリックしました";
})