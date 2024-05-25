import "./App.css";
import SessionStorageManager from "./components/SessionStorageManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SessionStorageManager />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
