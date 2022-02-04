//{import ../resources/QuillJs/script.js}
if (typeof Delta === 'undefined'){
    var Delta;
}
Delta = Quill.import('delta');

if (typeof examJson === 'undefined') {
    var examJson;
}
examJson = {};

if (typeof quillInstances === 'undefined') {
    var quillInstances;
}
quillInstances = {};

if (typeof currentQuestion === 'undefined'){
    var currentQuestion;
}
currentQuestion = -1;

domLoadListenerAdd(() => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    sidenav = instances[0];
});

function setDomCredentials() {
    document.getElementById('navigation_name').innerText = credentials.name;
    document.getElementById('navigation_id').innerText = credentials.id;
    document.getElementById('exam_title').innerText = holdingDetails.title;
}
setDomCredentials();


function initQuestionQuill() {
    let quill = new Quill('#quill_question', {
        placeholder: 'Question text',
        readOnly: true
    });
    quillInstances.question = quill;
}
initQuestionQuill();

//{import exam/exam_Attachments.js}
//{import exam/exam_Answers.js}


function retrieveExam() {
    apiCall('GET', null, 'holding/' + credentials.ref + '/getpackage', false, (success, data) => {
        if (success){
            examJson = data;
            loadQuestionsInNavbar()
        }else{
            M.toast({html: 'Could not download the exam!'});
        }
    });
}
retrieveExam();


function loadQuestionsInNavbar() {
    for (let i = 1; i <= Object.keys(examJson).length; i++){
        let item = document.createElement('li');
        item.innerHTML = '<a class="waves-effect" href="javascript:openQuestion(' + i + ')"><i class="material-icons">assignment</i>' + examJson[i].title + '</a>';
        document.getElementById('navbar_divider').parentNode.insertBefore(item, document.getElementById('navbar_divider'));
    }
    openQuestion(1);
}

//{import exam/exam_OpenQuestion.js}
