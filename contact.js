const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;
  const fields = ["name", "email", "subject", "message"];
  fields.forEach((field) => {
    const inputField = document.getElementById(`contact-${field}`);
    const errorField = document.getElementById(`test-contact-error-${field}`);
    errorField.textContent = "";

    if (!inputField.value.trim()) {
      errorField.textContent = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required`;
      hasError = true;
    } else if (field === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(inputField.value.trim())) {
        errorField.textContent = "Please enter a valid email address";
        hasError = true;
      }
    } else if (field === "message" && inputField.value.trim().length < 10) {
      errorField.textContent = "Message must be at least 10 characters long";
      hasError = true;
    }
  });

  if (!hasError) {
    toast.classList.add("show");
    toast.textContent = "Message sent successfully!";
    form.reset();
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
