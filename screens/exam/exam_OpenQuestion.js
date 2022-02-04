function openQuestion(id) {
    saveSolution();

    clearAttachments();
    clearAnswers();

    currentQuestion = id;
    let question = examJson[id];

    if (id == 1)
        document.getElementById('question_prev').classList.add('disabled');
    else
        document.getElementById('question_prev').classList.remove('disabled');

    if (id == Object.keys(examJson).length) {
        document.getElementById('question_next').style.display = 'none';
        document.getElementById('question_submit').style.removeProperty('display');
    }else{
        document.getElementById('question_next').style.removeProperty('display');
        document.getElementById('question_submit').style.display = 'none';
    }

    document.getElementById('question_title').innerText = question.title;
    quillInstances.question.setContents(new Delta(question.content));

    for (let attachment of Object.keys(question.attachments)){
        addAttachment(attachment);
    }

    for (let answer of Object.keys(question.answer_types)){
        addAnswer(answer);
    }
}

function saveSolution() {
    if (!solution.hasOwnProperty(currentQuestion)){
        solution[currentQuestion] = {};
    }

    for (let answer of Object.keys(examJson[id].answer_types)){
        saveAnswer(answer);
    }
}
