import './index.css';
import HeroBanner from '../../components/HeroBanner';
import CharactersCard from '../../components/CharacterCard';
import Button from '../../components/ui/Button/Button';

import { HTTPRequest } from '../../api';
import { useEffect, useState } from 'react';

// import Abyss from '../../assets/images/characters/abyss.jpg';
// import Loki from '../../assets/images/characters/loki.jpg';
// import AdamWarlock from '../../assets/images/characters/adam_warlock.jpg';
// import BoomBoom from '../../assets/images/characters/boom_boom.jpg';
// import Calypso from '../../assets/images/characters/calypso.jpg';
// import ColleenWing from '../../assets/images/characters/colleen_wing.jpg';
// import DaimonHellstorm from '../../assets/images/characters/diamon_hellstorm.jpg';
// import DamageControl from '../../assets/images/characters/damage_control.jpg';
// import Hulk from '../../assets/images/characters/hulk.jpg';

// const charactersList = [
//   {
//     image: Abyss,
//     name: 'Abyss',
//   },
//   {
//     image: Loki,
//     name: 'Loki',
//   },
//   {
//     image: AdamWarlock,
//     name: 'Adam Warlock',
//   },
//   {
//     image: BoomBoom,
//     name: 'Boom Boom',
//   },
//   {
//     image: Calypso,
//     name: 'Calypso',
//   },
//   {
//     image: ColleenWing,
//     name: 'Colleen Wing',
//   },
//   {
//     image: DaimonHellstorm,
//     name: 'Daimon Hellstorm',
//   },
//   {
//     image: DamageControl,
//     name: 'Damage Control',
//   },
//   {
//     image: Hulk,
//     name: 'Hulk',
//   },
// ];

const getCharacters = () =>
  HTTPRequest({
    method: 'GET',
    url: '/v1/public/characters',
  });

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(({ data }) => {
      setCharacters(
        data.results.map((character) => {
          return {
            name: character.name,
            image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          };
        }),
      );
    });
  }, [setCharacters]);
  return (
    <>
      <HeroBanner />
      <div className="characterList">
        <div className="characterList_wraper">
          <div className="characterList_characters">
            {characters.map((character) => (
              <CharactersCard
                name={character.name}
                photo={character.image}
                key={character.name}
              />
            ))}
          </div>
        </div>
        <div className="characterList_detail">
          <div className="caracterDetail_two">
            <div className="block_inside">
              <div className="caracterDetail_title">
                Please select a character to see information
              </div>
              <div className="caracterDetail_skeleton_circle"></div>

              <div className="caracterDetail_skeleton_rectangle_circle"></div>
              <div className="caracterDetail_skeleton">
                <div className="caracterDetail_skeleton_rectangle"></div>
                <div className="caracterDetail_skeleton_rectangle"></div>
                <div className="caracterDetail_skeleton_rectangle"></div>
              </div>
              <div className="background-rightdowntwo"></div>
            </div>
          </div>
        </div>
      </div>

      <Button className="characterList_but" type="primary">
        My name
      </Button>
    </>
  );
}
