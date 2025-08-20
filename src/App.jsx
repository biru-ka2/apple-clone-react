import "./assets/styles/bootstrap.css";
import "./assets/styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./Components/Header/Header";
import Alert from "./Components/Alert/Alert";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection";
function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
    </>
  );
}

export default App;
