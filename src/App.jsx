import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
