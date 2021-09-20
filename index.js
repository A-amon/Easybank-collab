let fb = document.getElementById("fb");
fb.addEventListener("mouseover", () => {
  fb.src = "assets/icons/icon-facebook-green.svg";
});
fb.addEventListener("mouseout", () => {
  fb.src = "assets/icons/icon-facebook.svg";
});

let yt = document.getElementById("yt");
yt.addEventListener("mouseover", () => {
  yt.src = "assets/icons/icon-youtube-green.svg";
});
yt.addEventListener("mouseout", () => {
  yt.src = "assets/icons/icon-youtube.svg";
});

let tw = document.getElementById("tw");
tw.addEventListener("mouseover", () => {
  tw.src = "assets/icons/icon-twitter-green.svg";
});
tw.addEventListener("mouseout", () => {
  tw.src = "assets/icons/icon-twitter.svg";
});

let pt = document.getElementById("pt");
pt.addEventListener("mouseover", () => {
  pt.src = "assets/icons/icon-pinterest-green.svg";
});
pt.addEventListener("mouseout", () => {
  pt.src = "assets/icons/icon-pinterest.svg";
});

let ig = document.getElementById("ig");
ig.addEventListener("mouseover", () => {
  ig.src = "assets/icons/icon-instagram-green.svg";
});
ig.addEventListener("mouseout", () => {
  ig.src = "assets/icons/icon-instagram.svg";
});
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
