const Password = () => {
  // const [first, setFirst] = useState("");
  // const [second, setSecond] = useState("");

  // const changeFirst = (e) => {
  //   setFirst((prev) => e.target.value);
  // };
  // const changeSecond = (e) => {
  //   setSecond((prev) => e.target.value);
  // };

  const [inputText, setInputText] = useState(["", ""]);

  const changeFirst = (e) => {
    setInputText((prev) => {
      const newArr = [...prev];
      newArr[0] = e.target.value;
      return newArr;
    });
  };
  const changeSecond = (e) => {
    setInputText((prev) => {
      const newArr = [...prev];
      newArr[1] = e.target.value;
      return newArr;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Input text="비밀번호 입력" change={changeFirst} />
      <Input text="비밀번호 확인" change={changeSecond} />
      <button
        style={{
          padding: "30px",
          width: "fit-content",
          backgroundColor: inputText[0] == inputText[1] ? "green" : "red",
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Password;
