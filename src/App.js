import "./App.css";
import PageRoute from "./routes/PageRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster />
      <PageRoute />
      <Footer />
    </div>
  );
}

export default App;
