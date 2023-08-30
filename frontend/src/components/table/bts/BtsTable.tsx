import { Box } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { HeaderColumnEdit } from "../../../common/icons/HeaderColumnEdit";
import { WriteIcon } from "../../../common/icons/WriteIcon";
import { FormIcon } from "../../../common/icons/FormIcon";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/base";
import { UserActions } from "./utils/UserActions";
import s from "./BtsTable.module.css";
import { handleSetDataTable } from "../../../hooks/handleSetDataTable";

export const BtsTable = () => {
  const navigate = useNavigate();
  const dataTable = handleSetDataTable();

  const [rowId, setRowId] = useState<any>();
  const { btsData, loading } = dataTable;

  const rows: GridRowsProp = btsData;
  const columns: GridColDef[] = [
    {
      field: "date_cession",
      headerName: "Vague",
      width: 150,
    },
    { field: "code_site", headerName: "Code Site", width: 150 },
    { field: "type_infra", headerName: "Type Infra", width: 150 },
    { field: "prioritaire", headerName: "Prioritaires", width: 150 },
    { field: "gb", headerName: "G.B", width: 150 },
    {
      field: "controle_clnx",
      renderHeader: () => (
        <strong>
          {"Contrôle CLNX "}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    { field: "site_bibi", headerName: "Site BIBI", width: 150 },
    { field: "region", headerName: "Region", width: 150 },
    { field: "class_site", headerName: "Classe Site", width: 150 },
    { field: "adresse", headerName: "Adresse", width: 550 },
    { field: "cp", headerName: "C.P", width: 150 },
    { field: "ville", headerName: "Ville", width: 150 },
    {
      field: "loyer_declare_fm",
      renderHeader: () => (
        <strong>
          {"Loyer Déclaré FM (en €)"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 250,
      editable: true,
    },
    {
      field: "charge_prod_ope",
      renderHeader: () => (
        <strong>
          {"C.D.P OPE"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "charge_prod_sm",
      renderHeader: () => (
        <strong>
          {"C.D.P SM"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "charge_prod_hse",
      renderHeader: () => (
        <strong>
          {"C.D.P HSE"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "part_operation",
      renderHeader: () => (
        <strong>
          {"Part Opération"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "part_patrimoine",
      renderHeader: () => (
        <strong>
          {"Part Patrimoine"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "part_hse",
      renderHeader: () => (
        <strong>
          {"Part HSE"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "pilote_externe",
      renderHeader: () => (
        <strong>
          {"Pilote Externe"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    {
      field: "pilote_externe2",
      headerName: "Pilote Externe SM",
      width: 150,
    },
    { field: "pilote_externe3", headerName: "Pilote Externe HSE", width: 150 },

    { field: "etat", headerName: "Etat Analyse", width: 150 },
    {
      field: "arbitrage",
      renderHeader: () => (
        <strong>
          {"Statut"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      width: 150,
      editable: true,
    },
    { field: "avis_op", headerName: "Avis OPE", width: 150 },
    { field: "avis_sm", headerName: "Avis SM & GB", width: 150 },
    { field: "avis_hse", headerName: "Avis HSE", width: 150 },
    { field: "synthese", headerName: "Synthèse", width: 150 },
    { field: "levee_de_reserve", headerName: "Levée de Réserves", width: 150 },
    { field: "commentaires_fm", headerName: "Commentaires FM", width: 150 },
    {
      field: "date_acceptation",
      width: 150,
      renderHeader: () => (
        <strong>
          {"Date Acceptation"}
          <HeaderColumnEdit color="black" />
        </strong>
      ),
      editable: true,
    },
    {
      field: "date_dernier_commentaire",
      headerName: "DERNIER COM. CLNX",
      width: 150,
    },
    {
      field: "date_dernier_commentaire_fm",
      headerName: "DERNIER COM. FM",
      width: 150,
    },
    {
      field: "com_form",
      headerName: "COM",
      width: 150,
      renderCell: (params) => (
        <Button
          color="primary"
          onClick={() => {
            navigate("/portails?id=" + params.row.code_site);
          }}
        >
          <WriteIcon color="#59aa33" />
        </Button>
      ),
    },
    {
      field: "analyse_form",
      headerName: "Analyses",
      width: 150,
      renderCell: (params) => (
        <Button
          color="primary"
          onClick={() => {
            navigate("/portails?id=" + params.row.code_site+"&analyse=operation");
          }}
        >
          <FormIcon color="#59aa33" />
        </Button>
      ),
    },
    {
      field: "enregistrer",
      headerName: "Enregistrer",
      renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />,
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
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10, 25, 50, 100]}
              onCellEditStop={(params: { id: any }) => setRowId(params.id)}
            />
          </Box>
        </div>
      )}
    </>
  );
};
