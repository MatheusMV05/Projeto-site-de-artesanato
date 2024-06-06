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
  const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      emailError.textContent = 'Email Invalido';
    } else {
      emailError.textContent = '';
    }
  });

  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();
    if (password.length < 8) {
      passwordError.textContent = 'A senha tem que incluir ao menos 8 caracteres';
    } else {
      passwordError.textContent = '';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      emailError.textContent = 'Email Invalido';
      return;
    }

    if (password.length < 8) {
      passwordError.textContent = 'A senha tem que incluir ao menos 8 caracteres';
      return;
    }

    // Enviar o formulário
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }