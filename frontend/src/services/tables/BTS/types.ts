import { UnauthorizedResponse } from "../../../utils/types";

export type Bts = {
  id: string;
  name: string;
};

export type FetchAllRoomsSuccess = {
  success: true;
  response: Bts[];
};

export type RoomsAPIResponse = UnauthorizedResponse | FetchAllRoomsSuccess;
