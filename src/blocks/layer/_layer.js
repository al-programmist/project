const xRontationCenter = (x) => {
	return x - window.innerWidth / 2;
}

const yRontationCenter = (y) => {
	return y - window.innerHeight / 2;
}

document.addEventListener('mousemove', event => {
	const sensivityX = -0.009;
	const sensivityY = -0.002;
	Object.assign(document.documentElement, {
		style: `--move-x: ${yRontationCenter(event.clientY) * sensivityX}deg; --move-y: ${xRontationCenter(event.clientX) * sensivityY}deg`
	})
});


