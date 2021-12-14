
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



//================CONFIRMAR REGISTRO NEWSLETTER ============================//


const confirmarRegistro = document.getElementById("completar-registro")

const inputNombre = document.getElementById("input-nombre")
const inputEdad = document.getElementById("input-edad")
const inputEmail = document.getElementById("input-email")

const actividad = document.getElementById("actividad")



confirmarRegistro.addEventListener ("click", () => {
      
      if (inputNombre.value.length < 1 || inputEdad.value.length < 1 || inputEmail.value.length < 1) {

            contenedorRegistro.classList.toggle('registro-active') 
            document.getElementById("formato-registro").reset()  

            Swal.fire({
                  icon: 'error',
                  title: 'Ay no! Ocurrió un Error...',
                  text: 'Por favor vuelve a intentarlo - Asegrúrate de llenar todas las casillas y de insertar solo números enteros para tu edad.', 
                  timer: 3500
                        
            })               
        

      }else {

            contenedorRegistro.classList.toggle('registro-active')   

            Swal.fire({
                title: '<strong><u>Registro Exitoso</u></strong>',
                icon: 'success',
                html:
                  '¡En hora buena ' + inputNombre.value +'!. Tu registro al Newsletter ha sido completado correctamente. ' + 'A partir del mes siguiente empezarás a recibir toda la información reelevante sobre ' + actividad.value + '  en México.  ' +
                  '<br><br><h3><strong>¡Gracias por Confiar en Nosotr@s!</strong></h3>' ,
                showCloseButton: true,        
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i> Genial!',
                confirmButtonAriaLabel: 'Thumbs up, great!', 
            })

            document.getElementById("formato-registro").reset()
            


      }
  
})

