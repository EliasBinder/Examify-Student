if (typeof mediaRecorder === 'undefined') {
    var mediaRecorder;
}
mediaRecorder = {};

function addAudioRecordingAnswer(id) {
    let answerHTML = document.getElementById('template_answer_audioRecording').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);
    mediaRecorder[id] = {
        recorder: null,
        chunks: [],
        blob: null,
        blobURL: null,
        timer: -1,
        counter: 0
    }
}

function startAudioRecording(id) {
    //Source: https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stop
    if (mediaRecorder[id].recorder != null) {
        document.getElementById('answer_' + id + '_startRec').style.display = 'none';
        document.getElementById('answer_' + id + '_stopRec').style.removeProperty('display');
        return;
    }
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia ({
            audio: true
        }).then(function(stream) {
            mediaRecorder[id].recorder = new MediaRecorder(stream);
            mediaRecorder[id].chunks = [];
            mediaRecorder[id].recorder.ondataavailable = function (e) {
                mediaRecorder[id].chunks.push(e.data);
            };
            mediaRecorder[id].recorder.onstop = function (e){
                mediaRecorder[id].blob = new Blob(mediaRecorder[id].chunks, { 'type' : mediaRecorder[id].recorder.mimeType });
                if (mediaRecorder[id].blobURL != null){
                    window.URL.revokeObjectURL(mediaRecorder[id].blobURL);
                }
                mediaRecorder[id].blobURL = window.URL.createObjectURL(mediaRecorder[id].blob);
                document.getElementById('answer_' + id + '_audio').src = mediaRecorder[id].blobURL;
                mediaRecorder[id].recorder = null;
            };
            mediaRecorder[id].timer = window.setInterval(function () {
                mediaRecorder[id].counter ++;
            }, 1000);
            mediaRecorder[id].recorder.start();
            document.getElementById('answer_' + id + '_startRec').style.display = 'none';
            document.getElementById('answer_' + id + '_stopRec').style.removeProperty('display');
        }).catch(function(err) {
            M.toast({html: 'The following error occurred: ' + err});
        });
    } else {
        M.toast({html: 'You need a microphone to record audio!'});
    }
}

function stopAudioRecording(id) {
    if (mediaRecorder[id].recorder == null) {
        return;
    }
    document.getElementById('answer_' + id + '_startRec').style.removeProperty('display');
    document.getElementById('answer_' + id + '_stopRec').style.display = 'none';
    mediaRecorder[id].recorder.stop();
}


function playAudioRecording(id) {
    let audio = document.getElementById('answer_' + id + '_audio');
    audio.onpause = function () {
        document.getElementById('answer_' + id + '_play').innerHTML = 'play_arrow';
    };
    audio.onplay = function () {
        document.getElementById('answer_' + id + '_play').innerHTML = 'pause';
    }
    if (audio.paused && audio.src != '')
        audio.play();
    else
        audio.pause();
}

function deleteAudioRecording(id) {
    document.getElementById('answer_' + id + '_audio').pause();
    document.getElementById('answer_' + id + '_play').innerHTML = 'play_arrow';
    document.getElementById('answer_' + id + '_audio').src = '';
    if (mediaRecorder.recorder != null){
        stopAudioRecording(id)
    }
    mediaRecorder.blob = null;
    window.URL.revokeObjectURL(mediaRecorder.blobURL);
    mediaRecorder.blobURL = null;
    mediaRecorder.chunks = [];
}
