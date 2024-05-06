import styles from "./dashboard.module.css";
import sidebarLogo from "../../images/Logo.svg";
import DashboardIcon from "../../images/dashboard.png";
import CompanyIcon from "../../images/companies.png";
import OrderPoolIcon from "../../images/orders.png";
import OrderHistoryIcon from "../../images/history.png";
import SubscriptionIcon from "../../images/subscription.png";
import EarningsIcon from "../../images/earnings.png";
import ReportIcon from "../../images/report.png";
import SettingsIcon from "../../images/settings.png";
import SupportIcon from "../../images/supports.png";
import LogoutIcon from "../../images/sign-out.png";
import SearchIcon from "../../images/search.png";
import UserAvatar from "../../images/photo.png";
import Order from "../../images/orders.png";
import YellowMarker from "../../images/yellow.png";
import Horizontal from "../../images/horizontal.png";
import TCompanies from "../../images/t-companies.png";
import Tcreated from "../../images/tcreated.png";
import Tcancelled from "../../images/t-cancelled-order.png";
import Photo2x from "../../images/Photo@2x.png";
import BlueLine from "../../images/blue-line.png";
import BlueBike from "../../images/bluebike.png";
import RedLine from "../../images/red-line.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sidebarcontainer}>
          <div className={styles.sidebarwrapper}>
            <div className={styles.imagewrapper}>
              <img src={sidebarLogo} alt="dms logo" />
            </div>
            <div className={styles.sidebarcontent}>
              <ul>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img
                        className={styles.imgicon}
                        src={DashboardIcon}
                        alt="dashboard icon"
                      />
                    </span>
                    <span className={styles.icontext}>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={CompanyIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Companies</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={OrderPoolIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Order Pool</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={OrderHistoryIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Order History</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={SubscriptionIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Subscription</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={EarningsIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Earnings</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={ReportIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Reports</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={SettingsIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className={styles.icon}>
                      <img src={SupportIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Supports</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span className={styles.icon}>
                      <img src={LogoutIcon} alt="dashboard icon" />
                    </span>
                    <span className={styles.icontext}>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.maincontainer}>
          <header>
            <div className={styles.searchwrapper}>
              <img src={SearchIcon} alt="search icon" />
              <input
                type="search"
                className={styles.searchinput}
                placeholder="Search"
              />
            </div>
            <div className={styles.userwrapper}>
              <img src={UserAvatar} alt="user avatar" />
              <span className={styles.indicator}></span>
              <div className={styles.userinfo}>
                <span className={styles.username}>Jude Adam</span>
                <span className={styles.role}>Admin</span>
              </div>
            </div>
          </header>
          <div className={styles.dashboardanalysis}>
            <h1>Dashboard</h1>
            <div className={styles.dmsdash}>
              <div className={styles.leftcontainer}>
                <div className={styles.card}>
                  <div className={styles.poolorders}>
                    <div className={styles.top}>
                      <h3>Total Exchange Pool Orders</h3>
                      <img src={Order} alt="total orders" />
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.number}>
                        <h1>504</h1>
                        <img src={YellowMarker} alt="" />
                      </div>
                      <div className={styles.moment}>
                        <span>Today</span>
                        <img src={Horizontal} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.poolorders}>
                    <div className={styles.top}>
                      <h3>Total Companies</h3>
                      <img src={TCompanies} alt="total orders" />
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.number}>
                        <h1>504</h1>
                        <img src={YellowMarker} alt="" />
                      </div>
                      <div className={styles.moment}>
                        <span>Today</span>
                        <img src={Horizontal} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.poolorders}>
                    <div className={styles.top}>
                      <h3>Total Cancelled Orders</h3>
                      <img src={Tcancelled} alt="total orders" />
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.number}>
                        <h1>504</h1>
                        <img src={YellowMarker} alt="" />
                      </div>
                      <div className={styles.moment}>
                        <span>Today</span>
                        <img src={Horizontal} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.poolorders}>
                    <div className={styles.top}>
                      <h3>Total Created Orders</h3>
                      <img src={Tcreated} alt="total orders" />
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.number}>
                        <h1>504</h1>
                        <img src={YellowMarker} alt="" />
                      </div>
                      <div className={styles.moment}>
                        <span>Today</span>
                        <img src={Horizontal} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.rightcontainer}>
                <div className={styles.topright}>
                  <div className={`${styles.dmsdash2} ${styles.griditem}`}>
                    <h1 className={styles.totalorder}>120</h1>
                    <h4 className={styles.orderdesc}>
                      Companies sent orders to delivery pool today.
                    </h4>
                    <img className={styles.orderimg} src={Photo2x} alt="" />
                    <h3 className={styles.orderincrement}>+84%</h3>
                    <img
                      className={styles.incrementgraph}
                      src={BlueLine}
                      alt=""
                    />
                    <h4 className={styles.reportdesc}>Comapred to yesterday</h4>
                  </div>
                  <div
                    className={`${styles.dmsdash3}  ${styles.griditem}`}
                    id={styles.container}
                  ></div>
                </div>
                <div className={styles.bottomright}>
                  <div className={`${styles.dmsdash4}  ${styles.griditem}`}>
                    <div className={styles.exchangepool}>
                      <div className={styles.pooldesc}>
                        <h5>Exchange pool today</h5>
                        <span>Most Orders picked by:</span>
                      </div>
                      <div className={styles.arrowdown}>
                        <img src={Horizontal} alt="" />
                      </div>
                    </div>
                    <div className={styles.deliverybike}>
                      <img src={BlueBike} alt="delivery-bike" />
                    </div>
                    <div className={styles.deliveryinfo}>
                      <h5>FZ Deliveries</h5>
                      <div className={styles.deliverydetail}>
                        <span className={styles.deliveryaddress}>
                          Allen, Lagos
                        </span>
                        <span className={styles.deliveryamount}>N340,000</span>
                      </div>
                    </div>
                    <div className={styles.ordersinfo}>
                      <div className={styles.ordercount}>
                        <span className={styles.orderfigure}>504</span>
                        <span>Orders</span>
                      </div>
                      <div className={styles.orderhistory}>
                        <img src={RedLine} alt="redline" />
                        <span>Comapared to Yesterday</span>
                      </div>
                    </div>
                    <div className={styles.orderprocessed}>
                      <span className={styles.processedcount}>267</span>
                      <span className={styles.pool}>Pushed to pool</span>
                    </div>
                  </div>
                  <div
                    className={`${styles.dmsdash5}  ${styles.griditem}`}
                    id={styles.wrapper}
                  >
                    <h1>Delivered Orders</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
