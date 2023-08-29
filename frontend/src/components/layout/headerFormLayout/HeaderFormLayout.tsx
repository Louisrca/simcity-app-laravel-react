import { PropsWithChildren } from "react";
import s from "./HeaderFormLayout.module.css";

export const HeaderFormLayout = ({ children }: PropsWithChildren) => {
  return <div className={s.headerFormLayout}>{children}</div>;
};
