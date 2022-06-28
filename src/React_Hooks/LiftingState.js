import React, { useState } from "react";

const LiftingState = () => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  const Display = ({ name, animal }) => {
    return <span>{`Hey ${name}, Your favourite animal is ${animal}`}</span>;
  };
  return (
    <div>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavouriteAnimal
        animal={animal}
        onAnimalChange={(event) => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </div>
  );
};
const FavouriteAnimal = ({ animal, onAnimalChange }) => {
  return (
    <React.Fragment>
      <label htmlFor="animal">Favourite Animal</label>
      <input
        type="text"
        value={animal}
        placeholder="Enter your favourite animal!"
        onChange={onAnimalChange}
      />
    </React.Fragment>
  );
};
const Name = ({ name, onNameChange }) => {
  return (
    <React.Fragment>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name!"
        onChange={onNameChange}
      />
    </React.Fragment>
  );
};

export default LiftingState;
