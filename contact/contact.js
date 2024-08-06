document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario
  
      const formData = new FormData(form);
      
      try {
        const response = await fetch('send_email.php', {
          method: 'POST',
          body: formData
        });
  
        const result = await response.text();
  
        if (response.ok) {
          responseMessage.innerHTML = `<p>${result}</p>`;
        } else {
          responseMessage.innerHTML = `<p>Hubo un error: ${result}</p>`;
        }
      } catch (error) {
        responseMessage.innerHTML = `<p>Error de red: ${error.message}</p>`;
      }
    });
  });
  