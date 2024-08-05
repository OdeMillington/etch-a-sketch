const container = document.querySelector('.container')
let screen = document.querySelector('.screen')
const input = document.querySelector('#input');
input.value = 16
inputValue = input.value

const button = document.querySelector('#change');
const clearbtn = document.querySelector('clearbtn')

const body = document.body
body.style.cursor = 'crosshair'

const color_picker = document.querySelector('#color_picker')
let pickedcolour = color_picker.value

const eraserText = document.querySelector('#eraserText')

input.addEventListener('input', () => {
    inputValue = input.value

    screen.remove()
    screen = document.createElement('div')
    screen.classList.add('screen')
    container.appendChild(screen)
    draw()

})


color_picker.addEventListener('input', () => {
    pickedcolour = color_picker.value
})

body.addEventListener('keydown', (e) => {

    if (e.code == 'ControlLeft') {

        if (pickedcolour == color_picker.value) {
            body.setAttribute("style", "cursor: url('./Images/eraser-solid.svg'), auto")
            eraserText.textContent = 'PRESS CTRL KEY TO ENABLE ERASER | ENABLED'
        }
    
        if (pickedcolour != color_picker.value) {
            body.style.cursor = 'crosshair'
            eraserText.textContent = 'PRESS CTRL KEY TO ENABLE ERASER | DISABLED'
        }
    
        if (pickedcolour == 'white') {
            pickedcolour = color_picker.value
        } else {
        pickedcolour = 'white' 
        }    

    }


})



function draw() {

    for (let i = 0; i < inputValue; i++) {

        const col = document.createElement('div');
        col.classList.add('col')

        screen.appendChild(col)

        for (let y = 0; y < inputValue; y++) {
            const square = document.createElement('div')

            boxSize = 640 / inputValue

            square.setAttribute('style', 'width:' + boxSize + "px" + ';height:' + boxSize + "px")
            square.classList.add('square')
            square.addEventListener('mouseover', function (e) { e.target.style.backgroundColor = pickedcolour })

           square.addEventListener('keypress', () => {alert('yo')})
            col.appendChild(square)
        }

    }

}

draw()