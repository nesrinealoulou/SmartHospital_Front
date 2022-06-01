import Index from "views/Index.js";
import EmployeeProfile from "views/examples/EmployeeProfile.js";
import home from "views/examples/home.js";
import Maps from "views/examples/Maps.js";
import RegisterPatient from "views/examples/RegisterPatient.js";
import Login from "views/examples/Login.js";
import Choice from "views/examples/Choice.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import RegisterEmployee from "./views/examples/RegisterEmployee";
import EditEmployeeProfile from "./views/examples/EditEmployeeProfile";
import PatientProfile from "./views/examples/PatientProfile";
import EditPatientProfile from "./views/examples/EditPatientProfile";
import PatientListByStaff from "./views/examples/PatientListByStaff";
import DoctorsList from "./views/examples/DoctorsList";
import ConsultationHistory from "./views/examples/ConsultationHistory";
import CurrentConsultations from "./views/examples/currentConsultation";
import VerfifyOpt from "./views/examples/VerifyOpt";
import PatientProfileForDoctor from "./views/examples/PatientProfileForDoctor";
import HistoryConsultationForDoctor from "./views/examples/HistoryConsultationForDoctor";
import CurrentConsultationsForPatient from "./views/examples/CurrentConsultationForPatient";
import EmployeeProfileForPatient from "./views/examples/EmployeeProfileForPatient";

var routes = [
    {
        path: "/home",
        name: "Smart Hospital",
        icon: "ni ni-single-02 text-yellow",
        component: home,
        layout: "/auth",

    },
    {
        path: "/home",
        name: "Smart Hospital",
        icon: "ni ni-single-02 text-yellow",
        component: home,
        layout: "/auth",

    },
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin",
        role:"employee"
    },
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin",
        role:"patient"
    },
    {
        path: "/list-doctors",
        name: "Doctors Lists",
        icon: "ni ni-single-02 text-yellow",
        component: DoctorsList,
        layout: "/admin",
        role:"patient"
    },
    {
        path: "/consultationsForDoctor",
        name: "Current Consultations",
        icon: "ni ni-single-02 text-yellow",
        component: CurrentConsultations,
        layout: "/admin",
        role:"employee"
    },
    {
        path: "/consultation-history-for-doctor",
        name: "Consultations History",
        icon: "ni ni-single-02 text-yellow",
        component: HistoryConsultationForDoctor,
        layout: "/admin",
        role:"employee"
    },
    {
        path: "/current-consultation-for-patient",
        name: "Current Consultations",
        icon: "ni ni-single-02 text-yellow",
        component: CurrentConsultationsForPatient,
        layout: "/admin",
        role:"patient"
    },
    {
        path: "/consultations-history--for-patient",
        name: "Consultations History",
        icon: "ni ni-single-02 text-yellow",
        component: ConsultationHistory,
        layout: "/admin",
        role:"patient"
    },
    {
        path: "/verifyOpt",
        name: "verifyOpt",
        icon: "ni ni-single-02 text-yellow",
        component: VerfifyOpt,
        layout: "/auth",
    },
    {
        path: "/Patient-Edit",
        name: "Edit Patient",
        icon: "ni ni-single-02 text-yellow",
        component: EditPatientProfile,
        layout: "/admin",
        role:"patient"
    },
    {
        path: "/Patient-profile",
        name: "Patient Profile",
        icon: "ni ni-single-02 text-yellow",
        component: PatientProfile,
        layout: "/admin",
        role:"patient"

    },
    {
        path: "/Patient-profile-for-doctor/:id",
        name: "Patient Profile",
        icon: "ni ni-single-02 text-yellow",
        component: PatientProfileForDoctor,
        layout: "/admin",

    },
    {
        path: "/Employee-profile",
        name: "Employee Profile",
        icon: "ni ni-single-02 text-yellow",
        component: EmployeeProfile,
        layout: "/admin",
        role:"employee"
    },{
        path: "/Employee-profile-for-patient/:id",
        name: "Employee Profile",
        icon: "ni ni-single-02 text-yellow",
        component: EmployeeProfileForPatient,
        layout: "/admin",
    },
    {
        path: "/Patient-list-by-staff",
        name: "Your patients",
        icon: "ni ni-single-02 text-yellow",
        component: PatientListByStaff,
        layout: "/admin",
        role:"employee"
    },
    {
        path: "/Employee-edit",
        name: "Edit Employee",
        icon: "ni ni-single-02 text-yellow",
        component: EditEmployeeProfile,
        layout: "/admin",
        role:"employee"
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth",
    },
    {
        path: "/choix",
        name: "Choice",
        icon: "ni ni-key-25 text-info",
        component: Choice,
        layout: "/auth",
    },
    {
        path: "/registerPatient",
        name: "RegisterPatient",
        icon: "ni ni-circle-08 text-pink",
        component: RegisterPatient,
        layout: "/auth",
    },
    {
        path: "/registerEmployee",
        name: "RegisterPatient",
        icon: "ni ni-circle-08 text-pink",
        component: RegisterEmployee,
        layout: "/auth",
    }
];


export default routes;
