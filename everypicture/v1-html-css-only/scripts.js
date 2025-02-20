const galleryItems = document.querySelectorAll('.gallery-item');
        
    galleryItems.forEach((item, index) => {
        const overlay = item.querySelector('.info-overlay');
        const modalId = `modal-${index + 1}`;
        const modal = document.getElementById(modalId);

        overlay.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.style.display = 'block';
        });
        
        const closeButton = modal.querySelector('.close-modal');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });