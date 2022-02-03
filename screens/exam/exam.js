//{import ../resources/QuillJs/script.js}

domLoadListenerAdd(() => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    sidenav = instances[0];
});

function setDomCredentials() {
    //TODO
}
setDomCredentials();


function initQuestionQuill() {
    let quill = new Quill('#quill_question', {
        placeholder: 'Question text',
        readOnly: true
    });
    quill.setText('Solve the following exercises:\n\n1 + 1 =\n2 • 4 =');
}
initQuestionQuill();

//{import exam/exam_Attachments.js}
//{import exam/exam_Answers.js}
