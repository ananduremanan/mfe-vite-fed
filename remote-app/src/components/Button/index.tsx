export default function Button() {
  const handleOnClick = () => {
    console.log("Remote Button Pressed");
  };
  return (
    <div>
      <button onClick={handleOnClick}>Hello I'm a Button from Remote</button>
    </div>
  );
}
