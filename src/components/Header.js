import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h2 className="h1">{props.title}</h2>
      <Button
        onClick={props.onAdd}
        style={{ color: "white", backgroundColor: "green" }}
      />
    </header>
  );
};
export default Header;
