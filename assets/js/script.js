const API_KEY = "0GL_9vSK3OTlSEQgvBF5e90Qbus";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e){
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok){
        displayStatus(data);
    }
    else {
        throw new Error(data.error);
    }
}


function displayStatus(data){
    modalTitle = document.getElementById("resultsModalTitle")
    modalTitle.innerHTML = "API Key Status"

    modalContent = document.getElementById("results-content")
    modalContent.innerHTML = `<p>Your key is valid untill <br> ${data.expiry}</p>`
    resultsModal.show()
}