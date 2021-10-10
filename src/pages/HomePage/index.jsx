import HeroBanner from '../../components/HeroBanner';
import CharactersCard from '../../components/CharacterCard';
import CharacterDetail from '../../components/CharacterDetail';
import Button from '../../components/ui/Button/Button';

import './HomePage.css';
import { HTTPRequest } from '../../api';
import { useEffect, useState } from 'react';

const getCharacters = () =>
  HTTPRequest({
    method: 'GET',
    url: '/v1/public/characters',
  });

export default function HomePage(props) {
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
