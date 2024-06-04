// script.js
document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            title: 'Evento 1',
            date: '2024-06-15',
            time: '10:00 AM',
            location: 'Lugar del Evento 1',
            image: 'https://via.placeholder.com/300',
            link: 'https://tu-enlace1.com'
        },
        {
            title: 'Evento 2',
            date: '2024-06-20',
            time: '2:00 PM',
            location: 'Lugar del Evento 2',
            image: 'https://via.placeholder.com/300',
            link: 'https://tu-enlace2.com'
        }
        // Agrega más eventos según sea necesario
    ];

    const calendar = document.getElementById('calendar');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');

    let currentDate = new Date();

    function renderCalendar(date) {
        calendar.innerHTML = '';
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        currentMonthElement.textContent = date.toLocaleDateString('default', { month: 'long', year: 'numeric' });

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= lastDateOfMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            const dayHeader = document.createElement('div');
            dayHeader.classList.add('day-header');
            dayHeader.textContent = day;
            dayElement.appendChild(dayHeader);

            const eventDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            events.filter(event => event.date === eventDate).forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.innerHTML = `
                    <img src="${event.image}" alt="Imagen del Evento">
                    <h4>${event.title}</h4>
                    <p>Hora: ${event.time}</p>
                    <p>Ubicación: ${event.location}</p>
                    <a href="${event.link}" target="_blank">Más información</a>
                `;
                dayElement.appendChild(eventElement);
            });

            calendar.appendChild(dayElement);
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
