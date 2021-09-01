import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__character">
        <div className="character__photo"></div>
        <div className="character__description">
          <div className="title">Thor</div>
          <div className="description">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </div>
          <div className="toolbar"></div>
        </div>
      </div>
      <div className="hero__tryit">
        <div className="tryit__title">
          Random character for today! Do you want to get to know him better?
          <br />
          <br />
          Or choose another one
        </div>
        <div className="toolbar"></div>
        <img className="img1" src="" alt="" />
        <img className="img2" src="" alt="" />
      </div>
    </section>
  );
}
