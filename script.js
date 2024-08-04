const container = document.querySelector('.container')
let screen = document.querySelector('.screen')
const input = document.querySelector('#input');
input.value = 16
inputValue = input.value

const button = document.querySelector('#change');
const clearbtn = document.querySelector('clearbtn')

const color_picker = document.querySelector('#color_picker')
let pickedcolour = color_picker.value


input.addEventListener('input', () => {
    inputValue = input.value


    // // HANDLE MIN AND MAX LIMIT
    // if (inputValue < input.min) {
    //     inputValue = 1
    //     input.value = 1
    // }

    // if (inputValue > input.max) {
    //     inputValue = 100
    //     input.value = 100
    // }

    screen.remove()
    screen = document.createElement('div')
    screen.classList.add('screen')
    container.appendChild(screen)
    draw()

})


color_picker.addEventListener('input', () => {
    pickedcolour = color_picker.value
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
            col.appendChild(square)
        }

    }

}

draw()