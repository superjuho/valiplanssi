const timeSlot = document.getElementById('time');

nodecg.listenFor('showTime', (time) => {
	timeSlot.innerHTML = time;
});
