document.addEventListener("DOMContentLoaded", function () {
    // Função para obter os parâmetros de URL
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        pairs.forEach(pair => {
            const [key, value] = pair.split("=");
            params[key] = decodeURIComponent(value);
        });
        return params;
    }

    const params = getQueryParams();
    const serviceKey = params.service;

    if (serviceKey) {
        fetch('services.json')
            .then(response => response.json())
            .then(data => {
                const service = data[serviceKey];
                if (service) {
                    document.getElementById('service-title').innerText = service.title;
                    document.getElementById('service-description').innerText = service.description;
                    document.getElementById('service-image').src = service.image;
                    document.getElementById('service-contact').href = service.contact;
                } else {
                    console.error('Serviço não encontrado.');
                }
            })
            .catch(error => console.error('Erro ao carregar os dados do serviço:', error));
    } else {
        console.error('Parâmetro de serviço não especificado na URL.');
    }
});
