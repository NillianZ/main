import { QuizQuestion } from '~/types';

const questions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'MULTIPLE_CHOICE',
    text: 'Who would win in a fight?',
    options: [
      {
        id: 'option1',
        image: 'https://preview.redd.it/bombardino-crocodilo-v0-6odt9yqrqgse1.png?width=1080&crop=smart&auto=webp&s=fe8c6f7efe4970c56f66069e286ec987cde155a7',
        text: 'George',
      },
      {
        id: 'option2',
        image: 'https://i.pinimg.com/736x/ad/82/f7/ad82f71f1b37ed0e550568f77948a19f.jpg',
        text: 'Doom Guy',
        correct: true,
      },
      {
        id: 'option3',
        image: 'https://i.pinimg.com/736x/a2/39/14/a239142752c972d167ad9e0b9b5e61bf.jpg',
        text: 'Clarence',
      },
      {
        id: 'option4',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg',
        text: 'the coffee',
      },
    ],
  },
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'I am a student',
    answer: 'As esu studentas',
  },
  {
    id: 'q2',
    type: 'MULTIPLE_CHOICE',
    text: 'where is Waldo?',
    options: [
      {
        id: 'option4',
        image: 'https://www.cutoutsandcollectables.co.uk/wp-content/uploads/2022/04/SC758-Wheres-Waldo-Official-Lifesize-Cardboard-Cutout-Standee-Front.webp',
        text: 'This dude',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://preview.redd.it/probably-a-silly-question-but-is-it-possible-to-play-v0-2trvk3j8f3ra1.jpg?width=640&crop=smart&auto=webp&s=99b28511c394d731f20ccf4272b1789efbdd323c',
        text: 'Overpriced mini',
      },
      {
        id: 'option3',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/league-of-legends/9/96/Sion_lol.jpg',
        text: 'Stinky steve',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673564/Glass_yt1vqc.png',
        text: 'the glass',
      },
    ],
  },
  {
    id: 'q6',
    type: 'OPEN_ENDED',
    text: 'Red is the fastest color',
    answer: 'true',
  },
  {
    id: 'q3',
    type: 'MULTIPLE_CHOICE',
    text: 'Popular Video game character?',
    options: [
      {
        id: 'option3',
        image: 'https://i.redd.it/wnhdkibaxjl31.jpg',
        text: 'Malario',
      },
      {
        id: 'option2',
        image: 'https://i1.sndcdn.com/artworks-000206974145-bij1tn-t500x500.jpg',
        text: 'The Monkey',
      },
      {
        id: 'option4',
        image: 'https://ih1.redbubble.net/image.4370791122.9817/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
        text: 'Hedgehog',
      },
      {
        id: 'option1',
        image: 'https://preview.redd.it/john-helldiver-the-illuminate-vehicles-and-urban-maps-at-v0-utr602bi0j6e1.png?width=640&crop=smart&auto=webp&s=aa7a3da158fda8325e1f3d49b5da21e91e87ab02',
        text: 'Steven',
        correct: true,
      },
    ],
  },
  {
    id: 'q4',
    type: 'MULTIPLE_CHOICE',
    text: 'Kur yra pienas?',
    options: [
      {
        id: 'option2',
        image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg?w=1155&h=1528',
        text: 'Egg',
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673659/Milk_l8xhiv.png',
        text: 'the milk',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://vmajonezas.lt/wp-content/uploads/2024/11/Vilnius-Hero_1941x1579px.png',
        text: 'Milk?',
      },
      {
        id: 'option4',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9TfIFqT5Np6d9CSiJB0QdXnOGE2NPaOXGQ&s',
        text: 'the coffee',
      },
    ],
  },
  {
    id: 'q7',
    type: 'OPEN_ENDED',
    text: 'I enjoy learning languages',
    answer: 'no',
  },
];

export default questions;
