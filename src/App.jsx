import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle.jsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
