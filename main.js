const liList = document.querySelectorAll('li')
const input = document.querySelector('.search')

const searchFun = e => {
	const drink = e.target.value.toLowerCase()

	liList.forEach(elem => {
		if (elem.textContent.toLowerCase().indexOf(drink) !== -1) {
			elem.style.display = 'block'
		} else {
			elem.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', searchFun)
