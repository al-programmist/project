/**
 * Запускает фоном дождь на выбранных слоях
 * @param selector
 */
function startRain(selector) {
	let canvas = document.getElementsByClassName(selector)[0];
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let context = canvas.getContext('2d');
	let rainArray = [];

	function randomNum(max, min) {
		return Math.floor(Math.random() * max) + min;
	}

	function RainDrops(x, y, endy, velocity, opacity) {
		this.x = x;
		this.y = y;
		this.endy = endy;
		this.velocity = velocity;
		this.opacity = opacity;

		this.draw = function() {
			context.beginPath();
			context.moveTo(this.x, this.y);
			context.lineTo(this.x, this.y - this.endy);
			context.lineWidth = 2;
			context.strokeStyle= "rgba(255, 255, 255, " + this.opacity + ")";
			context.stroke();
		}

		this.update = function() {
			let rainEnd = window.innerHeight + 100;
			if (this.y >= rainEnd) {
				this.y = this.endy - 100;
			} else {
				this.y = this.y + this.velocity;
			}
			this.draw();
		}

	}

	function setRain() {
		for (let i = 0; i < 140; i++) {
			let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
			let rainYLocation = Math.random() * -500;
			let randomRainHeight = randomNum(10, 2);
			let randomSpeed = randomNum(20, .2);
			let randomOpacity = Math.random() * .55;
			rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
		}

		return true;
	}

	function animateRain() {

		requestAnimationFrame(animateRain);
		context.clearRect(0,0, canvas.width, canvas.height);

		for (let i = 0; i < rainArray.length; i++) {
			rainArray[i].update();
		}

	}

	if (setRain()) animateRain();
}

startRain('rain');
