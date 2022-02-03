function addAudioRecordingAnswer(id) {
    let answerHTML = document.getElementById('template_answer_audioRecording').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);
}
