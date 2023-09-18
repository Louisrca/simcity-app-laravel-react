export const getFormOP = async (codeSite: string) => {
  const token = localStorage.getItem("userToken");
  const tokenWithoutQuotes = token?.replace(/^"(.*)"$/, "$1");
  if (token !== null) {
    return fetch("http://127.0.0.1:8000/api/form/show-by-id/" + codeSite, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenWithoutQuotes}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // console.log(response.json());
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
};
