import briefcase from "../assets/icons/briefcase 1.svg";
import home from "../assets/icons/home 1.svg";
import usersFriends from "../assets/icons/user-friends 1.svg";
import users from "../assets/icons/users 1.svg";
import sack from "../assets/icons/sack 1.svg";
import handshake from "../assets/icons/handshake-regular 1.svg";
import piggyBank from "../assets/icons/piggy-bank 1.svg";
import money from "../assets/icons/Group 104.svg";
import userCheck from "../assets/icons/user-check 1.svg";
import userTimes from "../assets/icons/user-times 1.svg";
import bank from "../assets/icons/Group.svg";
import coins from "../assets/icons/coins-solid 1.svg";
import inAndOut from "../assets/icons/icon.svg";
import galaxy from "../assets/icons/galaxy 1.svg";
import userSettings from "../assets/icons/user-cog 1.svg";
import Scroll from "../assets/icons/scroll 1.svg";
import chartBar from "../assets/icons/chart-bar 2.svg";
import slider from "../assets/icons/sliders-h 1.svg";
import badge from "../assets/icons/badge-percent 1.svg";
import clipboard from "../assets/icons/clipboard-list 1.svg";

interface SidebarLink {
    id: number;
    icon?: string;
    linkto:"/",
    title: string;
    class?: string;
  }
  
  export const sidebarLinks: SidebarLink[] = [
  {
    id: 0,
    icon: briefcase,
    linkto:"/",
    title: "Switch Organization",
  },
  {
    id: 1,
    icon: home,
    linkto:"/",
    title: "Dashboard",
  },
  {
    id: 2,
    linkto:"/",
    title: "CUSTOMERS",
    class: "link-header",
  },
  {
    id: 3,
    icon: usersFriends,
    linkto:"/",
    title: "Users",
    class: "links",
  },
  {
    id: 4,
    icon: users,
    linkto:"/",
    title: "Guarantors",
    class: "links",
  },
  {
    id: 5,
    icon: sack,
    linkto:"/",
    title: "Loan",
    class: "links",
  },
  {
    id: 6,
    icon: handshake,
    linkto:"/",
    title: "Decision Model",
    class: "links",
  },
  {
    id: 7,
    icon: piggyBank,
    linkto:"/",
    title: "Savings",
    class: "links",
  },
  {
    id: 8,
    icon: money,
    linkto:"/",
    title: "Loan Requests",
    class: "links",
  },
  {
    id: 9,
    icon: userCheck,
    linkto:"/",
    title: "Whitelist",
    class: "links",
  },
  {
    id: 10,
    icon: userTimes,
    linkto:"/",
    title: "Karma",
    class: "links",
  },
  {
    id: 11,
    linkto:"/",
    title: "BUSINESSESS",
    class: "link-header",
  },
  {
    id: 12,
    icon: briefcase,
    linkto:"/",
    title: "Organization",
    class: "links",
  },
  {
    id: 13,
    icon: money,
    linkto:"/",
    title: "Loan Products",
    class: "links",
  },
  {
    id: 14,
    icon: bank,
    linkto:"/",
    title: "Savings Products",
    class: "links",
  },
  {
    id: 15,
    icon: coins,
    linkto:"/",
    title: "Fees and Charges",
    class: "links",
  },
  {
    id: 16,
    icon: inAndOut,
    linkto:"/",
    title: "Transactions",
    class: "links",
  },
  {
    id: 17,
    icon: galaxy,
    linkto:"/",
    title: "Services",
    class: "links",
  },
  {
    id: 18,
    icon: userSettings,
    linkto:"/",
    title: "Service Account",
    class: "links",
  },
  {
    id: 19,
    icon: Scroll,
    linkto:"/",
    title: "Settlement",
    class: "links",
  },
  {
    id: 20,
    icon: chartBar,
    linkto:"/",
    title: "Reports",
    class: "links",
  },
  {
    id: 21,
    linkto:"/",
    title: "Settings",
    class: "link-header",
  },
  {
    id: 22,
    icon: slider,
    linkto:"/",
    title: "Preferences",
    class: "links",
  },
  {
    id: 23,
    icon: badge,
    linkto:"/",
    title: "Fees and Pricing",
    class: "links",
  },
  {
    id: 24,
    icon: clipboard,
    linkto:"/",
    title: "Audits Logs",
    class: "links",
  },
];
