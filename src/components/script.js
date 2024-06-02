<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    // Perform form validation or data submission via AJAX here

    // Redirect to the homepage after form submission
    window.location.href = '/';
});
</script>