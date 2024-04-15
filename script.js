var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var images = document.querySelectorAll('.music img');

images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer';
    });

    image.addEventListener('click', function() {
        modalImage.src = this.src;
        modal.style.display = 'block';
        modalImage.style.width = '25%';
        modalImage.style.position = 'fixed';
        modalImage.style.top = '50%';
        modalImage.style.left = '15%';
        modalImage.style.transform = 'translateY(-50%)';

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    });
});

function closeModal() {
    modal.style.display = 'none';
    modalImage.style.cursor = 'default';
}
