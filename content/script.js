// console.log('Hi');

function Waiter() {
	const app = document.querySelector('#app');
	console.log(app.querySelector('.game iframe'));
	const gameFrame = app.querySelector('.game iframe');
	if (gameFrame) {
		let innerDoc = gameFrame.contentDocument || gameFrame.contentWindow.postMessage('сообщение', gameFrame.getAttribute('src'));
		console.log(innerDoc);
		//clearInterval(interval);
	}
	else{
		console.log('Бля');
	}
}

const interval = setInterval(Waiter, 500);
