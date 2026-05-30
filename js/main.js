// ===== ROMANTIC WEBSITE - MAIN JAVASCRIPT =====

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
  const container = document.querySelector('.hearts-container');
  if (!container) return;

  const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 15 + 's';
    heart.style.animationDuration = (10 + Math.random() * 10) + 's';
    heart.style.fontSize = (15 + Math.random() * 20) + 'px';
    container.appendChild(heart);
  }
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggle.textContent = '☰';
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}

// ===== COUNTDOWN TIMER =====
function initCountdown(targetDate) {
  const countdownContainer = document.querySelector('.countdown-container');
  if (!countdownContainer) return;

  function updateCountdown() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const distance = target - now;

    if (distance < 0) {
      countdownContainer.innerHTML = '<div class="countdown-item"><span class="number">🎉</span><span class="label">The Day is Here!</span></div>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const items = countdownContainer.querySelectorAll('.countdown-item');
    if (items.length >= 4) {
      items[0].querySelector('.number').textContent = String(days).padStart(2, '0');
      items[1].querySelector('.number').textContent = String(hours).padStart(2, '0');
      items[2].querySelector('.number').textContent = String(minutes).padStart(2, '0');
      items[3].querySelector('.number').textContent = String(seconds).padStart(2, '0');
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
  const playBtn = document.querySelector('.player-btn.play');
  if (!playBtn) return;

  let isPlaying = false;
  const albumArt = document.querySelector('.album-art');

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? '⏸' : '▶';

    if (albumArt) {
      albumArt.style.animationPlayState = isPlaying ? 'running' : 'paused';
    }
  });

  // Pause animation initially
  if (albumArt) {
    albumArt.style.animationPlayState = 'paused';
  }
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
  const element = document.querySelector('.typing-effect');
  if (!element) return;

  const text = element.getAttribute('data-text') || element.textContent;
  element.textContent = '';
  element.classList.add('typing-effect');

  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  setTimeout(type, 500);
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}

// ===== SPARKLE EFFECT ON CLICK =====
function initSparkles() {
  document.addEventListener('click', (e) => {
    createSparkle(e.clientX, e.clientY);
  });
}

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 2000);
}

// ===== ACTIVE NAV LINK =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ===== LOVE CALCULATOR (Fun Feature) =====
function initLoveCalculator() {
  const calculator = document.querySelector('.love-calculator');
  if (!calculator) return;

  const calculateBtn = calculator.querySelector('.calculate-btn');
  const result = calculator.querySelector('.love-result');

  calculateBtn.addEventListener('click', () => {
    const name1 = calculator.querySelector('.name1').value.trim();
    const name2 = calculator.querySelector('.name2').value.trim();

    if (!name1 || !name2) {
      result.textContent = 'Please enter both names 💕';
      return;
    }

    // Fun calculation based on names
    let score = 0;
    const combined = (name1 + name2).toLowerCase();
    for (let char of combined) {
      score += char.charCodeAt(0);
    }
    score = (score % 40) + 60; // Score between 60-100

    result.innerHTML = `<span style="font-size: 3rem; color: var(--primary-dark);">${score}%</span><br>Love Match! 💖`;
  });
}

// ===== DATE DISPLAY =====
function updateDateDisplay() {
  const dateElement = document.querySelector('.date-display');
  if (!dateElement) return;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = new Date().toLocaleDateString('en-US', options);
}

// ===== DAYS TOGETHER COUNTER =====
function initDaysTogether(startDate) {
  const element = document.querySelector('.days-together');
  if (!element) return;

  function update() {
    const start = new Date(startDate).getTime();
    const now = new Date().getTime();
    const days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    element.textContent = days;
  }

  update();
  setInterval(update, 60000); // Update every minute
}

// ===== GALLERY LIGHTBOX =====
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;

      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-overlay">
          <img src="${img.src}" alt="${img.alt}">
          <button class="lightbox-close">✕</button>
        </div>
      `;

      lightbox.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
      `;

      lightbox.querySelector('.lightbox-overlay').style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
      `;

      lightbox.querySelector('img').style.cssText = `
        max-width: 100%;
        max-height: 90vh;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      `;

      lightbox.querySelector('.lightbox-close').style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
      `;

      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
          lightbox.remove();
          document.body.style.overflow = '';
        }
      });
    });
  });
}

// ===== QUOTE ROTATOR =====
function initQuoteRotator(quotes) {
  const container = document.querySelector('.quote-rotator');
  if (!container || !quotes.length) return;

  let currentIndex = 0;

  function showQuote() {
    const quote = quotes[currentIndex];
    container.innerHTML = `
      <div class="quote-card fade-in visible">
        <div class="quote-mark">"</div>
        <blockquote>${quote.text}</blockquote>
        <div class="quote-author">— ${quote.author}</div>
      </div>
    `;

    currentIndex = (currentIndex + 1) % quotes.length;
  }

  showQuote();
  setInterval(showQuote, 8000);
}

// ===== CONFETTI EFFECT =====
function createConfetti() {
  const colors = ['#ff6b9d', '#ff8a80', '#ffd700', '#ff69b4', '#ffa07a'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      z-index: 9999;
      animation: confetti-fall ${2 + Math.random() * 3}s linear forwards;
    `;

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Add confetti animation to styles
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(confettiStyle);

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
  initParallax();
  initSparkles();
  initActiveNav();
  updateDateDisplay();
  initGalleryLightbox();

  // Initialize page-specific features
  initMusicPlayer();
  initTypingEffect();
  initLoveCalculator();

  // Add confetti on special button clicks
  document.querySelectorAll('.confetti-trigger').forEach(btn => {
    btn.addEventListener('click', createConfetti);
  });
});

// Export functions for use in individual pages
window.RomanticSite = {
  initCountdown,
  initDaysTogether,
  initQuoteRotator,
  createConfetti
};
