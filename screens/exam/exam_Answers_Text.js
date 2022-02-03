function addTextAnswer(id) {
    let answerHTML = document.getElementById('template_answer_text').innerHTML;
    answerHTML = answerHTML.replaceAll('%id%', id).trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);

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
            ]
        }
    });
    quill.on('text-change', function (delta, oldContents, source) {
        //TODO
    });
}
