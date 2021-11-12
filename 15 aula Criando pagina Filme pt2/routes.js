import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';

import Header from './components/Header';

const RoutesAll = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/filme/:id" element={<Filme/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAll;