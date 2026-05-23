import '../../css/loader.css';

const loaderEl = document.getElementById('loader');
let activeRequests = 0;

export function showLoader() {
  activeRequests += 1;
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  activeRequests -= 1;
  if (activeRequests <= 0) {
    activeRequests = 0;
    loaderEl.classList.add('hidden');
  }
}
