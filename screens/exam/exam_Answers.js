if (typeof AnswersCache === 'undefined'){
    var AnswersCache;
}
AnswersCache = {};

function clearAnswers() {
    document.getElementById('answers').innerHTML = '';
}

//{import exam/exam_Answers_Text.js}
//{import exam/exam_Answers_Cloze.js}
//{import exam/exam_Answers_MultipleChoice.js}
//{import exam/exam_Answers_FileUpload.js}
//{import exam/exam_Answers_AudioRecording.js}

addTextAnswer(0);

addClozeAnswer(1);

addMultipleChoiceAnswer(2);
addMultipleChoiceAnswerOption(2, 'Elias');
addMultipleChoiceAnswerOption(2, 'Max');
addMultipleChoiceAnswerOption(2, 'Mario');
addMultipleChoiceAnswerOption(2, 'Luigi');

addAudioRecordingAnswer(3);

addFileUploadAnswer(4);
