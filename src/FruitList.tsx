function FruitList(props: any) {
  return (
    <ul>
      {props.fruits.map((fruit: any) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
export default FruitList;
