import './index.css';
import CharactersComics from '../../components/Statecomics';
import Button from '../../components/ui/Button/Button';

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
    name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
    price: "9.99$"
  },
  {
    image: XMEN,
    name: 'X-Men: Days of Future Past',
    price: "NOT AVAILABLE"
  },
  {
    image: UW2,
    name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
    price: "9.99$"
  },
  {
    image: XMEN2,
    name: 'X-Men: Days of Future Past',
    price: "NOT AVAILABLE"
  },
  {
    image: UW3,
    name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
    price: "9.99$"
  },
  {
    image: XMEN3,
    name: 'X-Men: Days of Future Past',
    price:  "NOT AVAILABLE"
  },
  {
    image: UW4,
    name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
    price: "9.99$"
  },
  {
    image: XMEN4,
    name: 'X-Men: Days of Future Past',
    price:  "NOT AVAILABLE"
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
              price={elem.price}
            />
          ))}
        </div>
        <Button type="primary" className="but_comics">Load More</Button>
        {/* <div className="main_heroes_description">1..2</div>
        <div className="main_heroes_availabitily">1...3</div> */}
      </div>

      {/* <div>Footer</div> */}
    </>
  );
}
