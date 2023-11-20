
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useToast } from "react-toastify";
import { useState } from "react";
import { MdZoomInMap, MdZoomOutMap } from 'react-icons/md'



const Map = () => {
  const markers = [
    {
      geocode: [21.0300, 105.8530],
      // geocode: [21.0300, 105.8530],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [21.0200, 105.8730],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [21.0200, 105.8330],
      popUp: "Hello, I am pop up 3"
    }
  ];
  // create custom icon
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2875/2875433.png",
    iconSize: [100, 100] // size of the icon
  });
  const createClusterCustomIcon = function (cluster) {
    return new L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: L.point(103, 103, true)
    });
  };
  const [position, setPosition] = useState()
  const handleMapClick = async (e) => {
    console.log(e.latlng);
    setPosition([e.latlng.lat, e.latlng.lng])
  };
  const [fixedMap, setFixedMap] = useState(false)
  const handleZoomOut = () => {
    console.log("fixed", fixedMap);
    setFixedMap(!fixedMap)
  }
  console.log('rerender');
  return (
    <>
      {!fixedMap && <MapContainer
        className={"h-[200px] "}
        center={[21.0300, 105.8530]}
        zoom={13}
        maxZoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* MMaping through the markers */}
        <MarkerClusterGroup
          onClick={handleMapClick}
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={true}
          polygonOptions={{
            fillColor: '#ffffff',
            color: '#f00800',
            weight: 5,
            opacity: 1,
            fillOpacity: 0.8,
          }}
          showCoverageOnHover={false}
        >
          {markers.map((marker, i) => {
            return (
              <Marker key={i} position={marker.geocode}
                icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            )
          }
          )}
        </MarkerClusterGroup>
        <button onClick={handleZoomOut} className="cursor-pointer z-[1000] absolute top-0 right-0 text-red-700">
          <MdZoomOutMap size={40} color="teal" />
        </button>
      </MapContainer >}
      {fixedMap && <MapContainer
        className={'fixed top-0 left-0 h-screen w-full'}
        center={[21.0300, 105.8530]}
        zoom={13}
        maxZoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* MMaping through the markers */}
        <MarkerClusterGroup
          onClick={handleMapClick}
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={true}
          polygonOptions={{
            fillColor: '#ffffff',
            color: '#f00800',
            weight: 5,
            opacity: 1,
            fillOpacity: 0.8,
          }}
          showCoverageOnHover={false}
        >
          {markers.map((marker, i) => {
            return (
              <Marker key={i} position={marker.geocode}
                icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            )
          }
          )}
        </MarkerClusterGroup>
        <button onClick={handleZoomOut} className=" cursor-pointer z-[1000] absolute top-0 right-0 text-red-700">
          <MdZoomOutMap size={40} color="teal" />
        </button>
      </MapContainer >}
    </>
  );
}
export default Map