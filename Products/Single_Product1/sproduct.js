

function changeMainImage(subImage) {
    var mainImage = document.querySelector('.main-image img');
    var subImageSrc = subImage.src;

    mainImage.classList.remove('fade-in');

    setTimeout(function() {
        mainImage.src = subImageSrc;

        mainImage.classList.add('fade-in');
    }, 500);
}


document.addEventListener('DOMContentLoaded', function() {
    var reviewsBtn = document.getElementById('reviews-btn');
    var descriptionBtn = document.getElementById('description-btn');
    var additionalInfoBtn = document.getElementById('additional-info-btn');
    var descriptionContainers = document.querySelectorAll('.additional-details-container');
    var additionalInfoTable = document.getElementById('additional-info-table');

    var reviewFormContainer = document.querySelector('.review-form-container');
    reviewFormContainer.style.display = 'none';

    additionalInfoTable.style.display = 'none';

    reviewsBtn.addEventListener('click', function() {
        descriptionContainers.forEach(function(container) {
            container.style.display = 'none';
        });

        reviewFormContainer.style.display = 'block';

        additionalInfoTable.style.display = 'none';
    });

    descriptionBtn.addEventListener('click', function() {
        reviewFormContainer.style.display = 'none';

        descriptionContainers.forEach(function(container) {
            container.style.display = 'block';
        });

        additionalInfoTable.style.display = 'none';
    });

    additionalInfoBtn.addEventListener('click', function() {
        descriptionContainers.forEach(function(container) {
            container.style.display = 'none';
        });

        reviewFormContainer.style.display = 'none';

        additionalInfoTable.style.display = 'block';
    });
});






document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('review-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var rating = document.getElementById('rating').value;
    var review = document.getElementById('review').value.trim();

    if (!name || !email || !rating || !review) {
      alert('Please fill out all fields.');
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }


  });
});













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
            theme.setAttribute('href', 'sproduct_style_dark/sproduct.css');
        } else {
            theme.setAttribute('href', 'sproduct_style_light/sproduct.css');
        }
    }
});
