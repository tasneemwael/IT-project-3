function showCategoryPhotos(category) {
    document.querySelectorAll('.photo-container').forEach(container => {
        container.style.display = 'none';
    });

    document.querySelector(`.photo-container.${category}`).style.display = 'block';
}

function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    if (searchTerm === 'protein' || searchTerm === 'bcaa' || searchTerm === 'creatine' || searchTerm === 'vitamins') {
        showCategoryPhotos(searchTerm);
        document.getElementById("noResultsMessage").style.display = 'none';
    } else {
        document.querySelectorAll('.photo-container').forEach(container => {
            container.style.display = 'none';
        });
        document.getElementById("noResultsMessage").style.display = 'block';
    }
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    handleSearch();
});

document.querySelectorAll('.photo-container').forEach(container => {
    container.style.display = 'none';
});
document.querySelector('.photo-container.protein').style.display = 'block';













document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('themeSelect');
    const theme = document.getElementById('theme');
    const selectedTheme = localStorage.getItem('selectedTheme') || 'default';

    themeSelect.value = selectedTheme;
    loadTheme(selectedTheme);

    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;
        localStorage.setItem('selectedTheme', selectedTheme);
        loadTheme(selectedTheme);
    });

    function loadTheme(selectedTheme) {
        if (selectedTheme === 'theme2') {
            theme.setAttribute('href', 'Products_Style_dark/products.css');
        } else {
            theme.setAttribute('href', 'Products_Style_light/products.css');
        }
    }
});
