export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          <p>{params.row.username}</p>
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 80,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}  `}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: 'John Snow',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'John Snow',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 3,
    username: 'John Snow',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    status: 'passive',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 4,
    username: 'John Snow',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    status: 'passive',
    email: '1snow@gmail.com',
    age: 35,
  },
];
