function addMultipleChoiceAnswer(id) {
    let answerHTML = document.getElementById('template_answer_multipleChoice').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);

    for (let option of examJson[currentQuestion].answer_types[id].content.options){
        addMultipleChoiceAnswerOption(id, option);
    }
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

function saveMultipleChoiceAnswer(id) {
    let selected = {};
    let counter = 1;
    for (let input of document.querySelectorAll('[ref = answer_"' + id + '"_option]')){
        selected[counter] = input.checked;
        counter ++;
    }
    solution[currentQuestion].content = selected;
}
