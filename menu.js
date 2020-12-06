(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-menu]'),
        closeModalBtn: document.querySelector('[data-modal-close-menu]'),
        modal: document.querySelector('[data-modal-menu]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();