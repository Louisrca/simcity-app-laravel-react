export const getBTS = async () => {
  const token = localStorage.getItem("userToken");
  return await fetch("http://127.0.0.1:8000/api/table/all-bts", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //   Authorization: "Bearer " + token,
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((btsData) => {
      return btsData;
    })
    .catch((error) => {
      throw error;
    });
};
