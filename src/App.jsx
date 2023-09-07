import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-page">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
