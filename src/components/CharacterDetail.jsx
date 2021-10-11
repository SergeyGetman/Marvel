import './CharacterDetail.css';
import CharacterInfo from '../components/CharacterInfo';

const informComics = [
  { text: 'All-Winners Squad: Band of Heroes (2011) #3' },
  { text: 'Alpha Flight (1983) #50' },
  { text: 'Amazing Spider-Man (1999) #503' },
  { text: 'Amazing Spider-Man (1999) #504' },
  { text: 'AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)' },
  { text: 'Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)' },
  {
    text:
      'Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)',
  },
  { text: 'Vengeance (2011) #4' },
  { text: 'Avengers (1963) #1' },
  { text: 'Avengers (1996) #1' },
];

export default function CharacterDetail(props) {
  return (
    <div className="caracterDetail">
      <div className="caracterDetail__header">
        <div className="caracterDetail__avatar"></div>
        <div className="caracterDetail__info">
          <div className="caracterDetail__name">LOKI </div>

          <button className="button__type">HOMEPAGE</button>
          <button className="button__type">WIKI</button>
        </div>
      </div>
      <div className="caracterDetail__text">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the
      </div>
      <div className="caracterDetail__title">COMICS</div>

      <div className="caracterDetail__comicslist">
        {informComics.map((elem, index) => (
          <CharacterInfo text={elem.text} key={index} />
        ))}
      </div>

      <div className="caracterDetail__comicslist">
        <CharacterInfo />
      </div>

      <div className="background-rightdown"></div>
    </div>
  );
}
