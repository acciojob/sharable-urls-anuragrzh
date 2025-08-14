// your code here
 const form = document.getElementById('infoForm');
    const urlDisplay = document.getElementById('url');
const baseURL = "https://localhost:8080/";

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission

		const params = [];

      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;

		if(name) params.push(`name=${encodeURIComponent(name)}`);
		if(year) params.push(`year=${encodeURIComponent(year)}`);

      urlDisplay.textContent = params.length ? `${baseURL}?${params.join("&")}` : baseURL;
    });

// const h3Element = document.getElementById("url");
// h3Element.textContent = urlDisplay;
