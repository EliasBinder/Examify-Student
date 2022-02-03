function addMultipleChoiceAnswer(id) {
    let answerHTML = document.getElementById('template_answer_multipleChoice').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);
}

function addMultipleChoiceAnswerOption(id, text) {
    let optionHTML = document.getElementById('template_answer_multipleChoice_option').innerHTML;
    optionHTML = optionHTML
        .replaceAll('%id%', id)
        .replaceAll('%optionText%', text)
        .trim();
    let optionTemplate = document.createElement('template');
    optionTemplate.innerHTML = optionHTML;
    document.getElementById('answer_' + id + '_container').appendChild(optionTemplate.content.firstChild);
}
