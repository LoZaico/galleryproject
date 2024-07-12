import React from 'react'
import { Link } from 'react-router-dom';
import Dosomethinggreatneon from './Dosomethinggreatneon';
import Neonbluesharp from './Neonbluesharp';
import Neoncactus from './Neoncactus';
import Neonheart from './Neonheart';
import Neonhello from './Neonhello';
import Neonpinkroom from './Neonpinkroom';
import Neonpurpletunnel from './Neonpurpletunnel';
import Neonray from './Neonray';
import Neonwall from './Neonwall';
import Southcoreaneon from './Southcoreaneon';

const Navegation = () => {
  return (
    <div>
        <Link to="/Dosomethinggreatneon">
            <figure>
            <Dosomethinggreatneon />
                <figcaption>DoSomethingGreat</figcaption>
            </figure>
        </Link>
        <Link to="/Neonbluesharp">
            <figure>
            <Neonbluesharp />
                <figcaption>NeonBlueSharp</figcaption>
            </figure>
        </Link>
        <Link to="/Neoncactus">
            <figure>
            <Neoncactus />
                <figcaption>NeonCactus</figcaption>
            </figure>
        </Link>
        <Link to="/Neonheart">
            <figure>
            <Neonheart />
                <figcaption>NeonHeart</figcaption>
            </figure>
        </Link>
        <Link to="/Neonhello">
            <figure>
            <Neonhello />
                <figcaption>NeonHello</figcaption>
            </figure>
        </Link>
        <Link to="/Neonpinkroom">
            <figure>
            <Neonpinkroom />
                <figcaption>Neonpinkroom</figcaption>
            </figure>
        </Link>
        <Link to="/Neonpurpletunnel">
            <figure>
            <Neonpurpletunnel />
                <figcaption>NeonPurpleTunnel</figcaption>
            </figure>
        </Link>
        <Link to="/Neonray">
            <figure>
            <Neonray />
                <figcaption>NeonRay</figcaption>
            </figure>
        </Link>
        <Link to="/Neonwall">
            <figure>
            <Neonwall />
                <figcaption>NeonWall</figcaption>
            </figure>
        </Link>
        <Link to="/Southcoreaneon">
            <figure>
            <Southcoreaneon />
                <figcaption>SouthCoreaNeon</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegation
