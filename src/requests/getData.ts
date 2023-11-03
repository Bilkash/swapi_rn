export const getData = async (page: number) => {
  console.log('!!!');

  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  console.log(response);

  const data = await response.json();
  console.log(data);

  return data;
};
