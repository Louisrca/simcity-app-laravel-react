import { PropsWithChildren } from "react";
import s from "./AuthLayouts.module.css";
export const AuthLayouts = ({ children }: PropsWithChildren) => {
  return <div className={s.layout}>{children}</div>;
};
