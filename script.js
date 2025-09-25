document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 100);

  const shareIcons = document.querySelectorAll('.share-icon');
  shareIcons.forEach(icon => {
    icon.addEventListener('click', async (event) => {
      event.preventDefault();
      const title = icon.dataset.title;
      const url = icon.dataset.url;
      const text = icon.dataset.text;

      if (navigator.share) {
        try {
          await navigator.share({ title, url, text });
          console.log('Link shared successfully!');
        } catch (error) {
          console.error('Error sharing link:', error);
        }
      } else {
        alert(`Sharing for "${title}" is not supported on this browser. You can copy the link instead: ${url}`);
      }
    });
  });

  // --- Page Flip Logic ---
  const flipBtn = document.getElementById('flip-btn');
  const flipContainer = document.getElementById('flip-container');

  flipBtn.addEventListener('click', () => {
    flipContainer.classList.toggle('flipped');
  });
});