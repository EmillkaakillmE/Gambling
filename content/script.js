// console.log('Hi');

function Waiter() {
	// const app = document.querySelector('#app');
	const app = $('#app');
	if (app.length) {
		// console.log(app);
		app.on('click', function () {
			console.log(this.querySelector('.payouts-block'));
		});
		clearInterval(interval);
	}
	else{
		console.log('Бля');
	}
}

const interval = setInterval(Waiter, 11000);
