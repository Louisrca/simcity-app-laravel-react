import { WidthFull } from "@mui/icons-material";
import s from "../FormAnalyseOperation.module.css";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const FormAudit = () => {
  const [age, setAge] = useState<string | undefined>();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className={s.formAuditSection}>
      <div className={s.title}>
        <h4>Audit</h4>
      </div>
      <div className={s.formInputsSection}>
        <div className={s.inputContent}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              width: "auto",
            }}
          >
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};
