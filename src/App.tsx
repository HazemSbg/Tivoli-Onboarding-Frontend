import {PageTop} from "./components/Top.tsx";
import {Header} from "./components/Header.tsx";
import {Values} from "./components/Values.tsx";
import {NewHires} from "./components/NewHires.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {
    return <>
        <div id={'app-container'}>
            <Header/>
            <PageTop/>
            <Values/>
            <NewHires/>
            <Footer/>
        </div>
    </>
}

export default App
