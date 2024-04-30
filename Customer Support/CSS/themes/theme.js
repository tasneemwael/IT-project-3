function changeTheme() {
    const themeSelect = document.getElementById('themeSelect');
    const themeStyleSheet = document.getElementById('themeStylesheet');
    const theme1 = document.querySelector('.default');
    const theme2 = document.querySelector('.theme2');

    function toggleElements(theme) {
        if (theme === 'default') {
            theme1.style.display = 'block';
            theme2.style.display = 'none';
        } else {
            theme1.style.display = 'none';
            theme2.style.display = 'block';
        }
    }

    themeSelect.addEventListener('change', function () {
        themeStyleSheet.setAttribute('href', 'CSS/themes/' + themeSelect.value + '.css');
        toggleElements(themeSelect.value);
        localStorage.setItem('theme', themeSelect.value);
    });

    const currentTheme = localStorage.getItem('theme') || 'default';
    themeSelect.value = currentTheme;
    toggleElements(currentTheme);
}
changeTheme();
