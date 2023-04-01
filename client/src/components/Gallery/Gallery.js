import "./Gallery.css";
import EventsView from "../EventsView/EventsView";
import Navbar from "../navbar/Navbar"


const Gallery = () => {
  return (
    <>
    <Navbar /><br></br><br></br>
    <body>  
    <main>
      <div className="gallery"><br></br>
        <EventsView />
      </div>
    </main>
    </body>
    </>
  );
};

export default Gallery;
