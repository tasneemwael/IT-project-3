function themeChange() {
    const themeButton = document.getElementById('themeSelect');
    const themeStyleSheet = document.getElementById('themeStylesheet');
    const currentTheme = localStorage.getItem('theme') || 'default';
    function changeTheme(theme) {
        themeStyleSheet.setAttribute('href', 'themes/' + theme + '.css'); 
    }
    themeButton.addEventListener('change', function () {
        changeTheme(themeButton.value);
        localStorage.setItem('theme', themeSelect.value);

    });
    themeSelect.value = currentTheme;
    changeTheme(currentTheme);
}
themeChange();
