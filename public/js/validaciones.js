function validateForm() {
    const career = document.getElementById('career').value;
    const name = document.getElementById('name').value;
    const dni = document.getElementById('dni').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
  
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';
  
    // Validaciones básicas
    if (!career || !name || !dni || !dob || !email || !password || !terms) {
      errorMessage.innerHTML = 'Todos los campos son obligatorios.';
      return;
    }
  
    // Puedes agregar más validaciones según tus requisitos
  
    // Si todas las validaciones pasan, puedes enviar el formulario o realizar otras acciones
    alert('Inicio de sesión exitoso!');
  }