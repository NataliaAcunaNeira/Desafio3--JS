// Ejercicio 3.3

function cambiarColor(nuevo, color) {
    nuevo.style.backgroundColor = color
}
let cambiar = (letra) => {
    let nuevo = document.querySelector('#key')
    if (letra === 'a') {
        cambiarColor(nuevo, 'pink')
    }
    if (letra === 's') {
        cambiarColor(nuevo, 'orange')
    }
    if (letra === 'd') {
        cambiarColor(nuevo, 'aquamarine')
    }
}

document.addEventListener('keydown', function (event) {
    cambiar(event.key)
})

//Ejercicio 3.4

function cambiarColor(nuevo, color) {
    nuevo.style.backgroundColor = color
}

let cambiar2 = (letra) => {
    let nuevo = document.querySelector('#key')
    if (letra === 'q') {
        cambiarColor(nuevo, 'purple')
    }
    if (letra === 'w') {
        cambiarColor(nuevo, 'grey')
    }
    if (letra === 'e') {
        cambiarColor(nuevo, 'brown')
    }
}

document.addEventListener('keydown', function (event) {
    cambiar2(event.key)
})



