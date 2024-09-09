function PersonalGreeter() {
  const person = { first: 'Jane', last: 'Doe' };
  return (
    <div>
      Hi {person.first} {person.last}
    </div>
  );
}
export default PersonalGreeter;
