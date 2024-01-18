import './navigation.css'
function NavigationMenu(title, pages) {
    return (
        <ul>

            <li>
                <img  className={"image"} src={"image4.png"}/>
                <a href="#section1">O mně</a>
            </li>

            <li><a href="#section2">Portfolio</a></li>
            <li>
                <img  className={"image"} src={"image5.png"}/>
                <a href="#section3">Kontakt</a>
            </li>
        </ul>
    );
}

export default NavigationMenu;