if (typeof AttachmentsMap === 'undefined'){
    var AttachmentsMap;
}
AttachmentsMap = [
    {
        typeImage: 'image'
    }, {
        typeImage: 'movie'
    }, {
        typeImage: 'headphones'
    }, {
        typeImage: 'insert_drive_file'
    }
];


function clearAttachments() {
    document.getElementById('question_attachments').innerHTML = '';
}

function addAttachment(id) {
    let attachmentJson = examJson[currentQuestion].attachments[id];
    let answerHTML = document.getElementById('template_question_attachment').innerHTML;
    answerHTML = answerHTML
        .replaceAll('%id%', id).trim()
        .replaceAll('%type%', AttachmentsMap[attachmentJson.type].typeImage)
        .replaceAll('%name%', attachmentJson.name);
    let answerTemplate = document.createElement('template');
    answerTemplate.innerHTML = answerHTML;
    document.getElementById('question_attachments').appendChild(answerTemplate.content.firstChild);
}

function previewAttachment(id) {
    //TODO
}

function downloadAttachment(id, event) {
    //TODO
}
