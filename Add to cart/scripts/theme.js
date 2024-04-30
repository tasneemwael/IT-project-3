


        function decrementQuantity(button) {
            var input = button.nextElementSibling;
            var value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
            updateTotal();
        }

        function incrementQuantity(button) {
            var input = button.previousElementSibling;
            var value = parseInt(input.value);
            input.value = value + 1;
            updateTotal();
        }

        function removeProduct(button) {
            var product = button.parentElement.parentElement;
            product.remove();
            updateTotal();
        }

        function updateTotal() {
            var products = document.querySelectorAll('.product');
            var total = 0;
            products.forEach(function(product) {
                var price = parseFloat(product.querySelector('.product-info p').textContent.replace('$', '').replace(',', ''));
                var quantity = parseInt(product.querySelector('.quantity input').value);
                total += price * quantity;
            });
            document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);
        }

        function checkout() {
            alert('Redirecting to checkout page...');
          
        }
