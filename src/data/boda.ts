// =========================================================
// DATOS DE LA BODA
// Todo lo que cambia de una boda a otra vive acá.
// Los valores marcados con TODO son de ejemplo: reemplazalos.
// =========================================================

const novio = 'Angel Gabriel\nAnachuri';
const novia = 'Veronica Maribel\nOlivera';

export const boda = {
  novios: { novio, novia },

  // Letras del monograma de la portada (Home)
  iniciales: { novio: 'G', novia: 'V' },

  // Cómo se muestran los nombres en la presentación: nombre arriba, apellido abajo
  presentacion: {
    novio: { nombre: 'Angel\nGabriel', apellido: 'Anachuri' },
    novia: { nombre: 'Veronica\nMaribel', apellido: 'Olivera' },
  },

  // Fecha y hora de la ceremonia (la usa la cuenta regresiva).
  // Formato ISO con zona horaria de Argentina (-03:00).
  fecha: {
    iso: '2027-01-08T13:00:00-03:00',
    texto: 'Viernes 8 de Enero',
  },

  confirmarAntesDe: {
    iso: '2027-01-08T13:00:00-03:00',
    texto: 'Viernes 8 de Enero a las 13:00',
  },


  ceremonia: {
    lugar: 'ICE Lambertucci', // TODO
    //localidad: 'En frente del circuito Matheu', // TODO
    hora: '13:00',
    mapa: 'https://maps.app.goo.gl/mq5TDFQHhPxbnaeP8', // TODO
  },

  // Línea de tiempo del día. `icono` es la clave del ícono que
  // vamos a armar en components/icons/ (paso siguiente).
  programa: [
    { hora: '18:30', titulo: 'Recepción', icono: 'recepcion' },
    { hora: '19:00', titulo: 'Civil', icono: 'civil' },
    { hora: '19:20', titulo: 'Ceremonia por la iglesia', icono: 'ceremonia' },
    { hora: '19:30', titulo: 'Caravana', icono: 'caravana' },
    { hora: '20:00', titulo: 'Fiesta nupcial', icono: 'fiesta' },
  ],

  // Presentacion (aparte de home)
  portada: {
    versiculo: 'Por encima de todo, vístanse de amor, que es el vínculo perfecto.',
    referencia: 'Colosenses 3:14',
    padres: {
      novio: 'Cristobal Anachuri\ny\nAlbina Ortega', // TODO
      novia: 'Jorge\nOlivera\ny\nCristina Choque', // TODO
    },
  },
  
  whatsapp: {
  novio: '549XXXXXXXXXX', // TODO
  novia: '549XXXXXXXXXX', // TODO
},

  // Imágenes dentro de /public. Para cambiar una foto o una flor, se cambia acá.
  imagenes: {
    floresArriba: '/EsquinaArriba.png', // rosas, esquina superior derecha (PNG transparente)
    floresAbajo: '/EsquinaAbajo.png', // rosas, esquina inferior izquierda (PNG transparente)
    divisor: '/Divisor.png', // divisor floral chico
    pareja: '/Foto1.jpg', // foto de la portada (vertical, proporción 7:10)
    lugar: '/Lugar1.png',
  },

  sheets: {
  canciones: 'https://script.google.com/macros/s/AKfycbxspdI5QIJoiyKqDnHo4grXrcgyGOWFeZfn9N53Nxe5rPoctZxF15t3t9VkvYWNOWhfnw/exec',
  invitados: 'https://script.google.com/macros/s/AKfycbwTXUVO367dVo3_zsPAFuS4ny7CK-0M0c2b3pSg4baxHakw67pVaFey3LXEq8siYEga/exec', // TODO
  },

  // Archivos dentro de /public
  musica: '/Musica.mp3',

  galeria: {
  versiculo:
    'Estando persuadido de esto, que el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.',
  referencia: 'Filipenses 1:6',
  fotos: [
    { src: '/Foto1.jpg', alt: 'Foto principal de los novios' },
    { src: '/Foto2.jpeg', alt: 'Momento especial' },
    { src: '/Foto3c.jpg', alt: 'Momento divertido' },
  ],
},

  // Textos de pestaña y vista previa de WhatsApp
  meta: {
    titulo: `Nuestra Boda - ${novio} & ${novia}`,
    tituloCompartir: `¡Nos Casamos! - ${novio} & ${novia}`,
    descripcion:
      'Estás invitado a celebrar este momento tan especial con nosotros. ¡Hacé clic para ver la invitación y confirmar asistencia!',
    imagen: '/miniatura2.jpg?v=2', // 1200x630
  },
} as const;