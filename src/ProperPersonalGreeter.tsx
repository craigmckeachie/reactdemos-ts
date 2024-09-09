interface ProperPersonalGreeterProps {
  first: string;
  last: string;
}

function ProperPersonalGreeter(props: ProperPersonalGreeterProps) {
  return (
    <div>
      Hi {props.first} {props.last}
    </div>
  );
}
export default ProperPersonalGreeter;
