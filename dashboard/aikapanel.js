const timeInput = document.getElementById('time');

function sendTime () {
	const time = timeInput.value;
	nodecg.sendMessage('showTime', time);
}
