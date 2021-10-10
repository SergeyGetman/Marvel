import './Button.css';

export default function Button(props) {
  const { type, children, ...other } = props;
  return (
    <>
      <button className={`button ${type}`} {...other}>
        {children}
      </button>
    </>
  );
}
