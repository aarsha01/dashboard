/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useTheme } from "@emotion/react";

const NavSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const theme = useTheme()

  return (
    <div>
      {/* Sidebar Overlay */}
      <div
        onClick={()=> setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      {/* <div>
        <button
          className="btn-menu"
          onClick={()=> setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div> */}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 border-r-2 lg:translate-x-0 lg:static lg:inset-0 h-100 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
        style={{height:'100%', backgroundColor:theme.palette.background.main, borderColor:theme.palette.grey.main}}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-white">
            CMS-Dashboard
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "/",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "About",
              itemId: "/about",
              elemBefore: () => <Icon name="user" />
              // ,subNav: [
              //   {
              //     title: "Projects",
              //     itemId: "/about/projects",
              //     // Optional
              //     elemBefore: () => <Icon name="cloud-snow" />
              //   },
              //   {
              //     title: "Members",
              //     itemId: "/about/members",
              //     elemBefore: () => <Icon name="coffee" />
              //   }
              // ]
            },
            {
              title: "Add Branch",
              itemId: "/branch_form",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "Add Device",
              itemId: "/device_form",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "All Devices",
              itemId: "/allDevices",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
<<<<<<< HEAD
              title: "Add Marquee",
              itemId: "/marquee_form",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "Add Zone",
              itemId: "/zone_form",
=======
              title: "All Branches",
              itemId: "/allBranches",
>>>>>>> 24fa917411ac6aec8c00dd27776e1bf8bb523560
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            // {
            //   title: "Another Tab",
            //   itemId: "/another",
            //   subNav: [
            //     {
            //       title: "Teams",
            //       itemId: "/another/teams"
            //       // Optional
            //       // elemBefore: () => <Icon name="calendar" />
            //     }
            //   ]
            // }
          ]}
        />

        {/* <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="activity" />
              }
            ]}
            onSelect={({ itemId }) => {
              navigate(itemId);
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default NavSidebar