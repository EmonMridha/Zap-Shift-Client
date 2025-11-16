import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const ChangeCenter = ({ position }) => {
    const map = useMap();
    map.setView(position, 10); // zoom level 10
    return null;
}

const Coverage = () => {
    const serviceCenters = useLoaderData();
    const [search, setSearch] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(null)

    const handleSearch = () => {
        const found = serviceCenters.find(center => center.city.toLowerCase() === search.toLowerCase());

        if (found) {
            setSelectedPosition([found.latitude, found.longitude]);
        }
        else {
            alert('District not found');
        }
    }
    return (
        <div className="w-full h-[700px] md:h-[700px] rounded-lg overflow-hidden shadow-lg">
            {/* Search bar */}
            <div className='flex gap-2 mb-4'>
                <input type="text"
                    placeholder='Search district...'
                    className='input input-bordered w-full'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch} className='btn btn-primary'>Search</button>
            </div>
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

                {/* If searched, move the map */}
                {selectedPosition && <ChangeCenter position={selectedPosition} />}

                {/* Pin on the Map */}

                {
                    serviceCenters.map((center, index) =>
                        <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>{center.city}</Popup>
                        </Marker>
                    )
                }


                {/* Add more markers for other districts if needed */}
            </MapContainer>
        </div>
    );
};

export default Coverage;