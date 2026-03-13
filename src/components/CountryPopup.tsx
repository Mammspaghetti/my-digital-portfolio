import { Popup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";

interface CountryPopupProps {
    lat: number;
    lng: number;
    children: React.ReactNode;
}

export function CountryPopup({ lat, lng, children }: CountryPopupProps) {
    const map = useMap();
    const popupRef = useRef<L.Popup | null>(null);

    useEffect(() => {
        if (popupRef.current) {
        popupRef.current.setLatLng([lat, lng]);
        popupRef.current.openOn(map); // ouvre le popup automatiquement
        }
    }, [lat, lng, map]);

    return (
        <Popup ref={popupRef} position={[lat, lng]}>
        {children}
        </Popup>
    );
}