export const getChartBTS = async () => {
  const token = localStorage.getItem("userToken");
  const tokenWithoutQuotes = token?.replace(/^"(.*)"$/, "$1");
  if (token !== null) {
    return await fetch("http://127.0.0.1:8000/api/chart/chart-bts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${tokenWithoutQuotes}`,
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
  } else {
    throw new Error("Token is null");
  }
};
