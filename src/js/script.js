const burgerBtn = document.querySelector('.burger-btn')
const barOne = document.querySelector('.one')
const barTwo = document.querySelector('.two')
const barThree = document.querySelector('.three')
const navMobile = document.querySelector('.nav-mobile')
const nav = document.querySelector('.nav-mobile')
const navBtns = document.querySelectorAll('.nav-link')
const yearP = document.querySelector('.year')
const burgerBox = document.querySelector('.burger-box')
const email = document.querySelector('#email')
const nameInput = document.querySelector('#name')

const errorEmail = document.querySelector('.error-email')
const errorName = document.querySelector('.error-name')
const submitBtn = document.querySelector('.contact__submit')
const submitted = document.querySelector('.submit__p')

const burgerBtnAnimation = () => {
	if (barOne.classList.contains('one-first-anim')) {
		barOne.classList.remove('one-first-anim'),
			barTwo.classList.remove('two-first-anim'),
			barThree.classList.remove('three-first-anim'),
			barOne.classList.add('one-second-anim'),
			barTwo.classList.add('two-second-anim'),
			barThree.classList.add('three-second-anim')
	} else {
		barOne.classList.remove('one-second-anim'),
			barTwo.classList.remove('two-second-anim'),
			barThree.classList.remove('three-second-anim'),
			barOne.classList.add('one-first-anim'),
			barTwo.classList.add('two-first-anim'),
			barThree.classList.add('three-first-anim')
	}
}
const handleNav = () => {
	nav.classList.toggle('handleNav')
}
const handleYear = () => {
	const e = new Date().getFullYear()
	yearP.textContent = e
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(email.value)) {
		errorEmail.style.visibility = 'hidden'
	} else {
		errorEmail.style.visibility = 'visible'
	}
}

const checkName = name => {
	const re = /[^a-zA-Z]/

	if (re.test(name.value)) {
		errorName.style.visibility = 'visible'
	} else {
		errorName.style.visibility = 'hidden'
	}
}

document.addEventListener('DOMContentLoaded', handleYear)

burgerBtn.addEventListener('click', () => {
	burgerBtnAnimation()
	handleNav()
})

navBtns.forEach(el => {
	el.addEventListener('click', () => {
		burgerBtnAnimation()
		handleNav()
		setTimeout(1000)
	})
})

submitBtn.addEventListener('click', e => {
	e.preventDefault()

	checkMail(email)
	checkName(nameInput)

	if (errorName.style.visibility === 'hidden' && errorEmail.style.visibility === 'hidden') {
		submitted.style.visibility = 'visible'
	}

	nameInput.value = ''
	email.value = ''
})

const home = document.querySelector('.header')
const aboutUs = document.querySelector('#about-us')
const offers = document.querySelector('#offers')

const homeNav = document.querySelector('.home-nav')
const aboutUsNav = document.querySelector('.about-us-nav')
const offersNav = document.querySelector('.offers-nav')

const homeHeight = home.clientHeight
const aboutUsHeight = aboutUs.clientHeight
const offersHeight = offers.clientHeight


