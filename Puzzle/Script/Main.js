window.onload = main

function main() {
    canvas = document.querySelector('#Screen')
    context = canvas.getContext('2d')
    window.addEventListener('mouseup', mouseUp, false)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    console.log(targetRect)
    let x = (event.clientX - canvas.offsetLeft) / targetRect.width * 1280
    let y = (event.clientY - canvas.offsetTop) / targetRect.height * 720
    alert(`${x}, ${y}`)
}
