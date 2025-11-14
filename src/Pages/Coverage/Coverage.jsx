import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Coverage = () => {
    return (
        <div className="w-full h-[500px] md:h-[700px] rounded-lg overflow-hidden shadow-lg">
            <h1 className='text-4xl font-semibold'>We are available across Bangladesh</h1>
            <MapContainer 
                center={[23.6850, 90.3563]} // Where the map starts
                zoom={7} // initial zoom level, the higher the closer
                scrollWheelZoom={true} // Allow zooming with mouse wheel
                style={{ height: '100%', width: '100%' }}
            >
                {/* Map Tiles */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // url where the map images are loaded from
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' // Emny
                />

                {/* Pin on the Map */}
                <Marker position={[23.8103, 90.4125]}> 
                    <Popup>Dhaka</Popup>
                </Marker>
                <Marker position={[23.6,89.8333]}> 
                    <Popup>Foridpur</Popup>
                </Marker>
                <Marker position={[23.9999,90.4203]}> 
                    <Popup>Gazipur</Popup>
                </Marker>
                <Marker position={[23.0052,89.8266]}> 
                    <Popup>Gopalganj</Popup>
                </Marker>
                

                {/* Add more markers for other districts if needed */}
            </MapContainer>
        </div>
    );
};

export default Coverage;