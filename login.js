document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação simples (deve ser feita no servidor para mais segurança)
    if (username === 'Lyt28383' && password === '05052005') {
        window.location.href = 'Index.html'; // Redireciona para a página principal
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
});
