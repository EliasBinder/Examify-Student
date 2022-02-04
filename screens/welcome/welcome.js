sidenav = null;

function participate() {
    connection.url = 'http://' + document.getElementById('login_ip').value + '/api/';
    let participationRef = document.getElementById('login_ref').value;
    let content = {
        name: document.getElementById('login_name').value,
        id: document.getElementById('login_id').value
    };
    apiCall('POST', content, 'holding/' + participationRef + '/participate', false, (success, data) => {
        if (success){
            holdingDetails = data.details;
            credentials.id = content.id;
            credentials.name = content.name;
            credentials.ref = participationRef;
            render('waitingroom', 'main');
        }else{
            M.toast({html: 'Could not join the session! Please check your Participation Reference!'});
        }
    }, false);
}
