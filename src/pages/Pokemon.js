import React, { useState, useEffect } from "react";
import PokemonItem from "../components/Pokemon/PokemonItem";
import axios from "axios";

const Pokemon = () => {
  let offset = 0;
  const [pokemons, setPokemon] = useState([]);
  const getpokemondata = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
      .then(({ data }) => {
        const lodedpokemondata = [];
        data.results.forEach((pokemonItem) =>
          lodedpokemondata.push(pokemonItem.name)
        );
        setPokemon((oldloadeddata) => [...oldloadeddata, ...lodedpokemondata]);
      });
    offset += 10;
  };
  const handleScroll = (e) => {
    const scrollingtop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    const height = e.target.documentElement.scrollHeight;

    if (innerHeight + scrollingtop + 1 >= height) {
      getpokemondata();
    }
  };
  useEffect(() => {
    getpokemondata();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return <PokemonItem items={pokemons} />;
};
export default Pokemon;
