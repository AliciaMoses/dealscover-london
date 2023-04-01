import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
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
import { ReactComponent as ToggleIcon } from "../../assets/icons/toggle_on_FILL0_wght100_GRAD-25_opsz48.svg";
// import { ReactComponent as TheatreIcon } from "../../assets/icons/theatres.svg";
import "./EventsView.css";

const EventsView = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setCategory] = useState("");
  const [selectedMaxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then(async (data) => {
        setEvents(data.events);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleMaxPriceClick = (price) => {
    setMaxPrice(price);
  };

  const filteredEvents = events.filter(
    (event) =>
      (!selectedCategory || event.genre === selectedCategory) &&
      (selectedMaxPrice === null || event.priceRange[0].min <= selectedMaxPrice)
  );

  const sortedEvents = filteredEvents.sort(
    (a, b) => a.priceRange[0].min - b.priceRange[0].min
  );

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="text-center">
            <h1 className="display-4 mx-auto">Events</h1>
          </div>

          <div className="text-center">
            <div
              className="btn-group price"
              role="price"
              aria-label="Basic radio toggle button group"
            >
              <button type="button" class="btn btn-secondary text-white">
                Price Filter
              </button>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(1000)}
                name="btnradioprice"
                id="btnradio1"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio1">
                Off
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(0)}
                name="btnradioprice"
                id="btnradio2"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio2">
                Free
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(10)}
                name="btnradioprice"
                id="btnradio3"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio3">
                £10
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(20)}
                name="btnradioprice"
                id="btnradio4"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio4">
                £20
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(30)}
                name="btnradioprice"
                id="btnradio5"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio5">
                £30
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(40)}
                name="btnradioprice"
                id="btnradio6"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio6">
                £40
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(50)}
                name="btnradioprice"
                id="btnradio7"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio7">
                £50
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(60)}
                name="btnradioprice"
                id="btnradio8"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio8">
                £60
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(70)}
                name="btnradioprice"
                id="btnradio9"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio9">
                £70
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(80)}
                name="btnradioprice"
                id="btnradio10"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio10">
                £80
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(90)}
                name="btnradioprice"
                id="btnradio11"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio11">
                £90
              </label>

              <input
                type="radio"
                className="btn-check"
                onClick={() => handleMaxPriceClick(100)}
                name="btnradioprice"
                id="btnradio12"
                autocomplete="off"
              />
              <label className="btn btn-dark" for="btnradio12">
                £100
              </label>
            </div>
          </div>
        </div>

        <div
          className="btn-group"
          role="group"
          aria-label="Category radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("")}
            name="btnradio"
            id="btnradiotoggle"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradiotoggle">
            <ToggleIcon /> All
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Music")}
            name="btnradio"
            id="btnradiomusic"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradiomusic">
            {" "}
            <MusicIcon /> Music
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Sport")}
            name="btnradio"
            id="btnradiosports"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradiosports">
            <SportsIcon /> Sports
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Arts")}
            name="btnradio"
            id="btnradioarts"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradioarts">
            <ArtsIcon /> Arts
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Nightlife")}
            name="btnradio"
            id="btnradionight"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradionight">
            <NightIcon /> Nightlife
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Film")}
            name="btnradio"
            id="btnradiofilm"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradiofilm">
            <FilmIcon /> Film
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Retreats")}
            name="btnradio"
            id="btnradiospa"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradiospa">
            <SpaIcon /> Retreats
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={() => handleCategoryClick("Family")}
            name="btnradio"
            id="btnradiofam"
            autocomplete="off"
          />
          <label className="btn btn-dark" for="btnradiofam">
            <FamilyIcon /> Family
          </label>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div className="container">
          {sortedEvents.map((event) => (
            <div className="card text-bg-dark mb-3 p-3" key={event._id}>
              <div className="card-header">
                <h4>{event.name}</h4>
              </div>
              <div className="card-body">
                <h6>Type:</h6>
                <h5>
                  {event.genre}, {event.subgenre}
                </h5>
                <br></br>
                <h6>Min Price:</h6>
                <h5>
                  {" "}
                  {event.priceRange[0].min === 0
                    ? "Free"
                    : `£${event.priceRange[0].min}`}
                </h5>
                <br></br>
                <h6 className="card-text">Postcode:</h6>
                <h5>{event.postCode}</h5>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a
                    href={`/event/${event._id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light">
                      <i class="bi bi-info-square"></i>View details
                    </button>
                  </a>
                  <br />
                  <a
                    href={`https://${event.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light">
                      <i class="bi bi-ticket-perforated"></i>
                      Buy Tickets
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsView;
