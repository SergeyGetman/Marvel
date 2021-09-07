import HeroBanner from '../../components/HeroBanner';
import CharactersCard from '../../components/CharacterCard';
import CharacterDetail from '../../components/CharacterDetail';
import Button from '../../components/ui/Button/Button';

import Abyss from '../../assets/images/characters/abyss.jpg';
import AdamWarlock from '../../assets/images/characters/adam_warlock.jpg';
import BoomBoom from '../../assets/images/characters/boom_boom.jpg';
import Calypso from '../../assets/images/characters/calypso.jpg';
import ColleenWing from '../../assets/images/characters/colleen_wing.jpg';
import DaimonHellstorm from '../../assets/images/characters/diamon_hellstorm.jpg';
import DamageControl from '../../assets/images/characters/damage_control.jpg';
import Hulk from '../../assets/images/characters/hulk.jpg';
import Loki from '../../assets/images/characters/loki.jpg';

import './HomePage.css';

const characters = [
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

export default function HomePage(props) {
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

          <Button className="characterList_but" type="primary">
            My name
          </Button>
        </div>
        <div className="characterList_detail">
          <CharacterDetail />
        </div>
      </div>
    </>
  );
}
