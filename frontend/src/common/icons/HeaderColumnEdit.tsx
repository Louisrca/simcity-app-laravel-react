import { IconProps } from "./iconTypes";

export const HeaderColumnEdit = ({
  color,
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      height="12px"
      version="1.1"
      viewBox="0 0 18 18"
      width="12px"
      fill={color}
      {...props}
    >
      <title />
      <desc />
      <defs />
      <g fill="none" id="Page-1" stroke="none">
        <g
          fill="#000000"
          id="Core"
          transform="translate(-213.000000, -129.000000)"
        >
          <g id="create" transform="translate(213.000000, 129.000000)">
            <path
              d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
