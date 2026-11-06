// =========================================================
// DATOS DE LA BODA
// Todo lo que cambia de una boda a otra vive acá.
// Los valores marcados con TODO son de ejemplo: reemplazalos.
// =========================================================

const novio = 'Gabriel';
const novia = 'Maribel';

export const boda = {
  novios: { novio, novia },

  // Fecha y hora de la ceremonia (la usa la cuenta regresiva).
  // Formato ISO con zona horaria de Argentina (-03:00).
  fecha: {
    iso: '2027-01-08T20:00:00-03:00',
    texto: 'Viernes 8 de Enero',
  },


  ceremonia: {
    lugar: 'Predio de familia Yucra', // TODO
    localidad: 'En frente del circuito Matheu', // TODO
    hora: '20:00',
    mapa: 'https://maps.app.goo.gl/XXXXXXXX', // TODO
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
      novia: 'Jorge Olivera\ny\nCristina Choque', // TODO
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
    pareja: '/Foto12.jpg', // foto de la portada (vertical, proporción 7:10)
    lugar: '/LugarEjemplo.jpg',
  },

  // Archivos dentro de /public
  musica: '/Musica.mp3',

  // Textos de pestaña y vista previa de WhatsApp
  meta: {
    titulo: `Nuestra Boda - ${novio} & ${novia}`,
    tituloCompartir: `¡Nos Casamos! - ${novio} & ${novia}`,
    descripcion:
      'Estás invitado a celebrar este momento tan especial con nosotros. ¡Hacé clic para ver la invitación y confirmar asistencia!',
    imagen: '/miniatura.jpg', // 1200x630
  },
} as const;