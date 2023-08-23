import { Box } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import s from "./BtsTable.module.css";
import { WriteIcon } from "../../../common/icons/WriteIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getBTS } from "../../../services/tables/BTS/getBTS";
import { Button } from "@mui/base";
export const BtsTableFM = () => {
  const navigate = useNavigate();
  const [btsData, setBtsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getBTS()
      .then((Btsdata) => {
        setBtsData(Btsdata);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  const rows: GridRowsProp = btsData;
  const columns: GridColDef[] = [
    {
      field: "date_cession",
      headerName: "Vague",
      width: 150,
    },
    { field: "code_site", headerName: "Code Site", width: 150 },

    {
      field: "controle_clnx",
      headerName: "Contrôle CLNX",
      width: 150,
    },
    { field: "prioritaire", headerName: "Prioritaires", width: 150 },

    { field: "etat", headerName: "Etat Analyse", width: 150 },
    {
      field: "arbitrage",
      headerName: "Statut",
      width: 150,
    },
    { field: "avis_op", headerName: "Avis OPE", width: 150 },
    { field: "avis_sm", headerName: "Avis SM & GB", width: 150 },
    { field: "avis_hse", headerName: "Avis HSE", width: 150 },
    { field: "synthese", headerName: "Synthèse", width: 150 },
    {
      field: "date_dernier_commentaire",
      headerName: "DERNIER COM. CLNX",
      width: 200,
    },
    {
      field: "date_dernier_commentaire_fm",
      headerName: "DERNIER COM. FM",
      width: 200,
    },
    {
      field: "com_form",
      headerName: "COM",
      width: 150,
      renderCell: (params) => (
        <Button
          color="primary"
          onClick={() => {
            navigate("/profile?" + params.row.code_site);
          }}
        >
          <WriteIcon color="#59aa33" />
        </Button>
      ),
    },
  ];

  return (
    <>
      {loading ? (
        <div className={s.preloader}>
          <img
            src="./src/common/images/loading_gif.gif"
            alt="loader"
            className={s.preloaderGif}
          ></img>
          <p className={s.preloaderMessage}>Chargement en cours...</p>
        </div>
      ) : (
        <div style={{ height: 480, maxHeight: 500, width: "100%" }}>
          <Box>
            <DataGrid
              localeText={{
                toolbarDensity: "Taille",
                toolbarDensityCompact: "Petit",
                toolbarDensityStandard: "Moyen",
                toolbarDensityComfortable: "Grand",
                toolbarFilters: "Filtres",
                toolbarFiltersLabel: "Filtres",
                toolbarColumns: "Colonnes",
              }}
              rows={rows}
              checkboxSelection
              disableRowSelectionOnClick
              {...rows}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
                filterPanel: {
                  disableAddFilterButton: true,
                  disableRemoveAllButton: true,
                },
              }}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10, 25, 50, 100]}
              // onCellEditStop={(params: { id: any }) => setRowId(params.id)}
            />
          </Box>
        </div>
      )}
    </>
  );
};
