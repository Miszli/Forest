
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
const contentInput = document.querySelector('#content')
const errorEmail = document.querySelector('.error-email')
const errorName = document.querySelector('.error-name')
const errorContent = document.querySelector('.error-content')
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
	const re = /[0-9,@,#,$,%,^,&,*,!,()]/

	if (re.test(name.value) || name.value === '') {
		errorName.style.visibility = 'visible'
	} else {
		errorName.style.visibility = 'hidden'
	}
}

const checkContent = content => {
	if (content.value !== '') {
		errorContent.style.visibility = 'hidden'
	} else {
		errorContent.style.visibility = 'visible'
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

if (document.body.classList.contains('contact-body')) {
	submitBtn.addEventListener('click', e => {
		checkMail(email)
		checkName(nameInput)
		checkContent(contentInput)

		if (
			errorName.style.visibility === 'hidden' &&
			errorEmail.style.visibility === 'hidden' &&
			errorContent.style.visibility === 'hidden'
		) {
			submitted.style.visibility = 'visible'
			email.value = ''
			nameInput.value = ''
			contentInput.value = ''
		}
	})
}

const menuItems = document.querySelectorAll('.nav__option')
const header = document.querySelector('.header')
const aboutUs = document.querySelector('.about-us')
const offers = document.querySelector('.offers')
const scrollSpySections = [header, aboutUs, offers]

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight-1) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active'))
				activeSection.classList.add('active')
			}
		})
	}
}

window.addEventListener('scroll', handleScrollSpy)
