import Cookies from "js-cookie";
export const postLogout = async (): Promise<any> => {
  await fetch("http://127.0.0.1:8000/api/user/logout", {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    }),
  })
    .then(() => {
      return console.log("LOGOUT_SUCCESSFUL");
    })
    .catch((error) => {
      console.log("LOGOUT_FAILURE", error);
    })
    .then(() => {
      // localStorage.removeItem("userToken");
      // localStorage.removeItem("userPersonalData");
      // localStorage.removeItem("btsData");

      localStorage.clear();
      Cookies.remove("user");
      Cookies.remove("access_token");
      window.location.reload();
    });
};
