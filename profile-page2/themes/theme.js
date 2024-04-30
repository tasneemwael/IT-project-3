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

document.addEventListener("DOMContentLoaded", function() {
    console.log ("localStorage")
    // Retrieve data from local storage
    var fullName = localStorage.getItem("fullName");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var address = localStorage.getItem("address");

    // Display the retrieved data
    document.getElementById("fullName").value = fullName;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    document.getElementById("address").value = address;
});
