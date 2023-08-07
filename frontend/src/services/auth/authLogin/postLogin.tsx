import { AuthentificationFailed } from "./types";
import Cookies from "js-cookie";
export const postLogin = async (
  csrfToken: string,
  email: string,
  password: string,
  rememberMe: boolean
): Promise<any> => {
  await fetch("http://127.0.0.1:8000/api/user/login", {
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
      remember_me: rememberMe,
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
      const userPersonalData = [
        {
          firstname: data.user.firstname,
          lastname: data.user.lastname,
          pseudo: data.user.pseudo,
          email: data.user.email,
          role: data.user.role,
          tags: data.user.tags,
          status: data.user.status,
        },
      ];
      // Cookies.set("user", "token : " + data.token, { expires: 7 });
      localStorage.setItem("userToken", JSON.stringify(data.token));
      localStorage.setItem(
        "userPersonalData",
        JSON.stringify(userPersonalData)
      );
    });
  });
};
