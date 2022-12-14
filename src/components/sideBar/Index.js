import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./Sidebar";
import {
  faArrowRightFromBracket,
  faBars,
  faBarsProgress,
  faBuildingColumns,
  faChartSimple,
  faGraduationCap,
  faList,
  faPaperPlane,
  faTicket,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
// importing styling for the sidebar
import "./style.css";
import {
  faCassetteTape,
  faSignalBars,
} from "@fortawesome/sharp-solid-svg-icons";
// declaring admin routes
const adminRoutes = [
  {
    path: "/admin/analytics",
    name: "Analytics",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    path: "/admin/products",
    name: "Products",
    icon: <FontAwesomeIcon icon={faBuildingColumns} />,
  },
  {
    path: "/admin/categories",
    name: "Categories",
    icon: <FontAwesomeIcon icon={faCassetteTape} />,
  },
  {
    path: "/admin/addProduct",
    name: "Add Product",
    icon: <FontAwesomeIcon icon={faBarsProgress} />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
  },
];

const SideBar = ({ children }) => {
  // declaring states to manage the component
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [finalRoutes, setFinalRoutes] = useState(null);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };
  // closing and opening the SideBar
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  // this function will first time when this component will render
  useEffect(() => {
    // geting user from the localStorage and seting to the state
    let user = JSON.parse(localStorage.getItem("user"));
    setFinalRoutes(adminRoutes);
    setUser(user);
  }, []);
  return (
    <>
      {/* just html code for the sidebar */}
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "270px" : "45px",
            transition: {
              duration: 0.3,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar_college"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                ></motion.h1>
              )}
            </AnimatePresence>

            <div
              className="bars"
              style={{ fontSize: "22px", cursor: "pointer" }}
            >
              {/* <FaBars onClick={toggle} /> */}
              <FontAwesomeIcon onClick={toggle} icon={faBars} />
            </div>
          </div>
          <section className="routes">
            {finalRoutes?.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div style={{ fontSize: "22px" }}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main style={{ margin: "7px", width: `100%` }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
