import React from 'react';
import './styles.scss';

const FirstPage = () => {
  return (
    <div className="page-one">
      <div className="header">
        <div className="title">
          <div className="tittle-one">
            <span className="marvel"> Marvel </span> information portal
          </div>

          <div className="title-two">Characters / Comics</div>
        </div>
      </div>

      <div className="header-logo">
        <div className="header-logo-tor">
          <div className="image-logo">
            <p className="name-TOR">
              THOR <br />
              <div className="text-bottom-tor">
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </div>
              <button>homepage</button>
              <button>wiki</button>
            </p>

            <div className="header-logo-invent"></div>
          </div>
        </div>
      </div>
      <div className="header-logo-right">
        <div className="text-inside">
          Random character for today!
          <br />
          Do you want to get to know him better? <br />
          <br />
          Or choose another one
        </div>
        <div className="images-logo">
          <div className="molt"></div>
          <div className="shield"></div>
        </div>
        <button className="but-right">try it</button>
      </div>

      <div className="sidebar"></div>
    </div>
  );
};

export default FirstPage;
