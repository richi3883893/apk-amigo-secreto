let contentAmigo = document.getElementById("contentAmigo");
let FotoAmigo = document.getElementById("FotoAmigo");

const randomNumber = Math.floor(Math.random() * 10) + 1;

let usuarioGuardado = JSON.parse(localStorage.getItem('amigo')); 
let amigoEncontrado = false;

usuarioGuardado.forEach((element, index) => {
  if (randomNumber === parseInt(element.numero)) {
    let div = document.createElement("div");
    div.textContent = element.amigo;
    contentAmigo.appendChild(div);
    amigoEncontrado = true;

    switch (div.textContent) {
      case "Jesus":
        FotoAmigo.style.backgroundImage = "url(../imagenes/jesus.jpg)";
        break;
      case "Yeris":
        FotoAmigo.style.backgroundImage = "url(../imagenes/yeris.jpg)";
        break;
      case "Juan Pablo":
        FotoAmigo.style.backgroundImage = "url(../imagenes/juanPablo.jpg)";
        break;
      case "Valentina":
        FotoAmigo.style.backgroundImage = "url(../imagenes/valentina.jpg)";
        break;
      case "Vanesa":
        FotoAmigo.style.backgroundImage = "url(../imagenes/vanesa.jpg)";
        break;
      case "Magola":
        FotoAmigo.style.backgroundImage = "url(../imagenes/magola.jpg)";
        break;
      case "Francy":
        FotoAmigo.style.backgroundImage = "url(../imagenes/francy.jpg)";
        break;
      case "Richard Hijo":
        FotoAmigo.style.backgroundImage = "url(../imagenes/richardh.jpg)";
        break;
      case "Heidi":
        FotoAmigo.style.backgroundImage = "url(../imagenes/heidi.jpg)";
        break;
      case "Richard":
        FotoAmigo.style.backgroundImage = "url(../imagenes/richard.jpg)";
        break;
      default:
        FotoAmigo.textContent = "no se encontró ningún amigo";
        break;
    }

    
    FotoAmigo.style.backgroundSize = "cover";
    FotoAmigo.style.backgroundPosition = "center";
    FotoAmigo.style.backgroundRepeat = "no-repeat";

   
    usuarioGuardado = usuarioGuardado.filter((_, i) => i !== index); 
    localStorage.setItem('amigo', JSON.stringify(usuarioGuardado)); 
  }
});


if (!amigoEncontrado) {
  setTimeout(() => {
    window.location.href = 'traerAmigo.html';
  }, 3000);
}
