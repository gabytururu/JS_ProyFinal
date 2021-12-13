
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

    contenedorRegistro.classList.toggle('registro-active')




    Swal.fire({
        title: '<strong><u>Registro Exitoso</u></strong>',
        icon: 'success',
        html:
          '¡En hora buena! Ya eres parte de la lista de receptores de nuestro news letter. ' + 'A inicios del mes siguiente empezarás a recibir toda la información reelevante sobre el mundo del Outdoors en México.  ' +
          '<br><br><h3><strong>¡Gracias por Confiar en Nosotr@s!</strong></h3> ' ,
        showCloseButton: true,        
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        
      })

    
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