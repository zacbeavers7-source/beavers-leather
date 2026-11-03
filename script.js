document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
  const form = document.querySelector('.quote-form');
  const file = document.getElementById('reference-photo');
  const error = document.getElementById('photo-error');
  if (!form || !file || !error) return;
  const validate = () => {
    const selected = file.files && file.files[0];
    let message = '';
    if (selected && selected.size > 5 * 1024 * 1024) message = 'Please choose a photo smaller than 5 MB.';
    if (selected && !['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(selected.type)) message = 'Please choose a JPG, PNG, WebP, or GIF image.';
    error.textContent = message;
    error.hidden = !message;
    file.setCustomValidity(message);
    return !message;
  };
  file.addEventListener('change', validate);
  form.addEventListener('submit', event => {
    if (!validate()) { event.preventDefault(); file.reportValidity(); }
  });
});