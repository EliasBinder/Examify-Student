domLoadListenerAdd(() => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    sidenav = instances[0];
});

function nav_openGitHub(){
    window.intercom.receive('openlink', (json) => {});
    window.intercom.send('openlink', {
        'url': 'https://github.com/EliasBinder/Examify-Teacher'
    });
}

function setProfileInfo() {
    document.getElementById('navigation_name').innerText = credentials['firstname'] + ' ' + credentials['lastname'];
    document.getElementById('navigation_email').innerText = credentials['email'];
    if (credentials['profileImg'] !== 'none')
        document.getElementById('navigation_profileImg').src = credentials['profileImg'];
}
setProfileInfo();
