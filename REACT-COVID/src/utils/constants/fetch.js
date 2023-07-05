export const fetchData = async (url) => {
  const data = await fetch(url, {
    method: "GET",
  });

  return data.json();
};
