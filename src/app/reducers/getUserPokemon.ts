import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getDocs, query, where } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";
import { userPokemonType } from "../../utils/Types";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/getPokemonTypes";

export const getUserPokemons = createAsyncThunk(
  "pokemon/userList",
  async (args, { getState }) => {
    try {
      const {
        app: { userInfo },
      } = getState() as RootState;
      if (!userInfo?.email) {
        return;
      }
      const firestoreQuery = query(
        pokemonListRef,
        where("email", "==", userInfo.email)
      );
      const fetchedPokemon = await getDocs(firestoreQuery);
      if (fetchedPokemon.docs.length) {
        const userPokemon: userPokemonType[] = [];
        fetchedPokemon.forEach(async (pokemon) => {
          const pkmn = await pokemon.data().pokemon;
          //@ts-ignore
          let image = images[pkmn.id];
          if (!image) {
            //@ts-ignore
            image = defaultImages[pkmn.id];
          }
          const types = pkmn.types.map((name: string) => ({
            //@ts-ignore
            [name]: pokemonTypes[name],
          }));

          userPokemon.push({
            ...pkmn,
            firebaseId: pokemon.id,
            image,
            types,
          });
        });
        return userPokemon;
      }
      return [];
    } catch (error) {
      console.error(error);
    }
  }
);
