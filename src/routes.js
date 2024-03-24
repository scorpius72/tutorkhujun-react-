import { createBrowserRouter } from "react-router-dom";
import App from './App'
import TutionJob from "./components/tutionJob_folder/TutionJob";
import PremiumTutor from "./components/premiumTutor_folder/PremiumTutor";
import TutorRequest from "./components/tutor_request_folder/TutorRequest";
import CoursesMain from "./components/courses_folder/CoursesMain";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App activeLink={5}/>,
    },
    {
        path: "/tution-job",
        element: <TutionJob activeLink={0}/>,
    },
    {
        path: "/tutor-list",
        element: <PremiumTutor activeLink= {1}/>,
    },
    {
        path: "/tutor-request",
        element: <TutorRequest activeLink= {2}/>,
    },
    {
        path: "/courses",
        element: <CoursesMain activeLink= {3}/>,
    },
]);