const STORAGE_KEY = "feedback-form-state"
const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener("input", addStorage);
function addStorage(event) {
  const email = input.value.trim();
  const message = textarea.value.trim();
  const data = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailValue = input.value.trim();
  const messageValue = textarea.value.trim();
  if (emailValue === "" || messageValue === "") {
    console.log("No saved data");
  } else {
    const saveData = addStorage();
    console.log(saveData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}

function pageRefresh() {
  const json = localStorage.getItem(STORAGE_KEY) ?? "";
  try {
    const data = JSON.parse(json);
    console.log(data);
    input.value = data.email;
    textarea.value = data.message;
  }
  catch {
    console.log("No saved data");
  }
}
pageRefresh();