// import { IconProps } from "./iconTypes";
type Props = {
  classname: string;
};
export const CellnexTelcomLogo = (props: Props): JSX.Element => {
  return (
    <img
      className={props.classname}
      src="src/common/images/cellnex-telecom-logo.png"
    />
  );
};
