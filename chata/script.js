document.getElementById('message1').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Você é a melhor coisa que aconteceu na minha vida!';
    document.getElementById('defaultGif').classList.add('hidden');
    document.getElementById('gif1').classList.remove('hidden');
    document.getElementById('gif2').classList.add('hidden');
    document.getElementById('gif3').classList.add('hidden');
});

document.getElementById('message2').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Cada momento com você é especial!';
    document.getElementById('defaultGif').classList.add('hidden');
    document.getElementById('gif1').classList.add('hidden');
    document.getElementById('gif2').classList.remove('hidden');
    document.getElementById('gif3').classList.add('hidden');
});

document.getElementById('message3').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Seu sorriso ilumina o meu dia!';
    document.getElementById('defaultGif').classList.add('hidden');
    document.getElementById('gif1').classList.add('hidden');
    document.getElementById('gif2').classList.add('hidden');
    document.getElementById('gif3').classList.remove('hidden');
});
