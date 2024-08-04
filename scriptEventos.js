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
            link: 'https://www.ticketmaster.com.mx/el-malilla-mexico-01-08-2024/event/14006083A7D51966'
        },
        {
            title: 'Dromedarios Mágicos y MS Ambar ',
            date: '2024-08-01',
            time: '9:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/agosto/drome.png',
            link: 'https://www.ticketmaster.com.mx/dromedarios-magicos-y-ms-ambar-ciudad-de-mexico-01-08-2024/event/3D0060A3A4C3349F'
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
            title: 'El Haragán y Cía',
            date: '2024-08-02',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/agosto/haragan.png',
            link: 'https://www.ticketmaster.com.mx/el-haragan-y-cia-mexico-02-08-2024/event/14006090B5001952?clickId=wiiTRv2TOxyKRCQ3QvxqTxNCUkCx3nXDRUd7SA0&irgwc=1&utm_source=1234554-Songkick&utm_medium=affiliate&utm_campaign=1234554&ircid=11559&camefrom=CFC_BUYAT_1234554'
        },
        {
            title: 'Ferraz',
            date: '2024-08-02',
            time: '8:00 PM',
            location: 'Mercado Roma',
            image: 'imagesEventos/agosto/ferraz.png',
            link: 'https://www.passline.com/eventos/ferraz-en-vivo-full-band-presenta-trascendente'
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
            title: 'Party 101',
            date: '2024-08-03',
            time: '8:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/agosto/101.png',
            link: 'https://www.ticketmaster.com.mx/party-101-mexico-03-08-2024/event/3D0060E3BEAD3E85'
        },
        {
            title: 'Estelares',
            date: '2024-08-03',
            time: '8:00 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/agosto/estelares.png',
            link: 'https://www.ticketmaster.com.mx/estelares-ciudad-de-mexico-03-08-2024/event/3D00606C9B030E57?clickId=wiiTRv2TOxyKRCQ3QvxqTxNCUkCx3iwLRUd7SA0&irgwc=1&utm_source=1234554-Songkick&utm_medium=affiliate&utm_campaign=1234554&ircid=11559&camefrom=CFC_BUYAT_1234554'
        },
        {
            title: 'DrefQuila',
            date: '2024-08-03',
            time: '9:00 PM',
            location: 'Foro Indie Rocks',
            image: 'imagesEventos/agosto/dref.png',
            link: 'https://www.passline.com/eventos/drefquila-en-foro-indie-rocks'
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
            title: 'Kidd Wings',
            date: '2024-08-04',
            time: '4:00 PM',
            location: 'Multiforo 246',
            image: 'imagesEventos/agosto/kidd.png',
            link: 'https://www.passline.com/eventos/un-show-mas-de-pepelepluggg'
        },
        {
            title: 'GHOULJABOY + CHICANO WEI',
            date: '2024-08-08',
            time: '8:00 PM',
            location: 'El Club del Rock & Roll ',
            image: 'imagesEventos/agosto/chicano.png',
            link: 'https://www.passline.com/eventos/ghouljaboy-chicano-wei'
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
            title: 'Wild O´Fest',
            date: '2024-08-10',
            time: '12:30 PM',
            location: 'Pabellón Oeste',
            image: 'imagesEventos/agosto/wild.png',
            link: 'https://www.ticketmaster.com.mx/wild-o-fest-mexico-10-08-2024/event/1400605BC99B1EC8'
        },
        {
            title: 'Bruno Mars',
            date: '2024-08-10',
            time: '9:00 PM',
            location: 'Estadio GNP seguros',
            image: 'imagesEventos/agosto/bruno.png',
            link: 'https://www.ticketmaster.com.mx/bruno-mars-mxico-10-08-2024/event/140060CA9B340CD7'
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
            link: 'https://www.ticketmaster.com.mx/lola-indigo-mexico-15-08-2024/event/3D00608583050B5C'
        },
        {
            title: 'TE VI EN UN PLANETARIO',
            date: '2024-08-15',
            time: '8:00 PM',
            location: 'El Club del Rock & Roll',
            image: 'imagesEventos/agosto/planetario.png',
            link: 'https://www.passline.com/eventos/te-vi-en-un-planetario-tigre-ulli-en-el-club-del-rock-roll'
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
            title: 'Miky Woodz',
            date: '2024-08-16',
            time: '9:00 PM',
            location: 'Pabellon Oeste',
            image: 'imagesEventos/agosto/woodz.png',
            link: 'https://www.ticketmaster.com.mx/miky-woodz-mexico-16-08-2024/event/140060DAFFE52EF8'
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
            title: 'ANDRU',
            date: '2024-08-17',
            time: '8:00 PM',
            location: 'El Club del Rock & Roll',
            image: 'imagesEventos/agosto/andru.png',
            link: 'https://www.passline.com/eventos/andru-las-cosas-que-quiero-recordar'
        },
        {
            title: 'Ben Howard',
            date: '2024-08-17',
            time: '9:00 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/agosto/howard.png',
            link: 'https://www.ticketmaster.com.mx/ben-howard-mexico-17-08-2024/event/1400604C11642777?utm_content=hotevent&clickId=wiiTRv2TOxyKRCQ3QvxqTxNCUkCx3EzCRUd7SA0&irgwc=1&utm_source=1234554-Songkick&utm_medium=affiliate&utm_campaign=1234554&ircid=11559&camefrom=CFC_BUYAT_1234554'
        },
        {
            title: 'WARCRY',
            date: '2024-08-17',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/agosto/warcry.png',
            link: 'https://www.ticketmaster.com.mx/warcry-daimon-tour-mexico-17-08-2024/event/140060AFB1A023DB?clickId=wiiTRv2TOxyKRCQ3QvxqTxNCUkCx3HTDRUd7SA0&irgwc=1&utm_source=1234554-Songkick&utm_medium=affiliate&utm_campaign=1234554&ircid=11559&camefrom=CFC_BUYAT_1234554'
        },
        {
            title: 'Vacations',
            date: '2024-08-17',
            time: '9:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/agosto/vacations.png',
            link: 'https://www.ticketmaster.com.mx/vacations-mexico-17-08-2024/event/3D0060A6EC7126BF'
        },
        {
            title: 'Sandro Malandro',
            date: '2024-08-18',
            time: '8:00 PM',
            location: 'Bajo Circuito',
            image: 'imagesEventos/agosto/sandro.png',
            link: 'https://www.passline.com/eventos/sandro-malandro-en-cdmx'
        },
        {
            title: 'Feid',
            date: '2024-08-21',
            time: '8:30 PM',
            location: 'Foro Sol',
            image: 'imagesEventos/agosto/feid.png',
            link: 'https://www.ticketmaster.com.mx/feid-mexico-21-08-2024/event/1400606702422D02'
        },
        {
            title: 'Karol Sevilla',
            date: '2024-08-21',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/agosto/karol.png',
            link: 'https://www.ticketmaster.com.mx/karol-sevilla-mexico-21-08-2024/event/140060CABDEE14FC'
        },
        {
            title: 'Wild Nothing',
            date: '2024-08-21',
            time: '6:00 PM',
            location: 'Foro Indie Rocks',
            image: 'imagesEventos/agosto/nothing.png',
            link: 'https://www.passline.com/eventos/wild-nothing'
        },
        {
            title: 'Jonas Brothers',
            date: '2024-08-22',
            time: '9:00 PM',
            location: 'Arena CDMX',
            image: 'imagesEventos/agosto/jonas.png',
            link: 'https://www.superboletos.com/landing-evento/VqnasUUutFP3UuMArutUUw'
        },
        {
            title: 'Master Plus',
            date: '2024-08-22',
            time: '8:30 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/agosto/master.png',
            link: 'https://www.ticketmaster.com.mx/master-plus-ciudad-de-mexico-22-08-2024/event/3D00603AB16F485A'
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
            title: 'Camilo Septimo',
            date: '2024-08-23',
            time: '5:00 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/agosto/camilo.png',
            link: 'https://www.ticketmaster.com.mx/camilo-septimo-ciudad-de-mexico-23-08-2024/event/3D0060BBEFEF4417'
        },
        {
            title: 'LAGOS',
            date: '2024-08-23',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/agosto/lagos.png',
            link: 'https://www.ticketmaster.com.mx/lagos-mexico-23-08-2024/event/1400603DBB411EDE?clickId=wiiTRv2TOxyKRCQ3QvxqTxNCUkCx3EyyRUd7SA0&irgwc=1&utm_source=1234554-Songkick&utm_medium=affiliate&utm_campaign=1234554&ircid=11559&camefrom=CFC_BUYAT_1234554'
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
            title: 'Lucho al Ataque',
            date: '2024-08-24',
            time: '8:00 PM',
            location: 'Bajo Circuito',
            image: 'imagesEventos/agosto/lucho.png',
            link: 'https://www.passline.com/eventos/lucho-al-attaque-en-bajo-circuito'
        },
        {
            title: 'Technicolor Fabrics',
            date: '2024-08-24',
            time: '8:30 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/agosto/colors.png',
            link: 'https://www.ticketmaster.com.mx/technicolor-fabrics-mexico-24-08-2024/event/14006081AAB114E7'
        },
        {
            title: 'Human Tetris',
            date: '2024-08-24',
            time: '9:00 PM',
            location: 'Pabellon Oeste',
            image: 'imagesEventos/agosto/human.png',
            link: 'https://www.ticketmaster.com.mx/event/140060AEAD6E1AE3'
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
            title: 'Peter Hook & The Light',
            date: '2024-08-29',
            time: '9:00 PM',
            location: 'Pabello Oeste',
            image: 'imagesEventos/agosto/peter.png',
            link: 'https://www.ticketmaster.com.mx/peter-hook-the-light-mexico-29-08-2024/event/14005F68E33E26D8'
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
        {
            title: 'Sonido Gallo Negro',
            date: '2024-08-31',
            time: '8:30 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/agosto/gallo.png',
            link: 'https://www.ticketmaster.com.mx/sonido-gallo-negro-mexico-31-08-2024/event/3D0060B7A2722E72?clickId=wiiTRv2TOxyKRCQ3QvxqTxNCUkCx3G0zRUd7SA0&irgwc=1&utm_source=1234554-Songkick&utm_medium=affiliate&utm_campaign=1234554&ircid=11559&camefrom=CFC_BUYAT_1234554'
        },
        //SEPTIEMBRE
        {
            title: 'B.D.U',
            date: '2024-09-04',
            time: '8:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/septiembre/bdu.png',
            link: 'https://www.ticketmaster.com.mx/tour-for-wishpool-flash-ligth-mexico-04-09-2024/event/3D0060D1982C161F?language=en-mx',
        },
        {
            title: 'Tesseract',
            date: '2024-09-04',
            time: '8:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/teseract.png',
            link: 'https://tesseract-abb.boletia.com/?fbclid=IwZXh0bgNhZW0CMTAAAR08Ke1Cg6cyPWp4kmMBpqH8kbfU7Yko-9L739FDEgdEofe7aD9cW73A4YQ_aem_AUt-Wjk0zOKh062oCrhwCOa8_9NuhoDP8XaNnGhM0WiaTw00avyXv7f1By5a0f0cEmkCEaEtVpqbJ6fwtQwH0XN5',
        },
        {
            title: 'Mi Amigo Invencible',
            date: '2024-09-05',
            time: '7:00 PM',
            location: 'Foro Indie Rocks',
            image: 'imagesEventos/septiembre/amigo.png',
            link: 'https://www.passline.com/eventos/mi-amigo-invencible-en-foro-indie-rocks',
        },
        {
            title: 'BETA',
            date: '2024-09-05',
            time: '8:30 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/septiembre/betajpeg.jpeg',
            link: 'https://www.ticketmaster.com.mx/beta-ciudad-de-mexico-05-09-2024/event/3D006068ED2E2A7A',
        },
        {
            title: 'Kika Edgar',
            date: '2024-09-06',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/kika.png',
            link: 'https://www.ticketmaster.com.mx/kika-edgar-y-la-internacional-sonora-mexico-06-09-2024/event/1400608BA7A71268',
        },
        {
            title: 'Justin Quiles',
            date: '2024-09-06',
            time: '7:00 PM',
            location: 'Centro de Convenciones Tlatelolco',
            image: 'imagesEventos/septiembre/quiles.png',
            link: 'https://www.passline.com/eventos/justin-quiles-en-mexico',
        },
        {
            title: 'ARRE',
            date: '2024-09-07',
            time: '1:00 PM',
            location: 'Autodromo Hermanos Rodriguez',
            image: 'imagesEventos/septiembre/arre.png',
            link: 'https://www.ticketmaster.com.mx/abono-general-arre-2024-mexico-07-09-2024/event/14006097C95722CA?language=en-mx',
        },
        {
            title: 'Carlos Vives',
            date: '2024-09-07',
            time: '8:00 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/septiembre/vives.png',
            link: 'hhttps://www.ticketmaster.com.mx/carlos-vives-ciudad-de-mexico-07-09-2024/event/3D00606EC55655BA',
        },
        {
            title: 'Aida Cuevas',
            date: '2024-09-07',
            time: '9:00 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/aida.png',
            link: 'https://www.ticketmaster.com.mx/noche-mexicana-con-aida-cuevas-mexico-07-09-2024/event/14006050CECB280B',
        },
        {
            title: 'Donovan Morales',
            date: '2024-09-07',
            time: '8:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/Donovan.png',
            link: 'https://www.ticketmaster.com.mx/donovan-morales-mexico-07-09-2024/event/1400606BA21B10D2?language=en-mx',
        },
        {
            title: 'Maria José',
            date: '2024-09-07',
            time: '8:00 PM',
            location: 'Palacio de los Deportes',
            image: 'imagesEventos/septiembre/mariajose.png',
            link: 'https://www.ticketmaster.com.mx/maria-jose-cdmx-07-09-2024/event/1400604DE1AA2B45?language=en-mx',
        },
        {
            title: 'STRFKR',
            date: '2024-09-07',
            time: '9:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/septiembre/stfrk.png',
            link: 'https://www.ticketmaster.com.mx/strfkr-mexico-07-09-2024/event/3D0060A8F9723A2A?language=en-mx',
        },
        {
            title: 'Juanpalitoschinos',
            date: '2024-09-07',
            time: '8:00 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/septiembre/juanpalitos.png',
            link: 'https://www.ticketmaster.com.mx/juan-palitos-chinos-ciudad-de-mexico-07-09-2024/event/3D006099C4B14029?language=en-mx',
        },
        {
            title: 'ARRE',
            date: '2024-09-08',
            time: '1:00 PM',
            location: 'Autodromo Hermanos Rodriguez',
            image: 'imagesEventos/septiembre/arre.png',
            link: 'https://www.ticketmaster.com.mx/abono-general-arre-2024-mexico-07-09-2024/event/14006097C95722CA?language=en-mx',
        },
        {
            title: 'NCT DREAM',
            date: '2024-09-09',
            time: '8:00 PM',
            location: 'Palacio de los Deportes',
            image: 'imagesEventos/septiembre/nct.png',
            link: 'https://somosdereven.com/nct-dream-en-cdmx-palacio-de-los-deportes-2024/',
        },
        {
            title: 'BERSUIT VERGARABAT',
            date: '2024-09-11',
            time: '8:30 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/septiembre/bersuit.png',
            link: 'https://www.ticketmaster.com.mx/bersuit-ciudad-de-mexico-11-09-2024/event/3D0060BBDED43E0E',
        },
        {
            title: 'DREAMCATCHER',
            date: '2024-09-11',
            time: '8:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/Dreamcatcher.png',
            link: 'https://www.ticketmaster.com.mx/dreamcatcher-2024-world-tour-luck-inside-mexico-11-09-2024/event/140060BFCDD42C0D',
        },
        {
            title: 'Rita Payés',
            date: '2024-09-11',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/rita.png',
            link: 'https://www.ticketmaster.com.mx/rita-payes-mexico-11-09-2024/event/140060D196DC0D1A',
        },
        {
            title: 'WOS',
            date: '2024-09-12',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/wos.png',
            link: 'https://www.ticketmaster.com.mx/wos-mexico-12-09-2024/event/1400603DEEF42619',
        },
        {
            title: 'DAYGLOW',
            date: '2024-09-12',
            time: '9:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/dayglow.png',
            link: 'https://www.ticketmaster.com.mx/dayglow-mexico-12-09-2024/event/14006073BE1F178E?language=en-mx',
        },
        {
            title: 'Mon Torales',
            date: '2024-09-12',
            time: '8:30 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/septiembre/mon.png',
            link: 'https://www.ticketmaster.com.mx/mon-torales-ciudad-de-mexico-12-09-2024/event/3D0060C7BD943B91?fbclid=IwZXh0bgNhZW0CMTAAAR2dKjcZGOYxB2vLiBiFekRNa-N62ghchN8nO5P6qDPkBwEU0Jqke4eGnFE_aem_O1fik6AKWg0SlvE0CdyY_w',
        },
        {
            title: 'La Castañeda',
            date: '2024-09-13',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/casta.png',
            link: 'https://www.ticketmaster.com.mx/la-castaneda-35-aniversario-mexico-13-09-2024/event/1400602997C20BB6?language=en-mx',
        },
        {
            title: 'Renee',
            date: '2024-09-13',
            time: '7:00 PM',
            location: 'Parker and Lenox',
            image: 'imagesEventos/septiembre/renee.png',
            link: 'https://www.passline.com/eventos/renee-residencia-13-de-septiembre',
        },
        {
            title: 'Delux',
            date: '2024-09-13',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/delux.png',
            link: 'https//www.ticketmaster.com.mx/delux-mexico-13-09-2024/event/140060BEB9BA249F?language=en-mx//www.ticketmaster.com.mx/la-castaneda-35-aniversario-mexico-13-09-2024/event/1400602997C20BB6?language=en-mx',
        },
        {
            title: 'Rata Blanca',
            date: '2024-09-13',
            time: '8:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/rata.png',
            link: 'https://rata-blanca-gira-mexico-2024.boletia.com/?fbclid=IwZXh0bgNhZW0CMTAAAR1iLfrbytg6epUK9ecPC6cuWhDPvF6fQLmV_OV1YbUdJDSi0ZPbsPZn8i4_aem_QosX8UDSAEI-Saro-p8wOQ',
        },
        {
            title: 'Dehd',
            date: '2024-09-13',
            time: '9:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/septiembre/dehd.png',
            link: 'https://www.ticketmaster.com.mx/dehd-mexico-13-09-2024/event/3D0060E288CC17D9',
        },
        {
            title: 'Enjambre',
            date: '2024-09-14',
            time: '8:00 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/septiembre/enjambre.png',
            link: 'https://www.ticketmaster.com.mx/enjambre-ciudad-de-mexico-14-09-2024/event/3D00604FCB2F4774?language=en-mx'
        },
        {
            title: 'NVSCVR',
            date: '2024-09-14',
            time: '9:00 PM',
            location: 'Foro Alarcon',
            image: 'imagesEventos/septiembre/nvscvr.png',
            link: 'https://nvscvr-cdmx.boletia.com/'
        },
        {
            title: 'Mc Davo',
            date: '2024-09-14',
            time: '8:30 PM',
            location: 'Pabellon Oeste',
            image: 'imagesEventos/septiembre/davo.png',
            link: 'https://www.ticketmaster.com.mx/mc-davo-mexico-14-09-2024/event/140060F2E6BE2500?language=en-mx'
        },
        {
            title: 'Alvaro Diaz',
            date: '2024-09-15',
            time: '7:00 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/septiembre/alvaro.png',
            link: 'https://www.ticketmaster.com.mx/alvaro-diaz-ciudad-de-mexico-15-09-2024/event/3D0060CD8C34095C?language=en-mx'
        },
        {
            title: 'Peso Pluma',
            date: '2024-09-18',
            time: '9:00 PM',
            location: 'Palacio de los Deportes',
            image: 'imagesEventos/septiembre/peso.png',
            link: 'https://www.ticketmaster.com.mx/peso-pluma-cdmx-18-09-2024/event/140060EB974317EE?language=en-mx'
        },
        {
            title: 'Austin TV',
            date: '2024-09-19',
            time: '8:00 PM',
            location: 'Foro Alicia',
            image: 'imagesEventos/septiembre/austin.png',
            link: 'https://www.wegow.com/mx/conciertos/austin-tv-la-ultima-noche-del-mundo-19-septiembre'
        },
        {
            title: 'Grupo Cañaveral',
            date: '2024-09-19',
            time: '8:00 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/septiembre/canaveral.png',
            link: 'https://www.ticketmaster.com.mx/grupo-canaveral-de-humberto-pabon-en-concierto-ciudad-de-mexico-19-09-2024/event/3D005F44B2E725D3'
        },
        {
            title: 'Metallica',
            date: '2024-09-20',
            time: '6:30 PM',
            location: 'Estadio GNP Seguros',
            image: 'imagesEventos/septiembre/metallica.png',
            link: 'https://www.ticketmaster.com.mx/metallica-m72-world-tour-foro-sol-cdmx-20-09-2024/event/14005D76BEA832E9?language=en-mx'
        },
        {
            title: 'Rawayana',
            date: '2024-09-20',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/rawayana.png',
            link: 'https://www.ticketmaster.com.mx/rawayana-mexico-20-09-2024/event/1400607B8B7B08A3'
        },
        {
            title: 'Travis Scott',
            date: '2024-09-21',
            time: '9:00 PM',
            location: 'Explanada del Estadio Azteca',
            image: 'imagesEventos/septiembre/travis.png',
            link: ''
        },
        {
            title: 'NSQK',
            date: '2024-09-21',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/nsqk.png',
            link: 'https://www.ticketmaster.com.mx/nsqk-presenta-alter-ego-mexico-21-09-2024/event/140060A7EA1226BB?language=en-mx'
        },
        {
            title: 'Niall Horan',
            date: '2024-09-21',
            time: '8:00 PM',
            location: 'Palacio de los Deportes',
            image: 'imagesEventos/septiembre/niall.png',
            link: 'https://www.ticketmaster.com.mx/niall-horan-cdmx-21-09-2024/event/14005F51B34515B3?language=en-mx'
        },
        {
            title: 'Plastilina Mosh',
            date: '2024-09-21',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/plastilina.png',
            link: 'https://www.ticketmaster.com.mx/plastilina-mosh-mexico-21-09-2024/event/140060EAAA401F5C?language=en-mx'
        },
        {
            title: 'Axel Catalán',
            date: '2024-09-21',
            time: '8:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/Catalan.png',
            link: 'https://www.ticketmaster.com.mx/axel-catalan-mexico-21-09-2024/event/1400606B98A40BF5'
        },
        {
            title: 'Fito Paez',
            date: '2024-09-21',
            time: '8:30 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/septiembre/fito.png',
            link: 'https://www.ticketmaster.com.mx/fito-paez-ciudad-de-mexico-21-09-2024/event/3D006081A7CC1CC4'
        },
        {
            title: 'Daniel Quien',
            date: '2024-09-21',
            time: '8:30 PM',
            location: 'Teatro Ciudad de la Esperanza Iris',
            image: 'imagesEventos/septiembre/daniel.png',
            link: 'https://www.ticketmaster.com.mx/daniel-quien-de-este-sueno-no-me-despierto-mexico-21-09-2024/event/3D0060D3C4FD2FE0'
        },
        {
            title: 'Boris Brejcha',
            date: '2024-09-22',
            time: '10:00 PM',
            location: 'Palacio de los Deportes',
            image: 'imagesEventos/septiembre/boris.png',
            link: 'https://www.ticketmaster.com.mx/boris-brejcha-cdmx-22-09-2024/event/140060EB921D174B'
        },
        {
            title: 'Matisse',
            date: '2024-09-22',
            time: '7:00 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/septiembre/matisse.png',
            link: 'https://www.ticketmaster.com.mx/matisse-ciudad-de-mexico-22-09-2024/event/3D00608B93DF0C30'
        },
        {
            title: 'ARTMS',
            date: '2024-09-22',
            time: '6:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/artms.png',
            link: 'https://www.passline.com/eventos-plano/artms-world-tour-2024'
        },
        {
            title: 'Foyone',
            date: '2024-09-22',
            time: '9:00 PM',
            location: 'Foro Puebla',
            image: 'imagesEventos/septiembre/foyone.png',
            link: 'https://foyone.boletia.com/'
        },
        {
            title: 'Ute Lemper',
            date: '2024-09-23',
            time: '8:30 PM',
            location: 'Lunario del Auditorio Nacional',
            image: 'imagesEventos/septiembre/ute.png',
            link: 'https://www.ticketmaster.com.mx/ute-lemper-noches-intimas-de-kabarett-ciudad-de-mexico-23-09-2024/event/3D0060A9BBC51EE5?language=en-mx'
        },
        {
            title: 'Anohni and the Johnson',
            date: '2024-09-24',
            time: '9:00 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/anohi.png',
            link: 'https://www.ticketmaster.com.mx/anohni-and-the-johnsons-mexico-24-09-2024/event/140060C4B0521406?language=en-mx'
        },
        {
            title: 'Fall Out Boy',
            date: '2024-09-25',
            time: '9:00 PM',
            location: 'Palacio de los Deportes',
            image: 'imagesEventos/septiembre/fall.png',
            link: 'https://www.ticketmaster.com.mx/fall-out-boy-mexico-25-09-2024/event/140060C3F1B51CF0'
        },
        {
            title: 'DannyLux',
            date: '2024-09-26',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/danny.png',
            link: 'https://www.ticketmaster.com.mx/dannylux-mexico-26-09-2024/event/1400605DA0F61443'
        },
        {
            title: 'Insite + Thermo',
            date: '2024-09-26',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/insite.png',
            link: 'https://www.ticketmaster.com.mx/insite-thermo-mexico-26-09-2024/event/1400608F99CB0AFD?language=en-mx'
        },
        {
            title: 'LSD & The Search for Go',
            date: '2024-09-27',
            time: '7:00 PM',
            location: 'Foro Indie Rocks',
            image: 'imagesEventos/septiembre/lsd.png',
            link: 'https://www.passline.com/eventos/lsd-the-search-for-god-ulrika-spacek'
        },
        {
            title: 'Jumbo',
            date: '2024-09-27',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/septiembre/jumbo.png',
            link: 'https://www.ticketmaster.com.mx/jumbo-mexico-27-09-2024/event/14006074E4F526D4'
        },
        {
            title: 'Generaciones Tour',
            date: '2024-09-27',
            time: '9:00 PM',
            location: 'Arena CDMX',
            image: 'imagesEventos/septiembre/generaciones.png',
            link: 'https://www.superboletos.com/landing-evento/m2m_HTAcRPinpD_5AtXxtw'
        },
        {
            title: 'Festival Horizonte',
            date: '2024-09-27',
            time: '5:00 PM',
            location: 'Fronton Mexico',
            image: 'imagesEventos/septiembre/horizonte.png',
            link: 'https://festival-horizonte.boletia.com/?fbclid=IwZXh0bgNhZW0CMTAAAR1lofxQ5BKog37nvx4RAVckHkF5hPcttdWmQuxHotXhDGsSAY8S1a8AIFw_aem_AeCg9fnFpZRFzC5H9_fJFXSuo56Sm-oltpNWyfplJbYlJVY4fscebh_gZ6X4s890bf40mC4oNOigfgDhQRNygYhP'
        },
        {
            title: 'Bratty',
            date: '2024-09-28',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/septiembre/bratty.png',
            link: 'https://www.ticketmaster.com.mx/bratty-mexico-28-09-2024/event/140060990DDE2F55?language=en-mx'
        },
        {
            title: 'Dillom',
            date: '2024-09-28',
            time: '8:00 PM',
            location: 'Carpa Velodromo',
            image: 'imagesEventos/septiembre/dillom.png',
            link: 'https://dillom-por-cesarea-tour-cdmx.boletia.com/',
        },
        {
            title: 'Bronco',
            date: '2024-09-28',
            time: '9:00 PM',
            location: 'Arena CDMX',
            image: 'imagesEventos/septiembre/bronco.png',
            link: 'https://www.superboletos.com/landing-evento/_PGQUc4YEd8zMH3_jZ1KuA',
        },
        {
            title: 'Chicano Batman',
            date: '2024-09-28',
            time: '8:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/septiembre/chicano.png',
            link: 'https://www.ticketmaster.com.mx/event/1400604FF7B9353D?fbclid=IwAR3HqzSKaOKr-dXQzY1KdP9JTyO31xuJlAa45vH7ZsPRfr4qt--OUvKKZBw',
        },
        //OCTUBRE
        {
            title: 'Atarashii Gakko!',
            date: '2024-10-01',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/octubre/atarashi.png',
            link: 'https://eventosencdmx.com/eventos/atarashii-gakko-en-concierto/',
        },
        {
            title: 'Matteo Bocelli',
            date: '2024-10-01',
            time: '9:00 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/octubre/bocelli.png',
            link: 'https://www.ticketmaster.com.mx/matteo-bocelli-mexico-01-10-2024/event/140060AAE14F2CA0',
        },
        {
            title: 'Jamie XX',
            date: '2024-10-02',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/octubre/jamie.png',
            link: 'https://www.ticketmaster.com.mx/jamie-xx-in-waves-tour-mexico-02-10-2024/event/140060E5BF35266A',
        },
        {
            title: 'Eric Clapton',
            date: '2024-10-03',
            time: '8:30 PM',
            location: 'Estadio GNP Seguros',
            image: 'imagesEventos/octubre/clapton.png',
            link: 'https://www.ticketmaster.com.mx/eric-clapton-cdmx-03-10-2024/event/14006031FB4C23C7',
        },
        {
            title: 'Trueno',
            date: '2024-10-03',
            time: '8:30 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/octubre/trueno.png',
            link: 'https://www.ticketmaster.com.mx/trueno-mexico-03-10-2024/event/1400608C838A0890',
        },
        {
            title: 'Los Rumberos',
            date: '2024-10-03',
            time: '8:30 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/octubre/rumberos.png',
            link: 'https://www.ticketmaster.com.mx/los-rumberos-mexico-03-10-2024/event/14006093FD922E42',
        },
        {
            title: 'IDLES',
            date: '2024-10-04',
            time: '9:00 PM',
            location: 'Pepsi Center WTC',
            image: 'imagesEventos/octubre/idles.png',
            link: 'https://www.ticketmaster.com.mx/idles-love-is-the-fing-tour-mexico-04-10-2024/event/14005F76837C0F03',
        },
        {
            title: 'La Gusana Ciega',
            date: '2024-10-04',
            time: '8:30 PM',
            location: 'Auditorio Nacional',
            image: 'imagesEventos/octubre/gusana.png',
            link: 'https://www.ticketmaster.com.mx/la-gusana-ciega-ciudad-de-mexico-04-10-2024/event/3D0060AFEEA35C26',
        },
        {
            title: 'Yooymatt',
            date: '2024-10-04',
            time: '9:00 PM',
            location: 'Auditorio BB',
            image: 'imagesEventos/octubre/matt.png',
            link: 'https://www.ticketmaster.com.mx/yosoymatt-mexico-04-10-2024/event/140060BFBB612726',
        },
        {
            title: 'Playa Limbo',
            date: '2024-10-04',
            time: '8:00 PM',
            location: 'Teatro Metropólitan',
            image: 'imagesEventos/octubre/limbo.png',
            link: 'https://www.ticketmaster.com.mx/playa-limbo-hora-cero-mexico-04-10-2024/event/140060A2A2961396',
        },
        {
            title: 'NSQK',
            date: '',
            time: '',
            location: '',
            image: '',
            link: '',
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
