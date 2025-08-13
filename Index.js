document.getElementById('questionnaire').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let results = "Respostas do questionário:\n\n";

    for (let [key, value] of formData.entries()) {
        results += `${key}: ${value}\n`;
    }

    alert(results);
});
