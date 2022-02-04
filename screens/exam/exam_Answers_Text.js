function addTextAnswer(id) {
    let answerHTML = document.getElementById('template_answer_text').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);

    //Source: https://stackoverflow.com/questions/53878615/how-can-i-add-a-character-counter-to-my-quill-project
    //    ->  https://codepen.io/anon/pen/vPRoor
    class Counter {
        constructor(quill, options) {
            this.quill = quill;
            this.options = options;
            this.container = document.querySelector(options.container);
            if (options.limit > -1) {
                quill.on('text-change', this.update.bind(this));
            }
            this.update();  // Account for initial contents
        }
        calculate() {
            let text = this.quill.getText();
            if (this.options.unit === 'word') {
                text = text.trim();
                // Splitting empty text returns a non-empty array
                return text.length > 0 ? text.split(/\s+/).length : 0;
            } else {
                return text.length;
            }
        }
        update() {
            var length = this.calculate();
            this.container.innerText = 'Words: ' + length + ' / ' + this.options.limit;
            if (length > this.options.limit){
                this.container.classList.remove('black-text');
                this.container.classList.add('red-text');
            }else{
                this.container.classList.add('black-text');
                this.container.classList.remove('red-text');
            }
        }
    }

    Quill.register('modules/counter', Counter);

    let quill = new Quill('#answer_' + id + '_quill', {
        theme: 'snow',
        placeholder: 'Type your answer here...',
        modules: {
            toolbar: [
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline', 'strike'],
                [
                    { 'color': [] },
                    { 'background': [] }
                ],
                ['link', 'blockquote', 'code-block'],
                [
                    { 'list': 'ordered' },
                    { 'list': 'bullet' }
                ],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                [{ 'align': [] }],
                ['clean']
            ],
            counter: {
                container: '#answer_' + id + '_wordlimit',
                unit: 'word',
                limit: examJson[currentQuestion].answer_types[id].content.wordlimit
            }
        }
    });

    if (examJson[currentQuestion].answer_types[id].content.wordlimit == -1){
        document.getElementById('answer_' + id + '_wordlimit').style.display = 'none';
    }
}
