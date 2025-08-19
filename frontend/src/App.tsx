import Button from "./components/atoms/Button/Button";

function App() {
  const handleClick = () => alert("Clicked");

  return (
    <Button label="Press Me" color="secondary" onClick={handleClick} />
  );
}

export default App;
