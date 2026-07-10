// Auth check — if not logged in, redirect to jobs.com
if (!sessionStorage.getItem('br_auth')) {
  window.location.replace('https://www.jobs.com');
}
