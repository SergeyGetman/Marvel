import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/actionCreators';
import './styles.scss';
import { Link } from 'react-router-dom';

function ExampleTwo() {
  const currentLanguage = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleClick = (e) => dispatch(setLanguage(e.target.id));

  const languages = [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'ru',
      name: 'Russian',
    },
    {
      id: 'fr',
      name: 'French',
    },
  ];

  return (
    <div className="content">
      <Link to="/example-one">Example one</Link>
      <div className="radiobuttons">
        {languages.map((language) => (
          <React.Fragment key={language.id}>
            <input
              type="radio"
              id={language.id}
              onClick={handleClick}
              checked={currentLanguage === language.id}
            />
            <label htmlFor={language.id}>{language.name}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ExampleTwo;
