import './index.css';
import CharactersComics from '../../components/Statecomics';

import UW from '../../assets/images/characters/banners/UW.png';
import UW2 from '../../assets/images/characters/banners/UW.png';
import UW3 from '../../assets/images/characters/banners/UW.png';
import UW4 from '../../assets/images/characters/banners/UW.png';
import XMEN from '../../assets/images/characters/banners/x-men.png';
import XMEN2 from '../../assets/images/characters/banners/x-men.png';
import XMEN3 from '../../assets/images/characters/banners/x-men.png';
import XMEN4 from '../../assets/images/characters/banners/x-men.png';

const comicList = [
  {
    image: UW,
    name: 'Daimon Hellstorm',
  },
  {
    image: XMEN,
    name: 'Daimon Hellstorm',
  },
  {
    image: UW2,
    name: 'Daimon Hellstorm',
  },
  {
    image: XMEN2,
    name: 'Daimon Hellstorm',
  },
  {
    image: UW3,
    name: 'Daimon Hellstorm',
  },
  {
    image: XMEN3,
    name: 'Daimon Hellstorm',
  },
  {
    image: UW4,
    name: 'Daimon Hellstorm',
  },
  {
    image: XMEN4,
    name: 'Daimon Hellstorm',
  },
];

export default function Comics(props) {
  return (
    <>
      <div className="header_logo">
        <div className="header_people"></div>
        <div className="header_title">New comics every week! Stay tuned!</div>
        <div className="header_avengers"></div>
      </div>
      <div className="main_list">
        <div className="main_heroes">
          {comicList.map((elem) => (
            <CharactersComics
              photo={elem.image}
              name={elem.name}
              key={elem.name}
            />
          ))}
        </div>
        <div className="main_heroes_description">1..2</div>
        <div className="main_heroes_availabitily">1...3</div>
      </div>

      <div>Footer</div>
    </>
  );
}
