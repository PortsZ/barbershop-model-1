import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import BarberPole from "./BarberPole";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded)
    return (
      <div>
        <BarberPole />
      </div>
    );
  return <GMap />;
};

function GMap() {
  const sharpoetry = useMemo(()=>({ lat: 26.4570534, lng: -80.1212205 }), []);

  return (
    <div className="w-full h-full">
      <GoogleMap
        zoom={13}
        center={sharpoetry}
        mapContainerClassName="w-full h-full rounded-tl-3xl rounded-br-3xl"
      >
        <MarkerF position={sharpoetry} label='SHARPOETRY'/>
      </GoogleMap>
    </div>
  );
}

export default Map;
