function initTable() {
    document.getElementById('title').innerText = holdingDetails.title;
    document.getElementById('table_pr').innerText = credentials.ref;
    document.getElementById('table_lecturer').innerText = holdingDetails.lecturer;
    document.getElementById('table_name').innerText = holdingDetails.name;
    document.getElementById('table_id').innerText = holdingDetails.id;
    document.getElementById('table_start').innerText = new Date(holdingDetails.start).toLocaleTimeString();
    holdingDetails.duration = holdingDetails.end - holdingDetails.start;
    let durationHours = Math.floor((holdingDetails.duration / (1000 * 60 * 60)) % 24);
    let durationMins = Math.floor((holdingDetails.duration / (1000 * 60)) % 60);
    document.getElementById('table_duration').innerText = durationHours + ' hours ' + durationMins + ' minutes';
    let timer = window.setInterval(function () {
        let diff = holdingDetails.start - new Date().getTime();
        if (diff > 0){
            document.getElementById('table_timer_container').style.removeProperty('display');
            let countdownHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            let countdownMins = Math.floor((diff / (1000 * 60)) % 60);
            let countdownSecs = Math.floor((diff / 1000) % 60);
            document.getElementById('table_timer').innerText = 'Exam starts in ' + countdownHours + ':' + countdownMins + ':' + countdownSecs;
        }else{
            clearInterval(timer);
            document.getElementById('btn_start').classList.remove('disabled');
            document.getElementById('table_timer_container').style.display = 'none';
        }
    }, 1000);
}
initTable();
