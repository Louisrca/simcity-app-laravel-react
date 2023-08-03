import { PropsWithChildren } from "react";
import s from "./IconLayout.module.css"

export const IconLayouts = ({ children }: PropsWithChildren) => {
  return <div className={s.iconLayout}>{children}</div>;
};
