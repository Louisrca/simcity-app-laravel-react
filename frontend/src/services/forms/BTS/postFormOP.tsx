export const postBTS = async (data: object) => {
  const token = localStorage.getItem("userToken");
  const tokenWithoutQuotes = token?.replace(/^"(.*)"$/, "$1");
  if (token !== null) {
    return await fetch("http://127.0.0.1:8000/api/table/edit-bts-table", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenWithoutQuotes}`,
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  } else {
    throw new Error("Token is null");
  }
};
