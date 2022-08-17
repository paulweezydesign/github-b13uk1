let IMAGES = [
  {
    id: 0,
    title: 'Filaberta',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 1,
    title: 'Garfield',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 2,
    title: 'Pancake',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 3,
    title: 'Bean',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 4,
    title: 'Baby Garfield',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 5,
    title: 'Rocket',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 6,
    title: 'Little Baby Sunshine',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 7,
    title: 'Baby Bean',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 8,
    title: 'Baby Bean jr',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 9,
    title:  'Fat Head',
    src: 'http://placekitten.com/g/300/450'
  },
  {
    id: 10,
    title: 'Mean Kitty',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 11,
    title: 'Nice Kitty',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 12,
    title: 'Filaberta Baby 1',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 13,
    title: 'Filaberta Baby numero dose',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 14,
    title:  'Fluffy Babby #1',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 15,
    title: 'Fluffy Baby #2',
    src: 'http://placekitten.com/g/300/450',
  },
  {
    id: 16,
    title: 'Babv Bean # 4 and 5',
    src: 'http://placekitten.com/g/300/450',
  },
];

function getImageById(id: number) {
  return IMAGES.find((image) => image.id === id);
}

export { IMAGES, getImageById };
