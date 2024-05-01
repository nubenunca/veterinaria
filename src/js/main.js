const form = document.getElementById("createForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("mascota creada exitosamente", event);
});
