<script>
  
    document.getElementById('checkout-form').addEventListener('submit', function(event) {
      event.prev0entDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const cardNumber = document.getElementById('card-number').value;


      document.getElementById('checkout-form').style.display = 'none';
      document.getElementById('order-confirmation').style.display = 'block';
    });
  </script>
