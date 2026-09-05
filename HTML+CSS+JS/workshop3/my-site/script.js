/* ============================================================
   SCRIPT.JS — Workshop 3 (Web Applications)
   Lógica jQuery para interactividad del sitio.

   Se enlaza (linked), igual que los CSS, DESPUÉS de jQuery, en
   TODAS las páginas (index.html y pages/*.html), porque el
   theme toggle debe funcionar en todo el sitio:
     <script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
     <script src="script.js"></script>          (index.html)
     <script src="../script.js"></script>       (pages/*.html)

   Cada bloque se activa solo si encuentra sus elementos en el DOM,
   así este mismo archivo puede convivir en distintas páginas sin
   que unas rompan a otras.
   ============================================================ */

$(document).ready(function () {

  /* ============================================================
     1) THEME TOGGLE — botón flotante fijo (todas las páginas)
     Cambia entre modo oscuro (por defecto) y modo claro agregando
     la clase "light-mode" a <body> (los estilos viven en base.css
     como variables CSS, así que un solo cambio de clase reajusta
     TODO el sitio: header/nav, footer, cards, formulario, etc.).

     Se guarda la preferencia en localStorage para que se mantenga
     al navegar entre las distintas páginas del sitio.
     ============================================================ */
  const THEME_KEY = 'site-theme';
  const $body = $('body');
  const $themeToggle = $('#theme-toggle');

  function applyTheme(theme) {
    if (theme === 'light') {
      $body.addClass('light-mode');
      $themeToggle.text('☀️').attr('aria-label', 'Switch to dark mode');
    } else {
      $body.removeClass('light-mode');
      $themeToggle.text('🌙').attr('aria-label', 'Switch to light mode');
    }
  }

  if ($themeToggle.length) {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(savedTheme);

    $themeToggle.on('click', function () {
      const nextTheme = $body.hasClass('light-mode') ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
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
      const semester = number($semester.val());

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
