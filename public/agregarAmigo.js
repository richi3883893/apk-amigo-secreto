let formu = document.getElementById("formu");
let inputAmigo = document.getElementById("amigo")
let inputNumero = document.getElementById("numero")
const randomNumber = Math.floor(Math.random() * 10) + 1;
   console.log(randomNumber)

formu.addEventListener("submit", (e) => {
    
    e.preventDefault();
    if(inputNumero.value === "" || inputAmigo.value === "" ){
     console.log("no se permiten datos vacios")
    }else{
        let datos = { 
            numero : inputNumero.value,
            amigo: inputAmigo.value
         };
         
         let arrayAmigos = JSON.parse(localStorage.getItem('amigo')) || [];
         arrayAmigos.unshift(datos);
 
        
         localStorage.setItem('amigo', JSON.stringify(arrayAmigos));
 
         inputAmigo.value = "";
         inputNumero.value = "";


        

    }
   

    
});
