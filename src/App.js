// importing our app css
import "./App.css";
// import application routes
import Router from "./routes/index";
// importing toast notifications
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// importin aos library for animations
import AOS from "aos";
import "aos/dist/aos.css";
// using aos
AOS.init({
  offset: 200,
  duration: 900,
  once: true,
});
function App() {
  return (
    <>
      {/* using router in which our all app routes present  */}
      <Router />
      {/* using toat container so that we will be able to toast notification on all the pages  */}
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </>
  );
}

export default App;
