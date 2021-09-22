import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { destructuringData } from "./../../helpers";

const Map = ({ foundUser, checkValue }) => {
  const { streetName, city, postcode, country, latitude, longitude } =
    destructuringData(foundUser);

  const position = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={true}
      className="leaflet"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <p>{`${checkValue(city)}, Street: ${checkValue(streetName)}`}</p>
          <p>{`Postcode: ${checkValue(postcode)}, ${checkValue(country)}`}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
