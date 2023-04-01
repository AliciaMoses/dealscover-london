
import { ReactComponent as MusicIcon } from "../../assets/icons/mic.svg";
import { ReactComponent as SportsIcon } from "../../assets/icons/sports_volleyball.svg";
import { ReactComponent as DiningIcon } from "../../assets/icons/restaurant.svg";
import { ReactComponent as ArtsIcon } from "../../assets/icons/palette.svg";
import { ReactComponent as NightIcon } from "../../assets/icons/nightlife.svg";
import { ReactComponent as AttractionsIcon } from "../../assets/icons/attractions.svg";
import { ReactComponent as FamilyIcon } from "../../assets/icons/family_friendly.svg";
import { ReactComponent as ArenaIcon } from "../../assets/icons/stadium.svg";
import { ReactComponent as FilmIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as SpaIcon } from "../../assets/icons/spa.svg";
import { ReactComponent as AdultIcon } from "../../assets/icons/age18.svg";

import "./IconsMenu.css";

const IconsMenu = () => {
  return (
    <div className = "container-fluid icons-menu">
      <div className="btn-group btn-group-lg">
        <a href="/music">
          <button type="submit" className="btn custom-outline">
            <MusicIcon />
            <p>music</p>
          </button>
        </a>
        <br></br>
        <a href="/sports">
          <button type="submit" className="btn custom-outline">
            <SportsIcon />
            <p>sports</p>
          </button>
        </a>

        <a href="/food-and-drink">
          <button type="submit" className="btn custom-outline">
            <DiningIcon />
            <p>food</p>
          </button>
        </a>
        <a href="/visual-arts">
          <button type="submit" className="btn custom-outline">
            <ArtsIcon />
            <p>arts</p>
          </button>
        </a>
        <a href="/nightlife">
          <button type="submit" className="btn custom-outline">
            <NightIcon />
            <p>bars</p>
          </button>
        </a>
        <a href="/attractions">
          <button type="submit" className="btn custom-outline">
            <AttractionsIcon />
            <p>attractions</p>
          </button>
        </a>
        <a href="/family">
          <button type="submit" className="btn custom-outline">
            <FamilyIcon />
            <p>family</p>
          </button>
        </a>
        <a href="/arenas">
          <button type="submit" className="btn custom-outline">
            <ArenaIcon />
            <p>arenas</p>
          </button>
        </a>
        <a href="/film">
          <button type="submit" className="btn custom-outline">
            <FilmIcon />
            <p>film</p>
          </button>
        </a>
        <a href="/retreats">
          <button type="submit" className="btn custom-outline">
            <SpaIcon />
            <p>retreats</p>
          </button>
        </a>
        <a href="/age-restricted">
          <button type="submit" className="btn custom-outline">
            <AdultIcon />
            <p>over-18</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default IconsMenu;
