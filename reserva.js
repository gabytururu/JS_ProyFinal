// ================= Navegación =====================//

const botonVolverInicio = document.getElementById("volver-inicio")

botonVolverInicio.addEventListener("click", () => {

    location.href = "inicio.html"

})



// ================= MODAL CARRITO =================================//

// const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
// const botonAbrir = document.getElementById('boton-carrito')
// const botonCerrar = document.getElementById('carritoCerrar')
// const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


// botonAbrir.addEventListener('click', ()=>{
//     contenedorModal.classList.toggle('modal-active')
// })
// botonCerrar.addEventListener('click', ()=>{
//     contenedorModal.classList.toggle('modal-active')
// })

// contenedorModal.addEventListener('click', () => {
//     botonCerrar.click()
// })

// modalCarrito.addEventListener('click', (event) => {
//     event.stopPropagation()
// })




//=================================Creación del Sitio - Oferta Actividades =================================//

const contenedorActividades = document.getElementById("contenedor-ofertasReserva")

window.addEventListener("load", () => {
    cargarActividades(reservaActividades)
})
    
const cargarActividades = (arrayActividades) => {

    contenedorActividades.innerHTML = ""

    arrayActividades.forEach((actividad) => {

        const ofertaActividad = document.createElement ("actividad")
        ofertaActividad.classList.add("col-4", "card", "border-success", "mb-3")
        ofertaActividad.id = `${actividad.id}`

        ofertaActividad.innerHTML =`
                <div class="card-header">${actividad.nombre}</div>
                    <img src=${actividad.img}>
                    <div class="card-body text-primary">            
                    <p class="card-text">${actividad.desc}</p>
                    <p class="card-text"><strong>Precio:</strong> $${actividad.precio}</p>
                    <button id="reservarActividad(${actividad.id})" class="btn btn-primary">Reservar</button>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>        
        `

        contenedorActividades.appendChild(ofertaActividad)

        const botonReserva = document.getElementById(`reservarActividad(${actividad.id})`)
        botonReserva.addEventListener("click", () => {
            agregarReservacion(actividad.id)
    })
})

}



//=================================Controlador de Reservaciones =================================//

// Agregar Reservación

let reservasAcumuladas = []

const agregarReservacion = (actId) => {
    const reserva = reservaActividades.find( (act) => act.id === actId)
    reservasAcumuladas.push(reserva)
    console.log(reservasAcumuladas)

    reservacionesAcumuladas()
    console.log(reservasAcumuladas)
}


// Eliminar Reservación

const eliminarReservacion = (actId) => {
    const reservaEliminada = reservasAcumuladas.find( (act) => act.id === actId)
    const  indice = reservasAcumuladas.indexOf(reservaEliminada)
    reservasAcumuladas.splice(indice,1)

    reservacionesAcumuladas()
    console.log(reservasAcumuladas)

}

// Visualizador de Reservaciones

const contenedorReservasAcum = document.getElementById('carrito-contenedor')

const reservacionesAcumuladas = () => {

    contenedorReservasAcum.innerHTML = ""

    reservasAcumuladas.forEach((res) => {
        const div = document.createElement ("div")
        div.className = "reservaAgregada"
        div.innerHTML =`
                    <p>"Actividad Reservada: ${res.nombre}"</p>
                    <p>"<strong>Precio:</strong>${res.precio}"</p>
                    <button onclick="eliminarReservacion(${res.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        contenedorReservasAcum.appendChild(div)

    })   

    contadorReservas.innerText = reservasAcumuladas.length
    precioTotal.innerText = reservasAcumuladas.reduce((acc, res) => acc + res.precio, 0)
    console.log(precioTotal.innerText)
}

// Vaciado de Reservaciones 

const botonVaciar = document.getElementById("vaciar-reservas")

botonVaciar.addEventListener("click" , () => {
    reservasAcumuladas = []
    reservacionesAcumuladas()
})


// modificación de Cantidad de reservaciones acumuladas

const contadorReservas = document.getElementById("cantidadReservas")



// modificación de Total Acumulado $ por reservaciones acumuladas

const precioTotal = document.getElementById ("total")


// Filtrado de Categorías de Actividades 

const filtrarActividades = document.getElementById("filtrarActividades")


const filtrarPorActividad = () => {
    const tipoActividad = filtrarActividades.value

        if ( tipoActividad === "all") {
            cargarActividades(reservaActividades)

        } else {
            const filtrado = reservaActividades.filter((act) => act.tipo === tipoActividad)
            cargarActividades(filtrado)
        }  
}

    filtrarActividades.addEventListener("change", () => {
        console.log(filtrarActividades.value)
        filtrarPorActividad ()
})

// Confirmar Reservas

        const modalAceptarReserva = document.getElementsByClassName("modal-aceptarReserva")[0]                   
        const botonConfirmarRes = document.getElementById("confirmar-reservas")        
        const botonCerrarVentana = document.getElementById("cerrarVentana")
        const modalInputDatos = document.getElementsByClassName("modal-inputDatos")[0]
        const botonCompletarReg = document.getElementById("completar-registro")

        
        botonCerrarVentana.addEventListener ("click", () => {
            modalAceptarReserva.classList.toggle("aceptarReserva-active")
            })
        
        botonCompletarReg.addEventListener("click", () => {
                    
                    
                modalAceptarReserva.classList.toggle("aceptarReserva-active") 
             
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Reservaciones Confirmadas con Éxito',
                    html: '¡Maravilloso! Tu reservación ha sido confirmada. <br><br> Enviaremos la información a tu correo electrónico, junto con el voucher de pago <br><br><br><strong>¡Gracias por tu Preferencia</strong>' ,
                    showConfirmButton: false,
                    timer: 3500
                  })
            })
        
        botonConfirmarRes.addEventListener("click" , () => {  
           
                      
            if (reservasAcumuladas.length === 0) {

                contenedorModal.classList.toggle('modal-active')     
                Swal.fire({
                        icon: 'error',
                        title: 'Ay no! Ocurrió un Error...',
                        text: 'No has agregado ninguna actividad. Por ello no es posible confirmar tus reservaciones.',       
                })

            } else {
            
                contenedorModal.classList.toggle('modal-active')                
                modalAceptarReserva.classList.toggle("aceptarReserva-active")                            
                     
                // modalInputDatos.addEventListener("click", (event) => {
                //     event.stopPropagation()
                // })  
              
                
            }
        
        })
                 

       
