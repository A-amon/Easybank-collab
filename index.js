
import { setIntersectionObserver } from './modules/intersectionObserver.js'

/**
 * Observe .why-card elements intersection
 */
const observeWhy = () => {
	const whyCards = document.querySelectorAll('.why-card')

	setIntersectionObserver(whyCards, onWhyEnter, onWhyExit)
}

/**
 * Handle .why-card is intersecting
 * @param {object} item 
 */
const onWhyEnter = (item) => {
	item.classList.add('anim')
}

/**
 * Handle .why-card is not intersecting
 * @param {object} item 
 */
const onWhyExit = (item) => {
	item.classList.remove('anim')
}

observeWhy()
