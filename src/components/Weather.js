import '@fortawesome/fontawesome-free/js/all.js';

export default function Weather () {
  return ( 
    
      
    
    <div className="weather">
      <h1> What's the weather like today? </h1>
     
      <div className="weather__container"> 
        <div className="search-bar">
          <form className="searchbar__form">
            <input
              type="search"
              placeholder="enter a city here..."
              autoFocus="on"
              autocomplete="off"
              className="searchbar__input"
            />
            <input
              type="submit"
              value="GO"
              className="search-btn"
            />

            <button
              className="location-btn"
            >
              <i className="fas fa-map-marker-alt location-button-icon"></i>
            </button>
          </form>
        </div>

        <div className="current-location">
          <h2 className="city-name">Manchester</h2>
          <p className="current-time">Last updated: <span className="date"></span></p>
          <p className="weather-description"></p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="clearfix main-temperature">icon
              <img src="#" alt="" className="icon" className="float-left" />
              <div className="float-right">
                <span className="temperature">6</span>
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








    </div>


)
}