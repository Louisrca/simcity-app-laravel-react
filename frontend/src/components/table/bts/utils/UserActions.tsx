
// import s from "../BtsTable.module.css";
import { useState } from "react";
import { postBTS } from "../../../../services/tables/BTS/postBTS";
import { Box, Fab, CircularProgress } from "@mui/material";
import { Check, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";

type ActionProps = {
  params: any;
  rowId: number;
  setRowId: (id: number) => void;
};

export const UserActions = ({ params, rowId, setRowId }: ActionProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log(setRowId);
  const handleSubmit = async () => {
    console.log(params.row.code_site);
    try {
      await postBTS(
        params.row.code_site,
        params.row.controle_clnx,
        params.row.loyer_declare_fm,
        params.row.charge_prod_ope,
        params.row.charge_prod_sm,
        params.row.charge_prod_hse,
        params.row.part_operation,
        params.row.part_patrimoine,
        params.row.part_hse,
        params.row.pilote_externe,
        params.row.pilote_externe2,
        params.row.arbitrage,
        params.row.date_acceptation
      );
      setLoading(true);
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      //   console.error("Une erreur s'est produite :", error);
      setSuccess(false);
    }
  };
  return (
    <Box sx={{ m: 1, position: "relative" }}>
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            "&:hover": { bgcolor: green[700] },
          }}
          onClick={handleSubmit}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{ width: 40, height: 40 }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};
