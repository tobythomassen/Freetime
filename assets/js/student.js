var Freetime = {
    cd: document.cookie,
    dark: false
}
window.onload = function() {
    Freetime.dark = localStorage.dark;
    document.getElementById('switch-2').checked = Freetime.dark;
    if (Freetime.dark) {
        $('#switch-2').addClass("is-checked");
    }
}

Freetime.settingsDialog = document.querySelector('.settings-dialog');
Freetime.joinClassDialog = document.querySelector('.join-class-dialog');
Freetime.settingsButton = document.querySelector('.settings');
Freetime.joinClassButton = document.querySelector('.join-class');

if (!Freetime.settingsDialog.showModal) {
    dialogPolyfill.registerDialog(Freetime.settingsDialog);
}
Freetime.settingsButton.addEventListener('click', function () {
    document.getElementById('switch-2').checked = Freetime.dark;
    Freetime.settingsDialog.showModal();
});
Freetime.settingsDialog.querySelector('.close').addEventListener('click', function () {
    Freetime.settingsDialog.close();
});

if (!Freetime.joinClassDialog.showModal) {
    dialogPolyfill.registerDialog(Freetime.joinClassDialog);
}
Freetime.joinClassButton.addEventListener('click', function () {
    Freetime.dark = !Freetime.dark;
    localStorage.setItem("dark", Freetime.dark);
    document.getElementById('switch-2').checked = Freetime.dark;
    Freetime.joinClassDialog.showModal();
});
Freetime.joinClassDialog.querySelector('.close').addEventListener('click', function () {
    Freetime.joinClassDialog.close();
});
Freetime.joinClassDialog.querySelector('.join').addEventListener('click', function () {
    // Join Class
    Freetime.joinClassDialog.close();
});