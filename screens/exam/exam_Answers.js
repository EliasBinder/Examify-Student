if (typeof AnswersCache === 'undefined'){
    var AnswersCache;
}
AnswersCache = {};

function clearAnswers() {
    document.getElementById('answers').innerHTML = '';
    mediaRecorder = {};
}

//{import exam/exam_Answers_Text.js}
//{import exam/exam_Answers_Cloze.js}
//{import exam/exam_Answers_MultipleChoice.js}
//{import exam/exam_Answers_FileUpload.js}
//{import exam/exam_Answers_AudioRecording.js}

function addAnswer(id) {
    let answer = examJson[currentQuestion].answer_types[id];
    if (answer.type == 0)
        addTextAnswer(id);
    else if (answer.type == 1)
        addClozeAnswer(id);
    else if (answer.type == 2)
        addMultipleChoiceAnswer(id);
    else if (answer.type == 3)
        addAudioRecordingAnswer(id);
    else if (answer.type == 4)
        addFileUploadAnswer(id);
}

function saveAnswer(id) {
    let answer = examJson[currentQuestion].answer_types[id];
    if (answer.type == 0)
        saveTextAnswer(id);
    else if (answer.type == 1)
        saveClozeAnswer(id);
    else if (answer.type == 2)
        saveMultipleChoiceAnswer(id);
    else if (answer.type == 3)
        saveAudioRecordingAnswer(id);
    else if (answer.type == 4)
        saveFileUploadAnswer(id);
}
