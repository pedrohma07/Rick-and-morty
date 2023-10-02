import React, { useState, useEffect } from "react";
import CardCharacter from "../../components/CardCharacter";
import style from "./style.module.scss";

interface Character {
  id: number
  name: string
  specie: string
  status: string
  gender: string
  image: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
}

const Index = () => {
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [filter, setFilter] = useState(1);

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${filter}`;
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();
        console.log(data);
        
        if (filter !== 1) {
          setCharacterData((prevData) => [...prevData, ...data.results]);
        }else{
          setCharacterData(data.results);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
      }
    }

    fetchData();
  }, [filter]);

  return (
    <div className={style.container}>
      {characterData.map((character) => (
        <CardCharacter
          key={character.id}
          name={character.name}
          specie={character.specie}
          image={character.image}
          status={character.status}
          gender={character.gender}
          location={{ name: character.location.name }}
          origin={{ name: character.origin.name }}
        />
      ))}
      <button onClick={() => setFilter(filter + 1)}>mais</button>
    </div>
  );
};

export default Index;
