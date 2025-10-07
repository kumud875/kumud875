// 2 Pahiya - minimal interactions and validation
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const form = document.getElementById('leadGenForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');
  const phone = document.getElementById('phone');

  if (phone) {
    phone.addEventListener('input', () => {
      phone.value = phone.value.replace(/[^0-9]/g, '');
    });
  }

  if (form) {
    form.addEventListener('submit', () => {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';
      }
      if (formStatus) formStatus.textContent = 'Processing your request…';
    });
  }
})();
