import s from "../FormAnalyse.module.css";

type InputSelectorProps = {
  title: string;
  name: string;
  isBloquant: string;
  handleFunction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  isRequired: boolean;
};

export const InputSelector = ({ children, ...props }: InputSelectorProps) => {
  return (
    <div className={s.selectorForm}>
      <label htmlFor={props.title} className={props.isBloquant}>
        {props.title} <span className={s.asterisk}>*</span>
      </label>
      <select
        name={props.name}
        onChange={props.handleFunction}
        required={props.isRequired}
      >
        {children}
      </select>
    </div>
  );
};
