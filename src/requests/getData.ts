export const getDataFromSWAPI = async (page: number) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();

  return data;
};
