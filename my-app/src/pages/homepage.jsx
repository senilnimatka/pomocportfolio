import React from 'react';
import NavigationMenu from "../components/navigation/navigation_menu";
import Skills from "../components/skills/skillset";
import './home_page.css'
import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";

function Homepage() {
    return (
        <div>

            <section id="navigation">

                {
                    <NavigationMenu/>
                }
            </section>

            <section id="Dovednosti">
                <h2>Dovednosti</h2>
                {
                    <Skills/>
                }
            </section>

            <section id="section2">
                <h2>Obrázky</h2>
                {

                }
            </section>
            <Carousel/>
            <Footer/>
        </div>
    );
}
export default Homepage;