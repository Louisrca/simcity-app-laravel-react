import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { PropsWithChildren } from "react";
import s from "./Navbar.module.css";

type Props = {
  title: string;
};

export default function SelectIndicator({
  children,
  title,
}: PropsWithChildren<Props>) {
  return (
    <Select className={s.selectIndicator}
      placeholder={title}
      defaultValue={title}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: "auto",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {children}
    </Select>
  );
}
