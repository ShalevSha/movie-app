function showKey(e){
    const eKey = document.querySelector('div:nth-of-type(1) h2')
    const eKeyCode = document.querySelector('div:nth-of-type(2) h2')
    const eCode = document.querySelector('div:nth-of-type(3) h2')
    const boxContainer = document.querySelector('.box-container')
    const h1 = document.querySelector('h1')
    if (h1){

        h1.remove()
    }
    boxContainer.style.display = 'flex'

    // while (e.key && e.keyCode && e.code) {
    //     eKey.textContent = e.key
    //     eKeyCode.textContent = e.keyCode
    //     eCode.textContent = e.code
    //     break
    // }
    if (e.key && e.keyCode && e.code) {
        eKey.textContent = e.key == ' ' ? 'Space' : e.key
        eKeyCode.textContent = e.keyCode
        eCode.textContent = e.code
        // alert(' לחצת על ' + e.key)
    }
}
document.body.addEventListener('keypress', showKey)