// Initialize Lucide Icons on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Hero Consultation Video Controls
function toggleHeroVideoSound() {
  const video = document.getElementById('heroConsultVideo');
  const soundIcon = document.getElementById('soundIcon');
  if (!video) return;

  video.muted = !video.muted;
  if (soundIcon) {
    soundIcon.setAttribute('data-lucide', video.muted ? 'volume-x' : 'volume-2');
    if (window.lucide) window.lucide.createIcons();
  }
}

function toggleHeroVideoPlay() {
  const video = document.getElementById('heroConsultVideo');
  const playPauseIcon = document.getElementById('playPauseIcon');
  if (!video) return;

  if (video.paused) {
    video.play();
    if (playPauseIcon) {
      playPauseIcon.setAttribute('data-lucide', 'pause');
      if (window.lucide) window.lucide.createIcons();
    }
  } else {
    video.pause();
    if (playPauseIcon) {
      playPauseIcon.setAttribute('data-lucide', 'play');
      if (window.lucide) window.lucide.createIcons();
    }
  }
}

// FAQ Accordion Toggle
function toggleFaq(element) {
  const item = element.parentElement;
  const isOpen = item.classList.contains('active');
  
  // Close all other FAQ items
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  
  // Toggle clicked item
  if (!isOpen) {
    item.classList.add('active');
  }
}

// Modal Handlers
function openBookingModal(source = '') {
  const modal = document.getElementById('bookingModal');
  const select = document.getElementById('modalServiceSelect');
  const sourceInput = document.getElementById('selectedServiceSource');
  
  if (source && sourceInput) {
    sourceInput.value = source;
  }
  
  if (source && select) {
    if (source.includes('Career')) {
      select.value = 'Career & Job Timing';
    } else if (source.includes('Marriage')) {
      select.value = 'Marriage Compatibility';
    } else if (source.includes('Business')) {
      select.value = 'Business Astrology';
    } else if (source.includes('Wealth') || source.includes('Finance')) {
      select.value = 'Wealth & Finance Astrology';
    } else if (source.includes('Vastu')) {
      select.value = 'Astro-Vastu Consultation';
    } else if (source.includes('Kundli')) {
      select.value = 'Complete Kundli Analysis';
    } else if (source.includes('Health')) {
      select.value = 'Health Astrology';
    }
  }
  
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

function closeModalOnBackdrop(e) {
  if (e.target.id === 'bookingModal') {
    closeBookingModal();
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
  }
});

// Lead Form Submissions
function handleFormSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your consultation request has been submitted. Our team will contact you shortly via WhatsApp/Phone to finalize your slot with Hanish Bagga.');
  e.target.reset();
}

function handleModalSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your consultation request has been registered. Our appointment desk will reach out within 2 hours to confirm your session.');
  closeBookingModal();
  e.target.reset();
}

// Mobile Navigation Toggle
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  if (!drawer || !toggleBtn) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileNav();
  } else {
    drawer.classList.add('open');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (toggleBtn) {
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
  // Restore scrolling only if modal is not open
  const modal = document.getElementById('bookingModal');
  if (!modal || !modal.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

// Close drawer on resize to larger screen
window.addEventListener('resize', () => {
  if (window.innerWidth > 968) {
    closeMobileNav();
  }
});

// Update key listener to close mobile menu as well
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
    closeMobileNav();
  }
});
