$(document).ready(function () {

  const $body = $('body');
  const $bgToggle = $('#theme-toggle'); // se reutiliza el mismo botón ya existente

  function randomBackgroundColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 40 + Math.floor(Math.random() * 30); // 40% - 70%
    const lightness = 8 + Math.floor(Math.random() * 15);   // 8% - 23% (oscuro)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  if ($bgToggle.length) {
    $bgToggle
      .text('🎨')
      .attr('aria-label', 'Change background color');

    $bgToggle.on('click', function () {
      $body.css('background-color', randomBackgroundColor());
    });
  }

  /* ============================================================
     2) IMAGE GALLERY — modal popup (index.html)
     Al hacer click en una imagen de .gallery-item, se agranda
     dentro de #image-modal.
     ============================================================ */
  const $modal = $('#image-modal');
  const $modalImg = $modal.find('img');

  $('.gallery-item img').on('click', function () {
    const src = $(this).attr('src');
    const alt = $(this).attr('alt');
    $modalImg.attr('src', src).attr('alt', alt);
    $modal.addClass('is-open').attr('aria-hidden', 'false');
  });

  function closeModal() {
    $modal.removeClass('is-open').attr('aria-hidden', 'true');
    $modalImg.attr('src', '');
  }

  // Cerrar con la "X"
  $('.modal-close').on('click', closeModal);

  // Cerrar haciendo click fuera de la imagen (en el fondo oscuro)
  $modal.on('click', function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // Cerrar con la tecla Escape
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $modal.hasClass('is-open')) {
      closeModal();
    }
  });

  /* ============================================================
     3) FORM VALIDATION — contact.html
     Valida nombre, email y mensaje antes de "enviar". Si todo es
     válido, muestra el alert pedido por el enunciado y limpia
     el formulario. Si algo falla, muestra el error puntual bajo
     cada campo sin usar alert (mejor experiencia de usuario).
     ============================================================ */
  const $contactForm = $('#contact-form');

  if ($contactForm.length) {
    $contactForm.on('submit', function (e) {
      e.preventDefault();

      // Limpiar estado de error anterior
      $contactForm.find('.error-message').text('');
      $contactForm.find('.invalid').removeClass('invalid');

      let isValid = true;

      const $name = $('#name');
      const $email = $('#email');
      const $message = $('#message');
      const $semester = $('#semester');

      const name = $name.val().trim();
      const email = $email.val().trim();
      const message = $message.val().trim();
      const semester = Number($semester.val()); // FIX: era number(...) (minúscula) y rompía el submit

      // Nombre: obligatorio, mínimo 2 caracteres
      if (name.length < 2) {
        showFieldError($name, 'Please enter your full name.');
        isValid = false;
      }

      // Email: formato básico válido
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFieldError($email, 'Please enter a valid email address.');
        isValid = false;
      }

      // Semester: obligatorio, entre 1 y 12
      if (isNaN(semester) || semester < 1 || semester > 12) {
        showFieldError($semester, 'Please enter a valid semester between 1 and 12.');
        isValid = false;
      }

      // Mensaje: obligatorio, mínimo 10 caracteres
      if (message.length < 10) {
        showFieldError($message, 'Your message should be at least 10 characters long.');
        isValid = false;
      }

      if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
      }
    });
  }

  function showFieldError($field, message) {
    $field.addClass('invalid');
    $field.closest('div').find('.error-message').text(message);
  }

});
