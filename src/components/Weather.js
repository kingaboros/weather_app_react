import '@fortawesome/fontawesome-free/js/all.js';

export default function Weather () {
  return ( 
    
    // search bar



    // display city name

    <div className="weather"> 
      <h1> What's the weather like today? </h1>

      <div class="search-bar">
          <form id="search-form">
            <input
              type="search"
              placeholder="change city here..."
              autofocus="on"
              autocomplete="off"
              class="shadow-sm"
              id="search-text-input"
            />
            <input
              type="submit"
              value="GO"
              class="search-button buttons shadow-sm"
            />

            <button
              class="location-button buttons shadow-sm"
              id="location-button"
            >
              <i class="fas fa-map-marker-alt location-button-icon"></i>
            </button>
          </form>
        </div>

        <div class="current-location">
          <h2 class="city-name" id="city-name"></h2>
          <p class="current-time">Last updated: <span id="date"></span></p>
          <p class="weather-feature" id="weather-description"></p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="clearfix main-temperature">
              <img src="#" alt="" id="icon" class="float-left" />
              <div class="float-right">
                <span class="temperature" id="temperature"></span>
                <small class="units">
                  <a href="#" id="celsius-link" class="active"> &#176;C</a> |<a
                    href="#"
                    id="fahrenheit-link"
                    >&#176;F</a
                  >
                </small>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <ul class="weather-characteristics">
              <li><strong>Humidity:</strong> <span id="humidity"></span>%</li>
              <li><strong>Wind:</strong> <span id="wind"></span> mph</li>
            </ul>
          </div>
        </div>
        <hr />








    </div>


)
}