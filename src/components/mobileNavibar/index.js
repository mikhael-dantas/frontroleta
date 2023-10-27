import {
  UserOutlined,
  HomeOutlined,
  SearchOutlined,
  ControlOutlined,
  DashboardOutlined,
  LoginOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  SlidersOutlined,
  BarsOutlined,
  MessageOutlined,
  BarChartOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import SaveAsIcon from "@mui/icons-material/SaveAs";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TerminalIcon from "@mui/icons-material/Terminal";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CasinoIcon from '@mui/icons-material/Casino';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const itemsNavigationMobile = [
  getItem(
    "Home",
    "1",
    <Link to={"/"}>
      <HomeOutlined />
    </Link>
  ),
  getItem("Mesas", "sub1", <CasinoIcon />, [
    getItem(
      "Roletas",
      "2",
      <Link to={"/roletas"}>
        <CasinoIcon />
      </Link>
    ),
    getItem(
      "Racetrack",
      "3",
      <Link to={"/racetrack"}>
        <CasinoIcon />
      </Link>
    ),
  ]),
];
