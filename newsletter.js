
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
                  text: 'No es posible completar tu registro si no llenas todas las casillas. Por Favor vuelve a intentarlo.', 
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


// const confirmarRegistro = document.getElementById("completar-registro")

// let nombre = document.getElementById("input-nombre")
// let edad = document.getElementById ("input-edad")
// let email = document.getElementById ("input-email")

// let nombreInput = nombre.value
// let edadInput = edad.value
// let emailInput = email.value



//     confirmarRegistro.addEventListener("click", () => {

//       console.log(nombreInput)
//       console.log(edadInput)
//       console.log(emailInput)
//     })

  
//     contenedorRegistro.classList.toggle('registro-active')   

//     Swal.fire({
//         title: '<strong><u>Registro Exitoso</u></strong>',
//         icon: 'success',
//         html:
//           '¡En hora buena ' + nombre.value +'!. Tu registro al Newsletter ha sido completado correctamente. ' + 'A partir del mes siguiente empezarás a recibir toda la información reelevante sobre ' + actividadElegida + '  en México.  ' +
//           '<br><br><h3><strong>¡Gracias por Confiar en Nosotr@s!</strong></h3>' ,
//         showCloseButton: true,        
//         focusConfirm: false,
//         confirmButtonText:
//           '<i class="fa fa-thumbs-up"></i> Genial!',
//         confirmButtonAriaLabel: 'Thumbs up, great!', 
//         })

//         // document.getElementById("formato-registro").reset()                
        
//       })
//       console.log(nombreInput)


      // Swal.fire({
      //   icon: 'error',
      //   title: 'Ay no! Ocurrió un Error...',
      //   text: 'No has agregado ninguna actividad. Por ello no es posible confirmar tus reservaciones.',       
      //   })    
  
          
        //  if (nombreInput.length < 1 || edadInput.length < 1 || emailInput.length < 1) {

        //         alert("Disculpa, no podemos registrarte a menos que todos los campos estén llenos correctamente. Recuerda que la celda de Edad sólo admite valores numéricos y la del correo electrónico debe incluir el signo de @ para ser correctamente registrados intenta nuevamente")   

        //         document.getElementById("formato-registro").reset()                
        //         location.reload()


              
        // } else {            

        //         contenedorRegistro.classList.toggle('registro-active')

        //         let actividadesDeInteres = document.getElementById("actividad")

        //         let actividadElegida = actividadesDeInteres.value      

        //         Swal.fire({
        //             title: '<strong><u>Registro Exitoso</u></strong>',
        //             icon: 'success',
        //             html:
        //               '¡En hora buena ' + nombre.value +'!. Tu registro al Newsletter ha sido completado correctamente. ' + 'A partir del mes siguiente empezarás a recibir toda la información reelevante sobre ' + actividadElegida + '  en México.  ' +
        //               '<br><br><h3><strong>¡Gracias por Confiar en Nosotr@s!</strong></h3>' ,
        //             showCloseButton: true,        
        //             focusConfirm: false,
        //             confirmButtonText:
        //               '<i class="fa fa-thumbs-up"></i> Genial!',
        //             confirmButtonAriaLabel: 'Thumbs up, great!',
              
        //             })
                                             

        //         }
        // }) 
