const Button = (props) => {
  return (
    <button className="btn" style={props.style} onClick={props.onClick}>
      ADD
    </button>
  );
};
export default Button;
