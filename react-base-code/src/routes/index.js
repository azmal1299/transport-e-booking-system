// import NotFound from "../components/Includes/NotFound";

//Components
import Register from '../components/pages/register/register'
import Login from '../components/pages/SignIn/login'
import Home from '../components/pages/home/home'
import About from '../components/pages/about/about'
import Contact from '../components/pages/contact/contact'
import Cars from '../components/pages/cars/cars'
import Harrier from '../components/pages/cars/harrier'
import Fortuner from '../components/pages/cars/fortuner'
import Hycross from '../components/pages/cars/hycross'
import Scorpio from '../components/pages/cars/scorpio'
import Nexon from '../components/pages/cars/nexon'
import Virtus from '../components/pages/cars/virtus'
import Polo from '../components/pages/cars/polo'
import Xuv700 from '../components/pages/cars/xuv700'
import Vitara from '../components/pages/cars/vitara'
import Amg from '../components/pages/cars/amg'
import M8 from '../components/pages/cars/m8'
import Gwagon from '../components/pages/cars/gwagon'
import Booking from '../components/pages/booking/booking'
import BookingDetails from '../components/pages/booking/bookingdetails'
// import Cart from '../components/pages/admin/carDetails'
// import ContactDetails from '../components/pages/admin/contactdetails'
import AdminScreen from '../components/pages/admin/admin'

const routes = [

    {
        path: "/",
        component: Login,
        protectedRoute: false,
    },
    {
        path: "/register",
        component: Register,
        protectedRoute: false,
    },
    {
        path: "/home",
        component: Home,
        protectedRoute: false,
    },
    {
        path: "/about",
        component: About,
        protectedRoute: false,
    },
    {
        path: "/contact",
        component: Contact,
        protectedRoute: false,
    },

    {
        path: "/cars",
        component: Cars,
        protectedRoute: false,
    },
    {
        path: "/admin",
        component: AdminScreen,
        protectedRoute: false,
    },
    // {
    //     path: "/cart",
    //     component: Cart,
    //     protectedRoute: false,
    // },
    // {
    //     path: "/contactDetails",
    //     component: ContactDetails,
    //     protectedRoute: false,
    // },

    {
        path: "/Harrier",
        component: Harrier,
        protectedRoute: false,
    },
    {
        path: "/fortuner",
        component: Fortuner,
        protectedRoute: false,
    },
    {
        path: "/hycross",
        component: Hycross,
        protectedRoute: false,
    },
    {
        path: "/scorpio",
        component: Scorpio,
        protectedRoute: false,
    },
    {
        path: "/nexon",
        component: Nexon,
        protectedRoute: false,
    },
    {
        path: "/virtus",
        component: Virtus,
        protectedRoute: false,
    },
    {
        path: "/polo",
        component: Polo,
        protectedRoute: false,
    },
    {
        path: "/xuv700",
        component: Xuv700,
        protectedRoute: false,
    },
    {
        path: "/vitara",
        component: Vitara,
        protectedRoute: false,
    }, 
    {
        path: "/amg",
        component: Amg,
        protectedRoute: false,
    },
    {
        path: "/m8",
        component: M8,
        protectedRoute: false,
    },
    {
        path: "/gwagon",
        component: Gwagon,
        protectedRoute: false,
    },

    {
        path: "/booking",
        component: Booking,
        protectedRoute: false,
    },
    {
        path: "/bookingdetails",
        component: BookingDetails,
        protectedRoute: false,
    },

    // {
    // component: NotFound, // This should remain last
    // },
]


export default routes;