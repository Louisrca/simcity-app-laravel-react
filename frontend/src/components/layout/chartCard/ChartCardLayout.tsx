import { PropsWithChildren } from "react";
import s from "./ChartCardLayout.module.css";
export const ChartCardLayout = ({ children }: PropsWithChildren) => {
  return <div className={s.chartCardLayout}>{children}</div>;
};
