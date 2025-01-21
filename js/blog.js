document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input input');
    const h2Card = document.querySelectorAll('.cards h2');
    const h4Post = document.querySelectorAll('.posts .post');

    input.addEventListener('input', function () {
        const inputText = this.value.toLowerCase();

        h2Card.forEach(h2 => {
            const card = h2.closest('.card');
            if (h2.textContent.toLowerCase().includes(inputText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';

            }
        });

        h4Post.forEach(post => {
            const h4 = post.querySelector('h4');
            if (h4.textContent.toLowerCase().includes(inputText)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });
});
