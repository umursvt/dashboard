import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import './list.scss';
import Database from '../../components/datatable/dataTable';
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Database />
      </div>
    </div>
  );
};
export default List;
