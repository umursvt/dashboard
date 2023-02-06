import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSourse';
import './dataTable.scss';

const Database = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Database;
