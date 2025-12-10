import Header from "./components/header";      // default import
import { Sidebar } from "./components/Sidebar"; // named import
import { Content } from "./components/Content"; // named import
import Footer from "./components/Footer";      // default import

function App() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", minHeight: "200px" }}>
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </>
  );
}

export default App;
