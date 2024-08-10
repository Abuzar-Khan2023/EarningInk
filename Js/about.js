document.getElementById('learn-more-btn').addEventListener('click', function() {
    const extraInfo = document.getElementById('extra-info');
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        extraInfo.classList.add('hidden');
        this.textContent = 'Learn More';
    }
});
