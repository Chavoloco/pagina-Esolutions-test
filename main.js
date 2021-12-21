function store() {
  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value;
  let sexo = document.getElementById("sexo").value;
  let fecha = document.querySelector('input[type="date"]').value;
  let email = document.getElementById("email").value;
  let contrasenia = document.getElementById("contrasenia").value;
  const generateId = () => Math.random().toString(36).substr(2, 18);

  let user = {
    nombre: nombre,
    direccion: direccion,
    sexo: sexo,
    fecha: fecha,
    email: email,
    contrasenia: contrasenia,
    respuesta: null,
  };

  localStorage.setItem("user" + generateId(), JSON.stringify(user));
  window.location.href = "./form-login.html";
}

function loguearse() {
  let inputMail = document.getElementById("email").value;
  let inputContrasenia = document.getElementById("contrasenia").value;
  for (let i = 0; i < localStorage.length; i++) {
    let element = localStorage.getItem(localStorage.key(i));
    let email = JSON.parse(element).email;
    let contrasenia = JSON.parse(element).contrasenia;
    if (inputMail === email && inputContrasenia === contrasenia) {
      sessionStorage.setItem("user", element);
      window.location.href = "./encuesta.html";
    } else {
    }
  }
}
function cargarRespuesta() {
  let userMail = JSON.parse(sessionStorage.getItem("user"));
  let movie = document.getElementById("movie").value;
  let serie = document.getElementById("serie").value;
  let book = document.getElementById("movie").value;
  let sport = document.getElementById("sport").value;

  let respuesta = {
    movie: movie,
    serie: serie,
    book: book,
    sport: sport,
  };

  for (let i = 0; i < localStorage.length; i++) {
    const element = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (element.email === userMail.email) {
      elementParse.setItem("respuesta", JSON.stringify(respuesta));
      sessionStorage.clear();
      window.location.href = "./form-registrar.html";
    }
  }
}
