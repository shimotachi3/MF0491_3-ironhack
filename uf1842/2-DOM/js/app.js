// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('message');
    const button = document.getElementById('btn-send');
    const lastMessage = document.getElementById('last-message');
    const feedback = document.querySelector('.feedback');

    feedback.style.display = 'none';

    button.addEventListener('click', function () {
        const messageText = input.value.trim();

        if (messageText === '') {
            feedback.style.display = 'block';
        } else {
            feedback.style.display = 'none';

            lastMessage.textContent = messageText;

            input.value = '';
        }
    });
});
