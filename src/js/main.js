let mascotas = [];

const form = document.getElementById("createForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //obtener datos de los input´s (controles de formulario) 
  const formData = new FormData(form);

  //construcción del nuevo objeto 
  let mascota = {
    nombre: formData.get("nombre"),
    especie: "",
    raza: "",
    edad: formData.get("edad"),
    peso: "",
    estado: "",
    propietario: formData.get("propietario"),
    documento: "",
    telefono: "",
    correo: "",
  };
  mascotas.push(mascota);
  console.log(mascotas);
});
