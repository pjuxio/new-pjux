document.addEventListener('DOMContentLoaded', () => {
    // Handle language selection
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('data-lang');
  
        // Send the selected language to the server
        fetch('/set-language', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ language: selectedLang })
        })
          .then(response => {
            if (response.ok) {
              // Reload the page to apply the new language
              window.location.reload();
            } else {
              console.error('Failed to set language');
            }
          })
          .catch(error => console.error('Error:', error));
      });
    });
  });