let obj = document.querySelector('.object')
let shift = 20
window.addEventListener('load', () => {
    obj.style.position = 'absolute'
    obj.style.left = 0
    obj.style.top = 0
})
window.addEventListener('keyup', (z) => {
    switch (z.key) {
        case 'Arrowleft':
            obj.style.left = parseInt(obj.style.left) - shift + 'px'
            break
        case 'ArrowRight':
            obj.style.left = parseInt(obj.style.left) + shift + 'px'
            break
        case 'ArrowUp':
            obj.style.top = parseInt(obj.style.top) - shift + 'px'
            break
        case 'ArrowDown':
            obj.style.top = parseInt(obj.style.top) + shift + 'px'
            break
    }
})
