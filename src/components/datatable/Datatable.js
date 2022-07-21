import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './datatable.scss';

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [page, setPage] = useState('');

  const currentURL = useLocation().pathname;

  useEffect(() => {
    if (currentURL === '/users') {
      setPage(currentURL);
    }

    if (currentURL === '/products') {
      setPage(currentURL);
    }
  }, [page, currentURL]);

  const deleteHandler = id => {
    setData(data.filter(item => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">view</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteHandler(params.row.id)}
            >
              delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {page === '/users' ? 'Add New User' : 'Add New Product'}
        <Link to={`${page}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        style={{ fontSize: '1.4rem' }}
        sx={{ fontSize: '1.6rem', color: 'inherit' }}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
