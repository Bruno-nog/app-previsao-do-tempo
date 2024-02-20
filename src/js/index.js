const chaveDaApi = 'cb74a96070564932a53121436241502'
const botaoDeBusca = document.querySelector('.btn-busca')

botaoDeBusca.addEventListener('click', async () => {
    const city = document.getElementById('input-busca').value;
    
    if(!city) return;
    
    const dados = await buscarDadosDaCidade(city);

    if(dados) preencherDadosNaTela(dados, city);
})

async function buscarDadosDaCidade(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${city}&aqi=no&lang=pt`;

    const response = await fetch(apiUrl);

    if (dados.error) {
        alert('Cidade não encontrada. Por favor, verifique o nome e tente novamente.');
    } else {
        preencherDadosNaTela(dados, city);
    }

    const dados = response.json()

    return dados;
}

function preencherDadosNaTela(dados, city) {
    const temperature = dados.current.temp_c
    const condition = dados.current.condition.text
    const umidade = dados.current.humidity
    const velocidadeDoVento = dados.current.wind_kph
    const iconeCondicao = dados.current.condition.icon

    document.getElementById('city').textContent = city;
    document.getElementById('temperature').textContent = `${temperature}°C `;
    document.getElementById('condition').textContent = condition;
    document.getElementById('umidade').textContent = `${umidade}%`;
    document.getElementById('velocidade-do-vento').textContent = `${velocidadeDoVento}km/h`;
    document.getElementById('icone-condicao').setAttribute('src', iconeCondicao);
}

