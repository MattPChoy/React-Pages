import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { Link, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/about"><About /></Route>
            </Switch>
        </div>
    )
}

export default App;
