function searchProducts() {
var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
var products = document.querySelectorAll('.product');

products.forEach(function(product) {
  var productName = product.querySelector('.product-info h2').textContent.toLowerCase();
  if (productName.includes(searchTerm)) {
    product.style.display = 'block'; 
  } else {
    product.style.display = 'none'; 
  }
});
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
event.preventDefault(); 
searchProducts();
});
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
