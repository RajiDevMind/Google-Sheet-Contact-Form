const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch("/message", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: msgInput.value,
    }),
  });
  nameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";
});
