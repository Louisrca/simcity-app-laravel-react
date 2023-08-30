import { IconProps } from "./iconTypes";

export const CircleSyntheseAnalyse = ({
  color,
  ...props
}: IconProps): JSX.Element => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "0.3em" }}
    >
      <svg viewBox="0 0 512 512" fill={color} {...props}>
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
      </svg>
    </div>
  );
};
