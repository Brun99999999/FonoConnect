// Botão "Agendar Consulta"
const botaoAgendar = document.getElementById('agendar-consulta');

botaoAgendar.addEventListener('click', () => {
    // Redireciona para a página de agendamento
    window.location.href = 'agendamento.html';
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o calendário FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Consulta com Dr. João', start: '2024-05-10' },
            { title: 'Consulta com Dra. Maria', start: '2024-05-16' }
        ] // Substitua com seus eventos reais
    });
    calendar.render();

    // Adicionar eventos para os links do menu
    var linksMenu = document.querySelectorAll('.sidebar ul li a');
    linksMenu.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Implemente a lógica para filtrar as consultas no calendário
            // Ex: Filtrar por especialidade, data, etc.
            console.log('Link clicado:', link.id);
        });
    });
});