// your code here
 const form = document.getElementById('infoForm');
    const urlDisplay = document.getElementById('url');
const baseURL = "https://localhost:8080/";

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission
// console.log("form event")
		const params = [];

      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;

		if(name) params.push[`name=${encodedURIComponent(name)}`];
		if(year) params.push[`year=${encodedURIComponent(year)}`];

      urlDisplay.textContent = params.length ? `${baseUrl}?${params.join("&")}` : baseUrl;
    });
