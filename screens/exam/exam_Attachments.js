function clearAttachments() {
    document.getElementById('question_attachments').innerHTML = '';
}

function addAttachment(id) {
    let answerHTML = document.getElementById('template_question_attachment').innerHTML;
    answerHTML = answerHTML
        .replaceAll('%id%', id).trim()
        .replaceAll('%type%', 'insert_drive_file')
        .replaceAll('%name%', 'document.pdf');
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('question_attachments').appendChild(answerTemplate.content.firstChild);
}

function previewAttachment(id) {

}

function downloadAttachment(id, event) {

}


addAttachment(4);
addAttachment(5);
