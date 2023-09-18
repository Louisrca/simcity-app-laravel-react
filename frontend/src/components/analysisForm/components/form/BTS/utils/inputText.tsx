// import { PropsWithChildren } from "react";
import s from "../FormAnalyse.module.css";

type InputTextProps = {
  title: string;
  placeholder: string;
  name: string;
  type: string;
  handleFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText = (props: InputTextProps) => {
  return (
    <div className={s.selectorForm}>
      <label htmlFor={props.title}>
        {props.title} <span className={s.asterisk}>*</span>
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.handleFunction}
      />
    </div>
  );
};
