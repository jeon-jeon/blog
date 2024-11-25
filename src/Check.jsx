const Check = (props) => {
  return (
    <div>
      <button
        onClick={props.change}
        style={{ border: "none", backgroundColor: "white" }}
      >
        {props.isCheck ? "✅" : "❌"}
      </button>
      <span style={{ color: "grey" }}>내용</span>
    </div>
  );
};

export default Check;
