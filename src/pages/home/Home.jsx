import Sidebar from '../../components/sidebar/sidebar';
import './home.scss';
import Navbar from '../../components/navbar/navbar';
import Widgets from '../../components/widgets/widgets';
import Chart from '../../components/chart/chart';
import Featured from '../../components/featured/featured';
import Table from '../../components/table/table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>

        <div className="listContainer">
          <div className="listTitle"> Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Home;
