let mascotas = [];

const form = document.getElementById("create-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //obtener datos de los input´s (controles de formulario)
  const formData = new FormData(form);

  //construcción del nuevo objeto
  let mascota = {
    nombre: formData.get("nombre"),
    especie: "",
    raza: "",
    fechaDeNacimiento: formData.get("fechaDeNacimiento"),
    peso: "",
    estado: "",
    propietario: formData.get("propietario"),
    documento: "",
    telefono: "",
    correo: "",
  };
  const prototipoMascota = `
  <div class="card mascota" style="width: 18rem;">
                  <img src="https://source.unsplash.com/random/1920x1080" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Nombre:${mascota.nombre}</h5>
                      <p class="card-text"> Edad:${mascota.fechaDeNacimiento}.</p>
                      <p class="card-text"> Nombre propietario: Marylin Restrepo</p>
                  <a href="#" class="btn btn-primary">Actualizar</a>
                  </div>
              </div>
  `;
  const mascotasContenedor = document.getElementById("mascotas");
  mascotasContenedor.innerHTML += prototipoMascota;

  mascotas.push(mascota);
  // console.log(mascotas);
});
