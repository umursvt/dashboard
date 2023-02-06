import './single.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Chart from '../../components/chart/chart';
import Database from '../../components/datatable/dataTable';
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>

            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <hr />
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">03422342312</span>
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">Elton St. 3451</span>
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Somewhere in Europe</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <Database />
        <div className="bottom"></div>
      </div>
    </div>
  );
};
export default Single;
