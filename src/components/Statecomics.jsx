import './Statecomics.css';

export default function CharactersComics(props) {
  return (
    <div className="caracter_comics">
      <div
        className="caractercomics_photo"
        style={{ backgroundImage: `url(${props.photo})` }}
      ></div>
      <div className="caractercomics_name">{props.name}</div>
      <div className="caracterCard_price">{props.price}</div>
    </div>
  );
}
