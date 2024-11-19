// у кнокпи открывающей модалку значение дата атрибута data-modal-button 
// и у модалки значение дата-атрибута data-modal должно совпадать
// например у кнокпи data-modal-button="modal-feedback" и у модалки data-modal="modal-feedback"
// пример работы модалки есть в файли sitemap.html

export const modals = () => {
	const body = document.querySelector('body')
	const modalButtons = document.querySelectorAll('[data-modal-button]')
	const modals = Array.from(document.querySelectorAll('[data-modal]'))
	const scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px'

	const restoreScroll = () => {
		body.style.overflow = null
		body.style['padding-right'] = null
	}

	if (modalButtons[0] && modals[0]) {
		const initModal = (openModalbutton) => {
			const modalName = openModalbutton.getAttribute('data-modal-button')
			const modal = modals.find((modal) => modal.getAttribute('data-modal') === modalName)

			const openModal = (modalWindow) => {
				body.style.overflow = 'hidden'
				body.style['padding-right'] = scrollbarWidth
				modalWindow.classList.add('active')
			}
			openModal(modal)
		}

		modalButtons.forEach(button => {
			button.addEventListener('click', () => {
				initModal(button)
			})
		})

		const handleCloseButtonClick = (evt) => {
			const closeButton = evt.target.closest('[data-close-modal]')
			if (closeButton) {
				const modal = closeButton.closest('[data-modal]')
				modal.classList.remove('active')
				restoreScroll()
			}
		}

		const handleEscPress = (evt) => {
			if (evt.key === 'Escape') {
				document.querySelector('.modal.active').classList.remove('active')
				restoreScroll()
			}
		}

		const handleOverlayClick = (evt) => {
			if (evt.target.classList.contains('modal')) {
				document.querySelector('.modal.active').classList.remove('active')
				restoreScroll()
			}
		}

		window.addEventListener('click', handleCloseButtonClick)
		window.addEventListener('keydown', handleEscPress)
		window.addEventListener('click', handleOverlayClick)
	}
}
