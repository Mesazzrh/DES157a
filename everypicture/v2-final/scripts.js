(function(){
    'use strict';
    console.log('reading js');

    const galleryItems = document.querySelectorAll('.gallery-item');
        
    for (let i = 0; i < galleryItems.length; i++) {
        const item = galleryItems[i];
        const overlay = item.querySelector('.info-overlay');
        const modalId = 'modal-' + (i + 1);
        const modal = document.querySelector(`#${modalId}`);

        overlay.addEventListener('click', function() {
            modal.className = modal.className + ' fade-in';
        });
        
        // close the modal by clicking the close button
        const closeButton = modal.querySelector('.close-modal');
        closeButton.addEventListener('click', function() {
            modal.className = modal.className.replace(' fade-in', '');
        });

        // close the modal by click anywhere outside of the modal
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.className = modal.className.replace(' fade-in', '');
            }
        });
    }

    // close the modal by pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modalOpened = document.querySelector('.modal.fade-in');
            if (modalOpened) {
                modalOpened.className = modalOpened.className.replace(' fade-in', '');
            }
        }
    });
    
})();

