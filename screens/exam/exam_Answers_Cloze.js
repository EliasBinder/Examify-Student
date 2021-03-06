function addClozeAnswer(id) {
    let answerHTML = document.getElementById('template_answer_cloze').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);

    var Embed = Quill.import('blots/embed');
    class QuillInput extends Embed {
        static create(value) {
            let node = super.create();
            // give it some margin
            node.type = 'text';
            node.id = value;
            node.style.display = 'inline-block';
            node.style.height = 'auto';
            node.style.width = '120px';
            node.style.fontFamily = 'Helvetica, Arial, sans-serif';
            node.style.textAlign = 'center';
            node.style.fontSize = 'inherit';
            node.setAttribute('clozeQuill_input', id);
            return node;
        }
    }
    QuillInput.blotName = 'input'; //now you can use .ql-input classname in your toolbar
    QuillInput.tagName = 'INPUT';

    Quill.register({
        'formats/input': QuillInput
    });

    let quill = new Quill('#answer_' + id + '_quill', {
        readOnly: true,
        placeholder: 'Cloze'
    });
    quill.setContents(new Delta(examJson[currentQuestion].answer_types[id].content.pattern));
    if (!quillInstances.hasOwnProperty(currentQuestion))
        quillInstances[currentQuestion] = {};
    if (!quillInstances[currentQuestion.hasOwnProperty(id)])
        quillInstances[currentQuestion][id] = {};
    quillInstances[currentQuestion][id].cloze = quill;
}

function saveClozeAnswer(id) {
    let filled = {};
    let counter = 1;
    for (let input of document.querySelectorAll('[clozeQuill_input = "' + id + '"]')){
        filled[counter] = input.value;
        counter ++;
    }
    solution[currentQuestion].content = filled;
}
