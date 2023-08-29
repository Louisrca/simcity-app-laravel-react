export const postBTS = async (
  code_site: string,
  controle_clnx: string,
  loyer_declare_fm: string,
  charge_prod_ope: string,
  charge_prod_sm: string,
  charge_prod_hse: string,
  part_operation: string,
  part_patrimoine: string,
  part_hse: string,
  pilote_externe: string,
  pilote_externe2: string,
  arbitrage: string,
  date_acceptation: string
) => {
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
      body: JSON.stringify({
        code_site: code_site,
        controle_clnx: controle_clnx,
        loyer_declare_fm: loyer_declare_fm,
        charge_prod_ope: charge_prod_ope,
        charge_prod_sm: charge_prod_sm,
        charge_prod_hse: charge_prod_hse,
        part_operation: part_operation,
        part_patrimoine: part_patrimoine,
        part_hse: part_hse,
        pilote_externe: pilote_externe,
        pilote_externe2: pilote_externe2,
        arbitrage: arbitrage,
        date_acceptation: date_acceptation,
      }),
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
