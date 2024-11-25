const Test = () => {
  const [num, setNum] = useState(0);
  const [isPass, setIsPass] = useState(false);

  const change = (e) => {
    setNum(e.target.value.length);

    const over4under12 =
      e.target.value.length >= 4 && e.target.value.length <= 12;

    const hasSpecial = ["!", "@", "#"].some((v) => e.target.value.includes(v));
    // e.target.value.includes("!") ||
    // e.target.value.includes("@") ||
    // e.target.value.includes("#");

    if (!over4under12) {
      setIsPass((prev) => false);
    } else if (!hasSpecial) {
      setIsPass((prev) => false);
    } else {
      setIsPass((prev) => true);
    }
  };
  return (
    <div>
      <input onChange={change} type="text" />
      <span>{num}</span>
      <span>{isPass ? "통과" : "오류"}</span>
    </div>
  );
};

export default Test;
