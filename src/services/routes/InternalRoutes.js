import RaceTrack from "../../views/internalPages/mesas/Racetrack";
import Roletas from "../../views/internalPages/mesas/Roletas";
import Page404 from "./../../views/internalPages/404";
import Home from "./../../views/internalPages/home";



const Routes = [
  {
    path: "*",
    element: <Page404></Page404>,
    breadcrumbName: "/404",
  },
  {
    path: "/",
    element: <Home></Home>,
    breadcrumbName: "/",
    exact: true,
  },
  {
    path: "/roletas",
    element: <Roletas></Roletas>,
    breadcrumbName: "/roletas",
    exact: true,
  },
  {
    path: "/racetrack",
    element: <RaceTrack></RaceTrack>,
    breadcrumbName: "/racetrack",
    exact: true,
  },

];

export default Routes;
