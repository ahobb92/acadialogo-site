$(document).ready(function(){
    $('#toggleInfo').click(function(){
      $('#extraInfo').slideToggle();
    });
  });
  
  // Contact form validation
$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
  
      let isValid = true;
  
      $(this).find('input, textarea').each(function () {
        if (!this.checkValidity()) {
          $(this).addClass('is-invalid');
          isValid = false;
        } else {
          $(this).removeClass('is-invalid');
        }
      });
  
      if (isValid) {
        alert('Thank you! Your message has been sent.');
        this.reset();
      }
    });
  });
  
