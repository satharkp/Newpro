import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = { lat: 10.804048122805051, lng: 76.18664964170154 };

export default function GoogleMapSection() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAQGIKzmVWKNZ7gdjOeJAmrPe2r7iBqSi0">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={16}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}