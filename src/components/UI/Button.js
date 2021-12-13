import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.buttonType} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
