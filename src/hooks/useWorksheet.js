import React, { useContext } from 'react';
import { worksheetContext } from "../context/worksheetContext";

const useWorksheet = () => {
  const {id} = useContext(worksheetContext);

  return {id};

};

export default useWorksheet;
