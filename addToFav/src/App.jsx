import { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const data = [
    {
      id: 1,
      name: 'Starboy',
      artist: 'The Weeknd',
      img: 'https://ew.com/thmb/5gb2ieo6Wf7L6RUcoG-gV6EpeRY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Weeknd-01-050823-0ac10c81ad0b475b88f51f032ad578f3.jpg',
      added: false,
    },
    {
      id: 2,
      name: 'Lut Putt Gaya',
      artist: 'Arijit Singh',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlGXMpPYA4itZ75Ee495kgyaLeLJXoMcmPUO1fXhuDEQt_0yB',
      added: false,
    },
    {
      id: 3,
      name: 'One Love',
      artist: 'Shubh',
      img: 'https://www.koimoi.com/wp-content/new-galleries/2023/09/shubh-khalistan-controversy-things-you-might-still-be-unaware-about-the-whole-fiasco-from-brands-withdrawing-their-partnership-to-country-tours-getting-cancelled.jpg',
      added: false,
    },
    {
      id: 4,
      name: 'Chikni Chameli',
      artist: 'Shreya Goshal',
      img: 'https://pbs.twimg.com/profile_images/1628297232364736513/STfbQ-o-_400x400.jpg',
      added: false,
    },
    {
      id: 5,
      name: 'Faded',
      artist: 'Alan Walker',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvm0qD-J-cbKNZEzM3OTrDAX4U1QF-04rSfHLi8vi6UQ&s',
      added: false,
    },
    {
      id: 6,
      name: 'Akhiyaan Gulaab',
      artist: 'Mitraz',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ488cW2rStyN4yn0fkGFqwo79g72VDaPaJUna6tWkTQ&s',
      added: false,
    },
    {
      id: 7,
      name: 'Desi Kalakar',
      artist: 'Yo Yo Honey Singh',
      img: 'https://static.india.com/wp-content/uploads/2023/02/Honey-Singh-2.jpg',
      added: false,
    },
    {
      id: 8,
      name: 'Tera Hone Laga Hoon',
      artist: 'Atif Aslam',
      img: 'https://i.pinimg.com/originals/48/b6/b3/48b6b3c9fb83a6ff8bd1204470901789.jpg',
      added: true,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className='w-full h-screen bg-[#192734] text-white'>
        <Navbar data={songData} />
        <div className='w-3/4 m-auto flex gap-8 mt-10 flex-wrap'>
          {songData.map((item, index) => (
            <Card
              item={item}
              key={item.id}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
