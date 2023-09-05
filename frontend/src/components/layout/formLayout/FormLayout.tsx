import s from "./FormLayout.module.css";

export const FormLayout = ({ children }: any) => {
  return <div className={s.formLayout}>{children}</div>;
};
