import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonData } from "../../app/reducers/getPokemonData";
import PokemonCardGrid from "../../components/PokemonCardGrid";

const Evolution = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { currentPokemon, randomPokemon } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const pkmn = currentPokemon?.evolution.map(({ pokemon }) => pokemon);
      await dispatch(getPokemonData(pkmn!))
      setIsLoaded(true)
    };
    fetchData();
  }, [dispatch, currentPokemon]);

  return <div className="page">
    {
      isLoaded && <PokemonCardGrid pokemon={randomPokemon!} />
    }
  </div>;
};

export default Evolution;
