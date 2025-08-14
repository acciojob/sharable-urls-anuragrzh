// your code here
 const form = document.getElementById('infoForm');
    const urlDisplay = document.getElementById('url');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission

      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;

      const baseUrl = "https://localhost:8080/";
      const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

      urlDisplay.textContent = baseUrl + queryString;
    });
