import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function RouterNavigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default RouterNavigation;