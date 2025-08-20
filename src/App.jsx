import "./assets/styles/bootstrap.css";
import "./assets/styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./Components/Header/Header";
import Alert from "./Components/Alert/Alert";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import SixthSection from "./Components/SixthSection/SixthSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </>
  );
}

export default App;
