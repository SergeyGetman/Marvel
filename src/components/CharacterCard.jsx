import './CharacterCard.css';

export default function CharactersCard(props) {
  return (
    <div className="caracterCard">
      <div
        className="caracterCard__photo"
        style={{ backgroundImage: `url(${props.photo})` }}
      ></div>
      <div className="caracterCard__name">{props.name}</div>
    </div>
  );
}
