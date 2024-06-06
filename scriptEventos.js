// script.js
document.addEventListener('DOMContentLoaded', () => {
  const events = [
    /*EVENTOS JULIO */
      {
          title: 'Mené "La maquina persona.',
          date: '2024-07-13',
          time: '09:00 PM',
          location: 'Foro Indie Rocks',
          image: 'imagesEventos/meneEvento.png',
          link: 'https://www.passline.com/eventos/mene'
      },
      {
          title: 'YOVNGCHIMI en CDMX ',
          date: '2024-07-27',
          time: '09:00 PM',
          location: 'CARPA VELODROMO',
          image: 'imagesEventos/chimiEvento.png',
          link: 'https://yovngchimi-cdmx.boletia.com/'
      },
      {
          title: 'Gabito Ballesteros',
          date: '2024-07-27',
          time: '09:00 PM',
          location: 'Pepsi Center WTC',
          image: 'imagesEventos/gabitoEvento.png',
          link: 'https://www.ticketmaster.com.mx/gabito-ballesteros-mexico-27-07-2024/event/1400606BB3001445'
      },
      {
          title: 'León Larregui (Prismarama tour)',
          date: '2024-07-05',
          time: '09:00 PM',
          location: 'Paalacio de los Deportes',
          image: 'imagesEventos/leonEvento.png',
          link: 'https://www.ticketmaster.com.mx/len-larregui-mexico-05-07-2024/event/1400605CC2D91E80'
      },
      {
          title: 'Migrant Motel',
          date: '2024-07-04',
          time: '08:00 PM',
          location: 'Bajo Circuito',
          image: 'imagesEventos/migrantEvento.png',
          link: 'https://www.passline.com/eventos/migrant-motel-en-bajo-circuito'
      },
      {
          title: 'Angus & Julia Stone',
          date: '2024-07-01',
          time: '09:00 PM',
          location: 'Teatro Metropólitan',
          image: 'imagesEventos/angusyjsEvento.png',
          link: 'https://www.ticketmaster.com.mx/angus-julia-stone-mexico-01-07-2024/event/1400604C85A9087B'
      }, 
      {
          title: 'INSPECTOR',
          date: '2024-07-06',
          time: '09:00 PM',
          location: 'Arena Ciudad de México',
          image: 'imagesEventos/inspectorEvento.png',
          link: 'https://www.superboletos.com/landing-evento/wNn8mW2Vc2aLfJowjz39_Q'

      },
      {
        title: 'Daniels Sinfonico',
        date: '2024-07-07',
        time: '06:00 PM',
        location: 'Teatro de la Ciudad Esperanza Iris',
        image: 'imagesEventos/danielsEvento.png',
        link: 'https://www.ticketmaster.com.mx/los-daniels-en-concierto-sinfonico-mexico-07-07-2024/event/3D00608596BF1912'
      },
      {
        title: 'DLD en Concierto',
        date: '2024-07-12',
        time: '08:30 PM',
        location: 'Palacio de los Deportes',
        image: 'imagesEventos/dldEvento.png',
        link: 'https://www.ticketmaster.com.mx/dld-mexico-12-07-2024/event/14006054B1B51979'
      },
      {
        title: 'Los Bunkers',
        date: '2024-07-13',
        time: '08:30 PM',
        location: 'Palacio de los Deportes',
        image: 'imagesEventos/bunkersEvento.png',
        link: 'https://www.ticketmaster.com.mx/los-bunkers-mexico-13-07-2024/event/14005F96B9691506'
      },
      {
        title: 'Emery & The Almost',
        date: '2024-07-19',
        time: '06:00 PM',
        location: 'Foro Alarcón',
        image: 'imagesEventos/emeryEvento.png',
        link: 'https://www.superboletos.com/landing-evento/jt_OaC7r5SJaY7vOLZ_RBA'
      },
      {
        title: 'Oscar Maydon (Tour Distorsion)',
        date: '2024-07-20',
        time: '09:00 PM',
        location: 'Auditorio BB',
        image: 'imagesEventos/maydonEvento.png',
        link: 'https://www.ticketmaster.com.mx/oscar-maydon-tour-distorsion-2024-mexico-20-07-2024/event/14006090AF2A146B'
      },
      {
      title: 'Los Espiritus',
      date: '2024-07-28',
      time: '09:00 PM',
      location: 'Auditorio BB',
      image: 'imagesEventos/espiritusEvento.png',
      link: 'https://www.ticketmaster.com.mx/los-espiritus-mexico-28-07-2024/event/140060A2E5D42975'
      },
      {
          title: 'Evento 1',
          date: '2024-06-15',
          time: '10:00 AM',
          location: 'Lugar del Evento 1',
          image: 'imagesEventos/cisterEvento.png',
          link: ''
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
          const emptyDiv = document.createElement('div');
          calendar.appendChild(emptyDiv);
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
