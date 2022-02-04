function addFileUploadAnswer(id) {
    let answerHTML = document.getElementById('template_answer_fileUpload').innerHTML;
    answerHTML = answerHTML
        .replaceAll('%id%', id)
        .replaceAll('%multiple%', 'multiple')
        .replaceAll('%placeholder%', 'Upload one or more files')
        .trim();
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('answers').appendChild(answerTemplate.content.firstChild);
}

function saveFileUploadAnswer(id) {

}
