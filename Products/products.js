
document.querySelectorAll('.photo-container').forEach(container => {
  container.style.display = 'none';
});
document.querySelector('.photo-container.protein').style.display = 'block';

document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('click', () => {
    const selectedCategory = category.getAttribute('data-category');


    document.querySelectorAll('.photo-container').forEach(container => {
      container.style.display = 'none';
    });


    document.querySelector(`.photo-container.${selectedCategory}`).style.display = 'block';
  });
});






























document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('themeSelect');
    const theme = document.getElementById('theme');

    // Check if theme preference is set in local storage
    const selectedTheme = localStorage.getItem('selectedTheme') || 'default';

    // Set the initial state of the theme selector based on the stored preference
    themeSelect.value = selectedTheme;

    // Load appropriate CSS based on the initial theme preference
    loadTheme(selectedTheme);

    // Listen for changes in the theme selector and update local storage and CSS accordingly
    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;
        localStorage.setItem('selectedTheme', selectedTheme);
        loadTheme(selectedTheme);
    });

    // Function to load appropriate CSS based on the selected theme
    function loadTheme(selectedTheme) {
        if (selectedTheme === 'theme2') {
            theme.setAttribute('href', 'Products_Style_dark/products.css');
        } else {
            theme.setAttribute('href', 'Products_Style_light/products.css');
        }
    }
});
