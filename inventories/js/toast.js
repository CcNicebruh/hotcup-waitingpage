function showToast(message, type) {
    const toastContainer = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `animate__animated animate__fadeIn ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white font-semibold px-4 py-2 rounded-md shadow-md mb-2`;
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('animate__fadeIn');
      toast.classList.add('animate__fadeOut');
      setTimeout(() => {
        toast.remove();
      }, 1000);
    }, 3000); // Show for 3 seconds
}