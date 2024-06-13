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
        },

        //EVENTOS DE AGOSTO
        {
            title: 'El Malilla',
            date: '2024-08-01',
            time: '8:30 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/agosto/malilla.png',
            link: 'https://www.ticketmaster.com.mx/dromedarios-magicos-y-ms-ambar-ciudad-de-mexico-01-08-2024/event/3D0060A3A4C3349F'
        },
        {
            title: 'Dromedario Mágicos y MS Ambar ',
            date: '2024-08-01',
            time: '9:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/agosto/drome.png',
            link: 'https://www.ticketmaster.com.mx/el-malilla-mexico-01-08-2024/event/14006083A7D51966'
        },
        {
            title: 'Los Caligaris',
            date: '2024-08-02',
            time: '8:30 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/agosto/caligaris.png',
            link: 'https://www.ticketmaster.com.mx/caligaris-ciudad-de-mexico-02-08-2024/event/3D005F57F8B54D60'
        },
        {
            title: 'Tino el Pingüino',
            date: '2024-08-03',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/agosto/tino.png',
            link: 'https://www.ticketmaster.com.mx/tino-el-pinguino-mexico-03-08-2024/event/14006064995109CD'
        },
        {
            title: 'Juaninacka',
            date: '2024-08-04',
            time: '8:00 PM',
            location: 'Bajo Circuito',
            image: 'imagesEventos/agosto/juaninacka.png',
            link: 'https://www.passline.com/eventos/juaninacka-media-vida-tour'
        },
        {
            title: 'Emilia (MP3 Tour)',
            date: '2024-08-09',
            time: '9:00 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/agosto/emilia.png',
            link: 'https://www.ticketmaster.com.mx/emilia-mp3-tour-mexico-09-08-2024/event/140060A2F1F92C0C'
        },
        {
            title: 'Abril de Fresa en CDMX',
            date: '2024-08-10',
            time: '8:00 PM',
            location: 'Foro San Rafael',
            image: 'imagesEventos/agosto/abrilfresa.png',
            link: 'https://www.passline.com/eventos/abrildefresa-cdmx'
        },
        {
            title: 'Moenia',
            date: '2024-08-14',
            time: '8:30 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/agosto/moenia.png',
            link: 'https://www.ticketmaster.com.mx/moenia-ciudad-de-mexico-14-08-2024/event/3D00604E9CA916F6'
        },
        {
            title: 'Piso 21',
            date: '2024-08-15',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/agosto/piso21.png',
            link: 'https://www.ticketmaster.com.mx/piso-21-mexico-15-08-2024/event/14006074016F2C8B'
        },
        {
            title: 'Lola Indigo en CDMX',
            date: '2024-08-15',
            time: '9:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/agosto/lola.png',
            link: 'https://www.ticketmaster.com.mx/legallyrxx-el-nino-de-los-corazones-mexico-16-08-2024/event/3D0060C4AFC515CD'
        },
        {
            title: 'Legallyrxx',
            date: '2024-08-16',
            time: '9:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/agosto/legally.png',
            link: 'https://www.ticketmaster.com.mx/lola-indigo-mexico-15-08-2024/event/3D00608583050B5C'
        },
        {
            title: 'Odisseo',
            date: '2024-08-17',
            time: '8:00 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/agosto/odisseo.png',
            link: 'https://www.ticketmaster.com.mx/odisseo-ciudad-de-mexico-17-08-2024/event/3D006056F8B752F2'
        },
        {
            title: 'Feid (Ferxxocalipsis Tour)',
            date: '2024-08-21',
            time: '8:30 PM',
            location: 'Foro Sol',
            image: 'imagesEventos/agosto/feid.png',
            link: 'https://www.ticketmaster.com.mx/feid-mexico-21-08-2024/event/1400606702422D02'
        },
        {
            title: 'Natanael Cano (Tumbado Tour)',
            date: '2024-08-23',
            time: '8:30 PM',
            location: 'Foro Sol',
            image: 'imagesEventos/agosto/nata.png',
            link: 'https://www.ticketmaster.com.mx/natanael-cano-mexico-23-08-2024/event/14006090B13D1625'
        },
        {
            title: 'Camilo Septimo (X años)',
            date: '2024-08-23',
            time: '5:00 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/agosto/camilo.png',
            link: 'https://www.ticketmaster.com.mx/camilo-septimo-ciudad-de-mexico-23-08-2024/event/3D0060BBEFEF4417'
        },
        {
            title: 'Festival HERA',
            date: '2024-08-24',
            time: '1:00 PM',
            location: 'Autodromo Hermanos Rodriguez',
            image: 'imagesEventos/agosto/hera.png',
            link: 'https://www.ticketmaster.com.mx/festival-hera-hsbc-general-mexico-24-08-2024/event/14006088C2A01334'
        },
        {
            title: 'Allison (acustico)',
            date: '2024-08-27',
            time: '8:30 PM',
            location: 'Teatro Metropolitan',
            image: 'imagesEventos/agosto/allison.png',
            link: 'https://www.ticketmaster.com.mx/allison-mexico-27-08-2024/event/140060AF97BC1040'
        },
        {
            title: 'CD9 (Last Party)',
            date: '2024-08-29',
            time: '9:00 PM',
            location: 'Arena CDMX',
            image: 'imagesEventos/agosto/cd9.png',
            link: 'https://www.superboletos.com/landing-evento/F6X9msSu8X0I1wmQVd_N7Q'
        },
        {
            title: 'Babasonicos',
            date: '2024-08-30',
            time: '8:30 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/agosto/babasonicos.png',
            link: 'https://www.ticketmaster.com.mx/babasonicos-ciudad-de-mexico-30-08-2024/event/3D006073868409C2'
        },
        {
            title: 'Eladio Carrion',
            date: '2024-08-31',
            time: '8:30 PM',
            location: 'Arena CDMX',
            image: 'imagesEventos/agosto/eladio.png',
            link: 'https://www.superboletos.com/landing-evento/kqBcxWRbAk6YnC8P-v108w'
        },
        {
            title: 'Caifanes',
            date: '2024-08-31',
            time: '9:00 PM',
            location: 'Foro Sol',
            image: 'imagesEventos/agosto/caifanes.png',
            link: 'https://www.ticketmaster.com.mx/caifanes-mexico-31-08-2024/event/14006084DE1524EA'
        },
        {
            title: 'La Garfield',
            date: '2024-08-31',
            time: '8:30 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/agosto/lagarfield.png',
            link: 'https://www.ticketmaster.com.mx/la-garfield-mexico-31-08-2024/event/14006084E68527C2'
        },
        
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

        const eventsContainer = document.createElement('div');
        eventsContainer.classList.add('events-container');

        const eventDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        events.filter(event => event.date === eventDate).forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <img src="${event.image}" alt="Imagen del Evento">
            <h4>${event.title}</h4>
            <p> ${event.time}</p>
            <p> ${event.location}</p>
            <a href="${event.link}" target="_blank">Compra de boletos.</a>
        `;
        eventsContainer.appendChild(eventElement);
        });

        dayElement.appendChild(eventsContainer);
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
