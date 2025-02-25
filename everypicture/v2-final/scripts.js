(function(){
    'use strict';
    console.log('reading js');

    const galleryItems = document.querySelectorAll('.gallery-item');
        
    galleryItems.forEach((item, index) => {
        const overlay = item.querySelector('.info-overlay');
        const modalId = `modal-${index + 1}`;
        const modal = document.getElementById(modalId);

        overlay.addEventListener('click', (e) => {
            modal.classList.add('fade-in');
        });
        
        // close the modal by clicking the close button
        const closeButton = modal.querySelector('.close-modal');
        closeButton.addEventListener('click', () => {
            modal.classList.remove('fade-in');
        });

        // close the modal by click anywhere outside of the modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('fade-in');
            }
        });

        
    });

    // close the modal by pressing ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modalOpened = document.querySelector('.modal.fade-in');
            if (modalOpened) {
                modalOpened.classList.remove('fade-in');
            }
        }
    });
    
})();

