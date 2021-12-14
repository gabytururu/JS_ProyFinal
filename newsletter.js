
// ================= Navegación =====================//

const botonPagReservas = document.getElementById("generarReserva")

botonPagReservas.addEventListener("click", () => {

    location.href = "reserva.html"

})

// ================= MODAL NEWSLETTER ==============================//

const contenedorRegistro = document.getElementsByClassName('modal-registro')[0]

const botonRegistro = document.getElementById('newsletter')

botonRegistro.addEventListener("click", () => {

    contenedorRegistro.classList.toggle("registro-active")

})

const botonCerrarRegistro = document.getElementById('cerrarRegistro')

botonCerrarRegistro.addEventListener('click', ()=>{

    contenedorRegistro.classList.toggle('registro-active')

})

//================CONFIRMAR REGISTRO ============================//


const confirmarRegistro = document.getElementById("completar-registro")

confirmarRegistro.addEventListener("click", () =>{

    let nombre = document.getElementById("input-nombre")
    let edad = document.getElementById ("input-edad")
    let email = document.getElementById ("input-email")

    let nombreInput = nombre.value
    let edadInput = edad.value
    let emailIput = email.value


    if ( nombreInput.length < 1 || edadInput.length < 1 || emailIput.length < 1) {

       alert("ay no")
    
      }else {

    contenedorRegistro.classList.toggle('registro-active')

    let actividadesDeInteres = document.getElementById("actividad")

    let actividadElegida = actividadesDeInteres.value      

    Swal.fire({
        title: '<strong><u>Registro Exitoso</u></strong>',
        icon: 'success',
        html:
          '¡En hora buena ' + nombre.value +'!. Tu registro al Newsletter ha sido completado correctamente. ' + 'A partir del mes siguiente empezarás a recibir toda la información reelevante sobre ' + actividadElegida + '  en México.  ' +
          '<br><br><h3><strong>¡Gracias por Confiar en Nosotr@s!</strong></h3>' ,
        showCloseButton: true,        
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        
      })

    }

    
})







// const resEscalada = document.getElementById("resEscalada")

// resEscalada.addEventListener("click", () => {

//     let actividad = "escalada" 

//     function precioActividad (actividad) {

//    switch (actividad) {
//       case "escalada":
//          return precioPersona = 100
         
//       case "bicitour":
//          return precioPersona = 80
         
//       case "senderismo":
//          return precioPersona = 60
         
//       default:
//          return precioPersona = 0
         
//    }

// }

// alert ("Excelente elección, el precio por persona de esta actividad es de " + precioActividad(actividad) + " USD. Te enviaremos esta información a tu correo electrónico. Gracias por tu preferencia")