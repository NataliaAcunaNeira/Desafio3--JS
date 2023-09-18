// Ejercicio 3.1
let primero = document.querySelector('#div1')
let segundo = document.querySelector('#div2')
let tercero = document.querySelector('#div3')
let cuarto = document.querySelector('#div4')

function cambiarColor(divs, color) {
    divs.style.backgroundColor = color
}

function tamano(elementoHtml, alto = '200px', ancho = '200px') {
    elementoHtml.style.height = alto
    elementoHtml.style.width = ancho
}

//div1
tamano(primero)
cambiarColor(primero, 'blue')

//div2
tamano(segundo)
cambiarColor(segundo, 'red')

//div3
tamano(tercero)
cambiarColor(tercero, 'green')

//div4
tamano(cuarto)
cambiarColor(cuarto, 'yellow')

// Ejercicio 3.2

primero.addEventListener('click', () => {
    cambiarColor(primero, 'black')
})

segundo.addEventListener('click', () => {
    cambiarColor(segundo, 'black')
})

tercero.addEventListener('click', () => {
    cambiarColor(tercero, 'black')
})

cuarto.addEventListener('click', () => {
    cambiarColor(cuarto, 'black')
})

