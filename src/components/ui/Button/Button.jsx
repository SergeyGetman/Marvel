import './Button.css';

export default function Button(props) {
  const { type, children, className } = props;

  return (
    <>
      <button className={`button ${type} ${className}`}>{children}</button>
    </>
  );
}
