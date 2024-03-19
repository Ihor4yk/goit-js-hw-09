const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");

form.addEventListener("input", addStorage);

function addStorage() {
  const jsnObject = JSON.stringify({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  localStorage.setItem("STORAGE_KEY", jsnObject)
}

document.addEventListener("DOMContentLoaded", () => {
  const jsonData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  form.elements.email.value = jsonData.email || "";
  form.elements.message.value = jsonData.message || "";
});

form.addEventListener("submit", removeStorage)

function removeStorage(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem("STORAGE_KEY")));
  localStorage.removeItem("STORAGE_KEY");
  form.elements.email.value = "";
  form.elements.message.value = "";
}