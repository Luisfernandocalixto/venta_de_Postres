let numeroEntrada = document.getElementById('numeroEntrada');
let numeroEntrada2 = document.getElementById('numeroEntradaPastel');
let numeroEntrada3 = document.getElementById('numeroEntradaBizcocho');
let mensajeCupcake = document.getElementById('mensajeCupcake');
let mensajePastel = document.getElementById('mensajePastel');
let mensajeBizcocho = document.getElementById('mensajeBizcocho');

let mensajeConsulta = document.getElementById('consulta')
let mensaje = document.getElementById('mensaje')
let valores = []

let producto = false
let producto2 = false
let producto3 = false

function calcularCupcake() {
    if (producto) { return }
    let precio = 120

    let numeroIngresado = parseInt(numeroEntrada.value)
    if (numeroIngresado < 1 || isNaN(numeroIngresado)) {
        mensajeCupcake.textContent = 'Por favor, ingresa una cantidad válida'
        return
    }
    let resultado = eval(numeroIngresado * precio)
    mensajeCupcake.textContent = resultado
    producto = true
    valores.unshift(resultado)

}

function calcularPastel() {
    if (producto2) { return }
    let precio = 259
    let numeroIngresado = parseInt(numeroEntrada2.value)
    if (numeroIngresado < 1 || isNaN(numeroIngresado)) {
        mensajePastel.textContent = 'Por favor, ingresa una cantidad válida'
        return
    }
    let resultado = eval(numeroIngresado * precio)
    mensajePastel.textContent = resultado
    producto2 = true
    valores.unshift(resultado)

}
function calcularBizcocho() {
    if (producto3) { return }
    let precio = 179
    let numeroIngresado = parseInt(numeroEntrada3.value)
    if (numeroIngresado < 1 || isNaN(numeroIngresado)) {
        mensajeBizcocho.textContent = 'Por favor, ingresa un numero válido'
        return
    }
    let resultado = eval(numeroIngresado * precio)
    mensajeBizcocho.textContent = resultado
    producto3 = true
    valores.unshift(resultado)

}

function calcularTotal() {

    let sum = valores.reduce((acumulador, numeros) => {
        return acumulador + numeros
    }, 0) // <- el 0 es el valor inicial
    mensajeConsulta.textContent = '$ ' + sum
}

/* Datos de formulario */

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    // validar campo de nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    // trim para eliminar espacios al costado
    if (!entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, ingrese nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }


    // validar telefono
    let entradaTelefono = document.getElementById('telefono')
    let errorTelefono = document.getElementById('telefonoError')
    let telefonoPattern = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    let tel = '1234567890'

    if (!telefonoPattern.test(entradaTelefono.value)) {
        errorTelefono.textContent = 'Por favor, ingrese numero válido'
        errorTelefono.classList.add('error-message')

    } else {
        errorTelefono.textContent = ''
        errorTelefono.classList.remove('error-message')
    }

    // validar direccion
    let entradaDireccion = document.getElementById('direccion')
    let errorDireccion = document.getElementById('direccionError')

    if (!entradaDireccion.value.trim() === '') {
        errorDireccion.textContent = 'Por favor, ingrese dirección'
        errorDireccion.classList.add('error-message')

    } else {
        errorDireccion.textContent = ''
        errorDireccion.classList.remove('error-message')
    }

    if (!errorNombre.textContent && !errorTelefono.textContent && !errorDireccion.textContent) {

        mensaje.textContent = 'Los datos se han enviado con exito'
        document.getElementById('formulario').reset();


    }


})

