document.addEventListener('DOMContentLoaded', function() {
    // This ensures that the code runs after the DOM is fully loaded
    loadJson();
    function loadJson() {
        fetch('c.json')
            .then(response => response.json())
            .then(data => displayJson(data))
            .catch(error => console.error('Error loading JSON:', error));
    }

    function displayJson(jsonData) {
        const jsonContentDiv = document.getElementById('jsonContent');
        jsonContentDiv.innerHTML = JSON.stringify(jsonData, null, 2);
    }
});
