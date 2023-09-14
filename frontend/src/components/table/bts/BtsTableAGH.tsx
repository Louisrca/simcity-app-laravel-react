import { Box } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import s from "./BtsTable.module.css";
import { FormIcon } from "../../../common/icons/FormIcon";
import { useNavigate } from "react-router";
import { handleSetDataTable } from "../../../hooks/handleSetDataTable";
import { Button } from "@mui/base";
import { SaveGridState } from "./utils/SaveGridState";

export const BtsTableAGH = () => {
  const navigate = useNavigate();
  const dataTable = handleSetDataTable();
  const { btsData, loading } = dataTable;

  // SaveGridState hook
  const gridState = SaveGridState();
  // Destructuring gridState hook
  const { saveState, storedState } = gridState;

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
    { field: "ville", headerName: "Ville", width: 150 },
    { field: "cp", headerName: "CP", width: 150 },
    { field: "classe_site", headerName: "Classe Site", width: 150 },
    { field: "type_infra", headerName: "Type Infra", width: 150 },
    { field: "prioritaire", headerName: "Prioritaires", width: 150 },
    {
      field: "loyer_declare_fm",
      headerName: "Loyer Déclarée (€)",
      width: 150,
      renderCell: (params) => <p>{params.row.loyer_declare_fm} €</p>,
    },

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
      field: "analyse_form",
      headerName: "Analyses",
      width: 150,
      renderCell: (params) => (
        <Button
          color="primary"
          onClick={() => {
            navigate(
              "/portails?id=" + params.row.code_site + "&analyse=operation"
            );
          }}
        >
          <FormIcon color="#59aa33" />
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
                pagination: {
                  paginationModel: storedState[0].storedPagination
                    ? JSON.parse(storedState[0].storedPagination)
                    : { pageSize: 5 },
                },
                sorting: {
                  sortModel: storedState[0].storedSort
                    ? JSON.parse(storedState[0].storedSort)
                    : null,
                },
                filter: {
                  filterModel: storedState[0].storedFilter
                    ? JSON.parse(storedState[0].storedFilter)
                    : null,
                },
              }}
              pageSizeOptions={[5, 10, 25, 50, 100]}
              onFilterModelChange={saveState[0].gridFilter}
              onSortModelChange={saveState[0].gridSort}
              onPaginationModelChange={saveState[0].gridPagination}
            />
          </Box>
        </div>
      )}
    </>
  );
};
