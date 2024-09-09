import { SyntheticEvent } from 'react';

class Fruit {
  constructor(public id: number, public name: string) {}
}

interface FruitListProps {
  fruits: Fruit[];
}

interface FruitListItemProps {
  fruit: Fruit;
}

function FruitListItem(props: FruitListItemProps) {
  function handleClick(e: SyntheticEvent, id: number) {
    console.log(e);
    console.log(`removed ${id}`);
  }

  return (
    <li className="list-group-item d-flex gap-4 align-items-center justify-content-between">
      <span className=''>{props.fruit.name}</span>
      <button
        className="btn btn-outline-secondary"
        onClick={(e) => handleClick(e, props.fruit.id)}
      >
        Remove
      </button>
    </li>
  );
}

function FruitListWithDelete(props: FruitListProps) {
  return (
    <ul className='list-group w-50'>
      {props.fruits.map((fruit: any) => (
        <FruitListItem key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
}
export default FruitListWithDelete;
