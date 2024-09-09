function ClickMeButton() {
  function handleClick() {
    alert('clicked');
  }
  return <button onClick={handleClick}>Click Me!</button>;
}
export default ClickMeButton;
