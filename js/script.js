function toggleRotate(element) {
    element.classList.toggle('rotate-180');
}
function removeOrderItem(button) {
    var orderItem = button.closest('.order-item');
    var line = orderItem.nextElementSibling;
    if (orderItem) {
        orderItem.remove();
        line.remove();
    }
}
function toggleBsForm() {
    var status = document.getElementById('create-account');
    var bsForm = document.getElementById('shipping');
    bsForm.style.display = status.checked ? 'block' : 'none';
}
function increaseQuantity(button) {
    var quantityElement = button.previousElementSibling;
    var quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

function decreaseQuantity(button) {
    var quantityElement = button.nextElementSibling;
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}