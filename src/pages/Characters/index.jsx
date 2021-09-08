import './index.css';
import HeroBanner from '../../components/HeroBanner';
import CharactersCard from '../../components/CharacterCard';
import Button from '../../components/ui/Button/Button';

import Abyss from '../../assets/images/characters/abyss.jpg';
import Loki from '../../assets/images/characters/loki.jpg';
import AdamWarlock from '../../assets/images/characters/adam_warlock.jpg';
import BoomBoom from '../../assets/images/characters/boom_boom.jpg';
import Calypso from '../../assets/images/characters/calypso.jpg';
import ColleenWing from '../../assets/images/characters/colleen_wing.jpg';
import DaimonHellstorm from '../../assets/images/characters/diamon_hellstorm.jpg';
import DamageControl from '../../assets/images/characters/damage_control.jpg';
import Hulk from '../../assets/images/characters/hulk.jpg';

const charactersList = [
  {
    image: Abyss,
    name: 'Abyss',
  },
  {
    image: Loki,
    name: 'Loki',
  },
  {
    image: AdamWarlock,
    name: 'Adam Warlock',
  },
  {
    image: BoomBoom,
    name: 'Boom Boom',
  },
  {
    image: Calypso,
    name: 'Calypso',
  },
  {
    image: ColleenWing,
    name: 'Colleen Wing',
  },
  {
    image: DaimonHellstorm,
    name: 'Daimon Hellstorm',
  },
  {
    image: DamageControl,
    name: 'Damage Control',
  },
  {
    image: Hulk,
    name: 'Hulk',
  },
];

export default function Characters() {
  return (
    <>
      <HeroBanner />
      <div className="characterList_next">
        <div className="characterList_charactersnext">
          {charactersList.map((character) => (
            <CharactersCard
              name={character.name}
              photo={character.image}
              key={character.name}
            />
          ))}
        </div>
        <div className="characterList_detailnext">bla__bla__bla</div>
      </div>

      <Button className="characterList_but" type="primary">
        My name
      </Button>
      <div className="background-rightdowntwo"></div>
    </>
  );
}
