// Mostrar o login-box quando o botão for clicado
document.querySelector('.login a[data-target]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('data-target')).style.display = 'block';
  });
  
  // Ocultar o login-box quando o usuário clicar fora dele
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.login-box') && event.target!== document.querySelector('.login a[data-target]')) {
      document.querySelector('.login-box').style.display = 'none';
    }
  });