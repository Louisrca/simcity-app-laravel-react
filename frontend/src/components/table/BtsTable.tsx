import { Box } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { WriteIcon } from "../../common/icons/WriteIcon";
import { FormIcon } from "../../common/icons/FormIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getBTS } from "../../services/tables/BTS/getBTS";
import { Button } from "@mui/base";
import { UserActions } from "./utils/UserActions";
export const BtsTable = () => {
  const navigate = useNavigate();
  const [btsData, setBtsData] = useState<any>([]);
  const [rowId, setRowId] = useState<any>();

  useEffect(() => {
    getBTS()
      .then((Btsdata) => {
        setBtsData(Btsdata);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  const rows: GridRowsProp = btsData;
  const columns: GridColDef[] = [
    {
      field: "date_cession",
      headerName: "Date Cession",
      width: 150,
    },
    { field: "code_site", headerName: "Code Site", width: 150 },
    { field: "type_infra", headerName: "Type Infra", width: 150 },
    { field: "prioritaire", headerName: "Prioritaires", width: 150 },
    { field: "gb", headerName: "G.B", width: 150 },
    {
      field: "controle_clnx",
      headerName: "Contrôle CLNX",
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
      headerName: "Loyer Déclaré FM (en €)",
      width: 150,
      editable: true,
    },
    {
      field: "charge_prod_ope",
      headerName: "C.D.P OPE",
      width: 150,
      editable: true,
    },
    {
      field: "charge_prod_sm",
      headerName: "C.D.P SM",
      width: 150,
      editable: true,
    },
    {
      field: "charge_prod_hse",
      headerName: "C.D.P HSE",
      width: 150,
      editable: true,
    },
    {
      field: "part_operation",
      headerName: "Part Opération",
      width: 150,
      editable: true,
    },
    {
      field: "part_patrimoine",
      headerName: "Part Patrimoine",
      width: 150,
      editable: true,
    },
    { field: "part_hse", headerName: "Part HSE", width: 150, editable: true },
    {
      field: "pilote_externe",
      headerName: "Pilote Externe OPE",
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
    { field: "arbitrage", headerName: "Statut", width: 150, editable: true },
    { field: "avis_op", headerName: "Avis OPE", width: 150 },
    { field: "avis_sm", headerName: "Avis SM & GB", width: 150 },
    { field: "avis_hse", headerName: "Avis HSE", width: 150 },
    { field: "synthese", headerName: "Synthèse", width: 150 },
    { field: "levee_de_reserve", headerName: "Levée de Réserves", width: 150 },
    { field: "commentaires_fm", headerName: "Commentaires FM", width: 150 },
    {
      field: "date_acceptation",
      headerName: "Date Acceptation",
      width: 150,
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
            navigate("/profile?" + params.row.code_site);
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
            navigate("/profile?" + params.row.code_site);
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
          // editMode="row"
          onCellEditStop={(params: { id: any }) => setRowId(params.id)}
        />
      </Box>
    </div>
  );
};
