import React, { useEffect } from 'react';
import './assets/CSSs/index.css';
import './assets/CSSs/overide.css';
import Home from './Pages/Home';
import Form from './Pages/Form';
import DetailClass from './Pages/DetailClass';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ZealHeader from "./Component/Header"
import ZealFooter from "./Component/Footer"
export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <ZealHeader />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/form" component={Form} />
                <Route path="/detail/digital-marketing">
                    <DetailClass
                        classTitle="Digital Marketing"
                        classDesc="Tingkatkan penjualan produk yang kamu punya dengan mempelajari fundamental digital marketing"
                        classImg="digitalmarketing"
                        material={[{ material1: "Branding", material2: "Copywriting" }, { material1: "Ads", material2: "Google & SEO" }, { material1: "Content Planning", material2: "E-Commerce" }]}
                    />
                </Route>
                <Route path="/detail/graphic-design">
                    <DetailClass
                        classTitle="Graphic Design"
                        classDesc="Tingkatkan skill design kamu dengan mempelajari fundamental graphic design dan tutorial penggunaan tools design"
                        classImg="graphicdesign"
                        material={[{ material1: "Fundamental of Graphic Design", material2: "Adobe Illustrator" }, { material1: "Adobe Photoshop", material2: "Bonus Tips" }]}
                    />
                </Route>
                <Route path="/detail/web-development">
                    <DetailClass
                        classTitle="Web Development"
                        classDesc="Jadilah developer andal  dengan mempelajari fundamental programming melalui Mini Class di Zeal "
                        classImg="webdevelop"
                        material={[{ material1: "Roadmap", material2: "HTML" }, { material1: "Bootstrap", material2: "CSS/SCSS" }, { material1: "Javascript", material2: "Github" }]}
                    />
                </Route>
            </Switch>
            <ZealFooter />
        </Router>
    )
}
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return null;
}