
import Form from "./Form";
import {NavLink} from "react-router-dom";
import PoweredBy from "./PoweredBy";

function Header() {
    return (
        <header>
            <NavLink to="/">
                <h1>Filmes</h1>
            </NavLink>
            <p>Encontre informações sobre seu filme favorito!</p>
            <Form />
        </header>
    );
}

export default Header;
