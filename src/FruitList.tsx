class Fruit {
  constructor(public id: number, public name: string) {}
}

interface FruitListProps {
  fruits: Fruit[];
}

function FruitList(props: FruitListProps) {
  return (
    <ul>
      {props.fruits.map((fruit: any) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
export default FruitList;
