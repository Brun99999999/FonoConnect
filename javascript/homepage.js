// ... (código do FullCalendar) ...

// Dados das consultas (simulados)
const consultas = [
    {
        titulo: "Consulta com Dr. João",
        data: "2024-05-28",
        hora: "10:00",
        detalhes: "Terapia sonora",
        link: "consulta-detalhes.html"
    },
    {
        titulo: "Consulta com Dra. Maria",
        data: "2024-05-30",
        hora: "14:00",
        detalhes: "Adaptação de próteses auditivas",
        link: "consulta-detalhes.html" 
    },
    {
        titulo: "Consulta com Dr. Pedro",
        data: "2024-05-20",
        hora: "16:00",
        detalhes: "Avaliação auditiva",
        link: "consulta-detalhes.html" 
    }
];

const hoje = new Date();
const dataHoje = hoje.toISOString().split('T')[0]; // Obtém a data de hoje no formato yyyy-mm-dd

const consultasHoje = consultas.filter(consulta => consulta.data === dataHoje);
const proximasConsultas = consultas.filter(consulta => consulta.data > dataHoje);

const consultasContainerHoje = document.querySelector('.consultas-container:first-of-type .consultas');
const consultasContainerProximas = document.querySelector('.consultas-container:last-of-type .consultas');

function criarCardConsulta(consulta) {
    const card = document.createElement('div');
    card.classList.add('consulta-card');
    
    const detalhes = document.createElement('h3');
    detalhes.textContent = consulta.detalhes;
    card.appendChild(detalhes);

    const titulo = document.createElement('p');
    titulo.textContent = consulta.titulo;
    card.appendChild(titulo);

    const dataHora = document.createElement('p');
    dataHora.textContent = `Horário agendado: ${consulta.hora}`;
    card.appendChild(dataHora);

    if (consulta.data === dataHoje) {
        const btn = document.createElement('button');
        btn.textContent = "Acessar consulta";
        btn.classList.add('btn');
        card.appendChild(btn);
    }

    return card;
}

consultasHoje.forEach(consulta => {
    consultasContainerHoje.appendChild(criarCardConsulta(consulta));
});

proximasConsultas.forEach(consulta => {
    consultasContainerProximas.appendChild(criarCardConsulta(consulta));
});