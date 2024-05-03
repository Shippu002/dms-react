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
                  <a href="">
                    <span className={icon}>
                      <img
                        className={img - icon}
                        src={DashboardIcon}
                        alt="dashboard icon"
                      />
                    </span>
                    <span className={icontext}>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={CompanyIcon} alt="dashboard icon" />
                    </span>
                    <span class={icontext}>Companies</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={OrderPoolIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Order Pool</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={OrderHistoryIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Order History</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={SubscriptionIcon} alt="dashboard icon" />
                    </span>
                    <span class={icontext}>Subscription</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={EarningsIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Earnings</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={ReportIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Reports</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={SettingsIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className={icon}>
                      <img src={SupportIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Supports</span>
                  </a>
                </li>
                <li>
                  <a href="./login.html">
                    <span className={icon}>
                      <img src={LogoutIcon} alt="dashboard icon" />
                    </span>
                    <span className={icontext}>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={main - container}>
          <header>
            <div className={search - wrapper}>
              <img src={SearchIcon} alt="search icon" />
              <input
                type="search"
                className={search - input}
                placeholder="Search"
              />
            </div>
            <div className={user - wrapper}>
              <img src={UserAvatar} alt="user avatar" />
              <span className={indicator}></span>
              <div className={user - info}>
                <span className={username}>Jude Adam</span>
                <span className={role}>Admin</span>
              </div>
            </div>
          </header>
          <div className={dashboard - analysis}>
            <h1>Dashboard</h1>
            <div className={dms - dash}>
              <div className={left - container}>
                <div className={card}>
                  <div className={pool - orders}>
                    <div className={top}>
                      <h3>Total Exchange Pool Orders</h3>
                      <img src="./image/orders.png" alt="total orders" />
                    </div>
                    <div className="bottom">
                      <div className="number">
                        <h1>504</h1>
                        <img src="./image/yellow.png" alt="" />
                      </div>
                      <div className="moment">
                        <span>Today</span>
                        <img src="./image/horizontal.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="pool-orders">
                    <div className="top">
                      <h3>Total Companies</h3>
                      <img src="./image/t-companies.png" alt="total orders" />
                    </div>
                    <div className="bottom">
                      <div className="number">
                        <h1>504</h1>
                        <img src="./image/yellow.png" alt="" />
                      </div>
                      <div className="moment">
                        <span>Today</span>
                        <img src="./image/horizontal.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="pool-orders">
                    <div className="top">
                      <h3>Total Cancelled Orders</h3>
                      <img
                        src="./image/t-cancelled-order.png"
                        alt="total orders"
                      />
                    </div>
                    <div className="bottom">
                      <div className="number">
                        <h1>504</h1>
                        <img src="./image/yellow.png" alt="" />
                      </div>
                      <div className="moment">
                        <span>Today</span>
                        <img src="./image/horizontal.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="pool-orders">
                    <div className="top">
                      <h3>Total Created Orders</h3>
                      <img src="./image/tcreated.png" alt="total orders" />
                    </div>
                    <div className="bottom">
                      <div className="number">
                        <h1>504</h1>
                        <img src="./image/yellow.png" alt="" />
                      </div>
                      <div className="moment">
                        <span>Today</span>
                        <img src="./image/horizontal.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-container">
                <div className="top-right">
                  <div className="dms-dash-2 grid-item">
                    <h1 className="total-order">120</h1>
                    <h4 className="order-desc">
                      Companies sent orders to delivery pool today.
                    </h4>
                    <img
                      className="order-img"
                      src="./image/Photo@2x.png"
                      alt=""
                    />
                    <h3 className="order-increment">+84%</h3>
                    <img
                      className="increment-graph"
                      src="./image/blue-line.png"
                      alt=""
                    />
                    <h4 className="report-desc">Comapred to yesterday</h4>
                  </div>
                  <div className="dms-dash-3 grid-item" id="container"></div>
                </div>
                <div className="bottom-right">
                  <div className="dms-dash-4 grid-item">
                    <div className="exchange-pool">
                      <div className="pool-desc">
                        <h5>Exchange pool today</h5>
                        <span>Most Orders picked by:</span>
                      </div>
                      <div className="arrow-down">
                        <img src="./image/Horizontal.png" alt="" />
                      </div>
                    </div>
                    <div className="delivery-bike">
                      <img src="./image/bluebike.png" alt="delivery-bike" />
                    </div>
                    <div className="delivery-info">
                      <h5>FZ Deliveries</h5>
                      <div className="delivery-detail">
                        <span className="delivery-address">Allen, Lagos</span>
                        <span className="delivery-amount">N340,000</span>
                      </div>
                    </div>
                    <div className="orders-info">
                      <div className="order-count">
                        <span className="order-figure">504</span>
                        <span>Orders</span>
                      </div>
                      <div className="order-history">
                        <img src="./image/red-line.png" alt="" />
                        <span>Comapared to Yesterday</span>
                      </div>
                    </div>
                    <div className={order - processed}>
                      <span className={processed - count}>267</span>
                      <span className={pool}>Pushed to pool</span>
                    </div>
                  </div>
                  <div className="dms-dash-5 grid-item" id={wrapper}>
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
