export type LoginAPIResponse = AuthentificationFailedError | LoginSuccess;

export type AuthentificationFailedError = {
  success: false;
  error: "AUTHENTIFICATION_FAILED";
};

export interface LoginSuccess {
  success: true;
  response: {
    username: string;
    token: string;
  };
}

export type AuthentificationFailed = {
  success: false;
  error: "AUTHENTIFICATION_FAILED";
};
