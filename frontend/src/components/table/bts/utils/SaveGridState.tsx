export const SaveGridState = () => {
// Row functions for saving grid state
  const saveStateGridSortVisibility = (model: any) => {
    const m = model;
    localStorage.setItem("gridStateSort", JSON.stringify(m));
  };
  const saveStateGridFilterVisibility = (model: any) => {
    const m = model;
    localStorage.setItem("gridStateFIlter", JSON.stringify(m));
  };
  const saveStateGridPaginationVisibility = (model: any) => {
    const m = model;
    localStorage.setItem("gridStatePagination", JSON.stringify(m));
  };


  //create object of grid state saved 
  const saveState = [
    {
      gridSort: saveStateGridSortVisibility,
      gridFilter: saveStateGridFilterVisibility,
      gridPagination: saveStateGridPaginationVisibility,
    },
  ];

//   get grid state saved
  const storedSort = localStorage.getItem("gridStateSort");
  const storedFilter = localStorage.getItem("gridStateFIlter");
  const storedPagination = localStorage.getItem("gridStatePagination");

//   create object of grid state stored
  const storedState = [
    {
      storedFilter: storedFilter,
      storedPagination: storedPagination,
      storedSort: storedSort,
    },
  ];

  //   create object of grid state
  const gridState = { saveState, storedState };
  return gridState;
};
