const dataArray = [
  {
    id: '1',
    title: 'Amo',
    photo: 'familia.png',
    span: 'Soy',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente distinctio dolorem, nemo explicabo nesciunt necessitatibus debitis consectetur consequatur itaque quos voluptas laboriosam porro, provident corrupti iste accusantium, unde quae.'
  },
  {
    id: '2',
    title: 'Estilo',
    photo: 'bride.jpg',
    span: 'Soy',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente distinctio dolorem, nemo explicabo nesciunt necessitatibus debitis consectetur consequatur itaque quos voluptas laboriosam porro, provident corrupti iste accusantium, unde quae.'
  },
  {
    id: '3',
    title: 'Transporte',
    photo: 'bici.jpg',
    span: 'Soy',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente distinctio dolorem, nemo explicabo nesciunt necessitatibus debitis consectetur consequatur itaque quos voluptas laboriosam porro, provident corrupti iste accusantium, unde quae.'
  },
  {
    id: '4',
    title: 'Medio Ambiente',
    photo: 'twizy2.jpeg',
    span: 'Soy',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente distinctio dolorem, nemo explicabo nesciunt necessitatibus debitis consectetur consequatur itaque quos voluptas laboriosam porro, provident corrupti iste accusantium, unde quae.'
  }
]
const getData = (id) => dataArray.find(data => data.id === id);

export default getData;
