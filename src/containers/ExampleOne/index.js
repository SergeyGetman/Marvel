import React from 'react'
import { connect } from "react-redux";
import { setLanguage } from "../../redux/actionCreators";
import {Link} from "react-router-dom";

function ExampleOne(props) {
  // const currentLanguage = props.currentLanguage
  // const setLanguage = props.setLanguage
  const { currentLanguage, setLanguage } = props

  const handleClick = (e) => setLanguage(e.target.id)

  const languages = [
    {
      id: 'en',
      name: 'English'
    },
    {
      id: 'ru',
      name: 'Russian'
    },
    {
      id: 'fr',
      name: 'French'
    },
  ]

  return (
    <div>
      <Link to="/example-two">Example two</Link>
      <div>
        {languages.map(language => (
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

// connect data from redux state to App
const mapStateToProps = state => ({
  currentLanguage: state.language
})

// connect action creators to App
const mapDispatchToProps = {
  setLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleOne);
