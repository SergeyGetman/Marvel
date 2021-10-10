import './Button.css';

export default function Button(props) {
  const { type, children, className, url } = props;

  return (
    <>
      <button className={`button ${type} ${className} ${url}`}>
        {children}
      </button>
    </>
  );
}
