import '@fortawesome/fontawesome-free/js/all.js';

export default function Weather () {
  return ( 
    
    // search bar



    // display city name

    <div className="weather"> 
      <h1> What's the weather like today? </h1>

      <div className="search-bar">
          <form className="search-form">
            <input
              type="search"
              placeholder="change city here..."
              autofocus="on"
              autocomplete="off"
              className="shadow-sm"
             className="search-text-input"
            />
            <input
              type="submit"
              value="GO"
              className="search-button buttons shadow-sm"
            />

            <button
              className="location-button buttons shadow-sm"
             className="location-button"
            >
              <i className="fas fa-map-marker-alt location-button-icon"></i>
            </button>
          </form>
        </div>

        <div className="current-location">
          <h2 className="city-name" className="city-name"></h2>
          <p className="current-time">Last updated: <span className="date"></span></p>
          <p className="weather-feature" className="weather-description"></p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="clearfix main-temperature">
              <img src="#" alt="" className="icon" className="float-left" />
              <div className="float-right">
                <span className="temperature" className="temperature"></span>
                <small className="units">
                  <a href="#" className="celsius-link" className="active"> &#176;C</a> |<a
                    href="#"
                   className="fahrenheit-link"
                    >&#176;F</a
                  >
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ul className="weather-characteristics">
              <li><strong>Humidity:</strong> <span className="humidity"></span>%</li>
              <li><strong>Wind:</strong> <span className="wind"></span> mph</li>
            </ul>
          </div>
        </div>
        <hr />








    </div>


)
}