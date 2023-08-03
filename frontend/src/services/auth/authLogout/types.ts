export type LogOutAPIResponse = LougOutFailedError | LogOutSuccess;

export type LougOutFailedError = {
  success: false;
  error: "LOGOUT_FAILED";
};

export interface LogOutSuccess {
  success: true;
  response: {
    username: string;
    token: string;
  };
}

export type LougOutFailed = {
  success: false;
  error: "LOGOUT_FAILED";
};
