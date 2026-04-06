$(document).ready(function () {

  /* 1. VISITOR GREETING */
  const stored = sessionStorage.getItem('visitorName');
  if (stored) {
    $('#visitor-greeting').text('👋 Welcome back, ' + stored + '!');
  } else {
    setTimeout(function () {
      const name = prompt("Hey there! What's your name?");
      if (name && name.trim()) {
        const n = name.trim();
        sessionStorage.setItem('visitorName', n);
        $('#visitor-greeting').text('👋 Nice to meet you, ' + n + '!');
      }
    }, 700);
  }

  /* 2. DARK MODE TOGGLE */
  $('#dark-toggle').on('click', function () {
    $('body').toggleClass('dark');
    const isDark = $('body').hasClass('dark');
    $(this).text(isDark ? '☀️' : '🌙');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark') {
    $('body').addClass('dark');
    $('#dark-toggle').text('☀️');
  }

  /* 3. ANIMATED SKILL BARS */
  let barsAnimated = false;
  function tryAnimateBars() {
    if (barsAnimated) return;
    const skillsTop = $('#skills').offset().top;
    if ($(window).scrollTop() + $(window).height() > skillsTop + 40) {
      $('.s-bar:visible').each(function () {
        $(this).css('width', $(this).data('width') + '%');
      });
      barsAnimated = true;
    }
  }
  $(window).on('scroll', tryAnimateBars);
  setTimeout(tryAnimateBars, 500);

  /* 4. SHOW / HIDE EXTRA SKILLS */
  let expanded = false;
  $('#skills-toggle-btn').on('click', function () {
    expanded = !expanded;
    if (expanded) {
      $('.extra-skill').show();
      $(this).text('View Less ↑');
      setTimeout(function () {
        $('.extra-skill .s-bar').each(function () {
          $(this).css('width', $(this).data('width') + '%');
        });
      }, 40);
    } else {
      $('.extra-skill').hide();
      $(this).text('View More ↓');
    }
  });

  /* 5. CONTACT FORM VALIDATION */
  $('#send-btn').on('click', function () {
    $('input, textarea').removeClass('error');
    $('.f-err').hide();
    $('#form-feedback').hide().removeClass('success error');

    let valid = true;
    const name  = $('#f-name').val().trim();
    const email = $('#f-email').val().trim();
    const msg   = $('#f-msg').val().trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name)                          { $('#f-name').addClass('error');  $('#err-name').show();  valid = false; }
    if (!email || !emailRx.test(email)) { $('#f-email').addClass('error'); $('#err-email').show(); valid = false; }
    if (!msg)                           { $('#f-msg').addClass('error');   $('#err-msg').show();   valid = false; }

    if (valid) {
      $('#form-feedback').addClass('success').text("✅ Message sent! I'll get back to you soon.").show();
      $('#f-name, #f-email, #f-msg').val('');
    } else {
      $('#form-feedback').addClass('error').text('⚠ Please fix the errors above.').show();
    }
  });

  /* 6. HIRE ME PANEL */
  $('#hire-open-btn').on('click', function () {
    $('#hire-overlay').addClass('open');
  });
  $('#hire-close, #hire-overlay').on('click', function (e) {
    if (e.target === this) $('#hire-overlay').removeClass('open');
  });
  $('#hire-to-form').on('click', function () {
    $('#hire-overlay').removeClass('open');
  });

  /* 7. FADE-IN SECTIONS */
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) $(e.target).addClass('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-block').forEach(function (el) { obs.observe(el); });

  /* 8. DYNAMIC FOOTER YEAR */
  const yr = new Date().getFullYear();
  $('#footer-text').html('© ' + yr + ' Denver P. Amba · Built with HTML, CSS, JavaScript &amp; jQuery');

  /* 9. APPEND AVAILABILITY TAG */
  const tag = document.createElement('span');
  tag.textContent = '● Available for Opportunities';
  tag.style.cssText = 'display:inline-block;margin-top:1.1rem;font-size:0.73rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#2e7d32;background:#e8f5e9;border-radius:20px;padding:0.22rem 0.75rem;';
  document.querySelector('.about-text').after(tag);

});
