import { useEffect, useState } from "react";

const useRandomJoke = (firstName, lastName) => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    (async () => {
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => setJoke(data.value.joke))
        .catch((err) => console.log(err));
    })();
  }, [firstName, lastName]);
  return joke;
};

export default useRandomJoke;
