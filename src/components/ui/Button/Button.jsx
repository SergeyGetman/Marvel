import './Button.css';

export default function Button(props) {

  return (
    <>
      <button className={`button ${props.type}`}>{props.children}</button>
    </>
  );
}
