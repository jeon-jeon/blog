const Input = (props) => {
  return (
    <input
      style={{
        border: "1px solid grey",
        padding: "5px 10px",
        borderRadius: "7px",
        width: "400px",
      }}
      type="text"
      placeholder={props.text}
      onChange={props.change}
    />
  );
};

export default Input;
