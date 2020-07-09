import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	// Promise
	console.log('client-side app has started');
});