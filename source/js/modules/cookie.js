export const cookie = () => {
    const cookieElement = document.querySelector('[data-cookie-element]')
    if (cookieElement) {
        const cookie = localStorage.getItem('cookie')
    
        if (cookie === 'accepted') {
            cookieElement.remove()
            return
        }

        cookieElement.classList.add('active')
    
        const cookieAcceptButton = cookieElement.querySelector('[data-cookie-accept]')
        cookieAcceptButton.addEventListener('click', () => {
            localStorage.setItem('cookie', 'accepted')
            cookieElement.remove()
        })
    

    }
}

