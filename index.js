document.querySelector('.telegram-container')
    .addEventListener('click', function(e) {
        e.preventDefault();
        let block = document.querySelector('.telegram-visiting');
        if (block.style.display == 'flex') {
            block.style.display = 'none';
        } else {
            block.style.display = 'flex';
        } 
    })