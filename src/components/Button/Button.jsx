const Button = ({ text, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};
export default Button;
