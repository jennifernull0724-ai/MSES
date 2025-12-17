const LOCATIONS = [
  {
    name: 'Corporate Office',
    city: 'Southaven, MS',
    address: '8465 Hamilton Rd, Southaven, MS 38671',
    mapUrl: 'https://www.google.com/maps?q=8465+Hamilton+Rd+Southaven+MS+38671',
    // Position as percentage from top-left of map container
    top: '18%',
    left: '72%'
  },
  {
    name: 'Jacksonville, AR',
    city: 'Jacksonville, AR',
    address: '2600 W Main St, Jacksonville, AR 72076',
    mapUrl: 'https://www.google.com/maps?q=2600+W+Main+St+Jacksonville+AR+72076',
    top: '20%',
    left: '28%'
  },
  {
    name: 'Texarkana, AR',
    city: 'Texarkana, AR',
    address: '3939 E Ninth St, Texarkana, AR 71854',
    mapUrl: 'https://www.google.com/maps?q=3939+E+Ninth+St+Texarkana+AR+71854',
    top: '68%',
    left: '12%'
  },
  {
    name: 'Fulton, MS',
    city: 'Fulton, MS',
    address: '100 Access Rd, Fulton, MS 38843',
    mapUrl: 'https://www.google.com/maps?q=100+Access+Rd+Fulton+MS+38843',
    top: '32%',
    left: '85%'
  }
];

function Map() {
  return (
    <div className="static-map-container">
      {/* Static map background - Mid-South region */}
      <div className="static-map-background">
        <div className="static-map-label static-map-label-ar">AR</div>
        <div className="static-map-label static-map-label-ms">MS</div>
        <div className="static-map-label static-map-label-la">LA</div>
        <div className="static-map-label static-map-label-tn">TN</div>
      </div>
      
      {/* Clickable location pins */}
      {LOCATIONS.map((location, index) => (
        <a
          key={index}
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-pin"
          style={{ top: location.top, left: location.left }}
          aria-label={`View ${location.name} on Google Maps`}
          title={`${location.name}\n${location.address}`}
        >
          <svg 
            className="map-pin-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="map-pin-label">{location.city}</span>
        </a>
      ))}
    </div>
  );
}

export default Map;
