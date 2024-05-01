const form = document.getElementById("createForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("mascota creada exitosamente", event);

  const formData = new FormData(form);
  const birthDateFormControl = formData.get("birthDate");
  console.log(birthDateFormControl);

  console.log("nombre mascota", formData.get("petName"));
  console.log(`birthDate:${birthDate}`);
  console.log(`petName:${petName}`);
  
});
