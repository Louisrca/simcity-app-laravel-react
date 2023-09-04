import { AuthentificationFailed } from "./types";
// import Cookies from "js-cookie";
export const postLogin = async (
  csrfToken: string,
  email: string,
  password: string
): Promise<any> => {
  await fetch("simcity-app-laravel-react-5ard.vercel.app/api/user/login", {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",

      "X-CSRF-Token": csrfToken,
    }),
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response: Response): AuthentificationFailed | Promise<unknown> => {
    if (response.status === 401) {
      return { success: false, error: "AUTHENTIFICATION_FAILED" };
    }
    if (!response.ok) {
      throw new Error(
        `Upstream HTTP error: ${response.status} ${response.statusText}`
      );
    }
    return response.json().then((data) => {
      if (data.token) {
        localStorage.setItem("userToken", JSON.stringify(data.token));
        // Cookies.set("access_token", data.token, { httpOnly: true });
      }
      // localStorage.setItem("userToken", JSON.stringify(data.token));
    });
  });
};
