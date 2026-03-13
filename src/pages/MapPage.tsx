import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import { Navbar } from "@/components/Navbar";
import { CountryPopup } from "@/components/CountryPopup";

interface Country {
    name: string;
    lat: number;
    lng: number;
    capital?: string;
    population?: number;
    region?: string;
    flag?: string;
}

// Fix Leaflet icons
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Centre la carte sur le pays sélectionné
function CenterMap({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], 6, { animate: true });
    }, [lat, lng, map]);
    return null;
}

export default function MapPage() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    // Fetch des pays
    useEffect(() => {
        fetch("https://spaghetticountries.onrender.com/countries")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.error(err));
    }, []);

    // Grouper par continent
    const regions: { [key: string]: Country[] } = {};
    countries.forEach((c) => {
        const cont = c.region || "Unknown";
        if (!regions[cont]) regions[cont] = [];
        regions[cont].push(c);
    });

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar fixe */}
            <Navbar />

            {/* Contenu principal */}
            <div className="flex flex-1 mt-14 relative">
                {/* Sidebar scrollable */}
                <div className="w-80 p-4 overflow-y-auto bg-gray-900 text-white border-r border-gray-700 h-[calc(100vh-56px)]">
                    <h2 className="text-xl font-bold mb-4">Pays</h2>
                    {Object.keys(regions).map((continent) => (
                        <div key={continent} className="mb-4">
                            <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">{continent}</h3>
                            <ul>
                                {regions[continent].map((c) => (
                                <li
                                    key={c.name}
                                    className="cursor-pointer p-2 rounded hover:bg-gray-700 flex items-center gap-2"
                                    onClick={() => setSelectedCountry({ ...c })}
                                >
                                    {c.flag && <img src={c.flag} alt={`${c.name} flag`} className="w-5 h-3 object-cover rounded-sm" />}
                                    <span>{c.name}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Carte fixe */}
                <div className="flex-1">
                    <div className="fixed top-14 left-80 right-0 bottom-0">
                        <MapContainer
                            center={[46.5, 2]}
                            zoom={4}
                            className="w-full h-full"
                            scrollWheelZoom={true}
                            >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; OpenStreetMap contributors"
                            />

                            {/* Tous les markers */}
                            {countries
                                .filter((c) => c.lat !== undefined && c.lng !== undefined)
                                .map((c) => (
                                <Marker key={c.name} position={[c.lat, c.lng]} />
                                ))}

                            {/* Marker et popup du pays sélectionné */}
                            {selectedCountry && (
                                <>
                                <CenterMap lat={selectedCountry.lat} lng={selectedCountry.lng} />
                                    <Marker position={[selectedCountry.lat, selectedCountry.lng]}>
                                        <CountryPopup lat={selectedCountry.lat} lng={selectedCountry.lng}>
                                            <strong>{selectedCountry.name}</strong>
                                            <br />
                                            Population: {selectedCountry.population ?? "N/A"}
                                            <br />
                                            Capital: {selectedCountry.capital ?? "N/A"}
                                            <br />
                                            Continent: {selectedCountry.region ?? "N/A"}
                                        </CountryPopup>
                                    </Marker>
                                </>
                            )}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}