import CartWidget from "./CartWidget";

export default function NavBar (){
    return (
        <nav>
            <a href="">logo de rotiseria</a>
            <ul>
                <li>
                    <a href="">productos</a>
                </li>
                <li>
                    <a href="">Promos</a>
                </li>
                <li>
                    <a href="">contacto</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}