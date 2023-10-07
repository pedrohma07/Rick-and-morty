export const fetchCharacterData = async () => {
  const apiUrl = "https://rickandmortyapi.com/api/character/2";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }
    const data = await response.json();
    console.log(data);
    
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};