import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import Dashboard from "./Pages/Dashboard";
import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" Component={Login}/>
                    <Route exact path="/dashboard" Component={Dashboard}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
