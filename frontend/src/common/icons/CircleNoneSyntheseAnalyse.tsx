import { IconProps } from "./iconTypes";

export const CircleNoneSyntheseAnalyse = ({
  color,
  ...props
}: IconProps): JSX.Element => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "0.3em" }}
    >
      <svg viewBox="0 0 512 512" fill={color} {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
      </svg>
    </div>
  );
};
