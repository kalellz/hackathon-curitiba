"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip, ZoomControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { ReactNode, useEffect, useMemo } from "react";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

type MarkerData = {
  position: [number, number];
  tooltip?: ReactNode;
  onClick?: () => void;
};

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (!positions.length) return;
    const bounds = L.latLngBounds(positions.map((p) => L.latLng(p[0], p[1])));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [positions, map]);
  return null;
}

type Props = {
  markers: MarkerData[];
  defaultCenter?: [number, number];
};

export default function LeafletMap({ markers, defaultCenter }: Props) {
  useEffect(() => {}, []);

  const center = useMemo(() => {
    return markers[0]?.position ?? defaultCenter ?? [-23.55, -46.63];
  }, [markers, defaultCenter]);

  const positions = useMemo(() => markers.map((m) => m.position), [markers]);

  return (
    <div className="relative z-0 w-full h-[70vh] rounded-md overflow-hidden border">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <ZoomControl position="bottomright" />
        {markers.map((m, i) => (
          <CircleMarker
            key={i}
            center={m.position}
            eventHandlers={{ click: m.onClick }}
            radius={7}
            pathOptions={{ color: "#0ea5e9", weight: 2, fillColor: "#38bdf8", fillOpacity: 0.9 }}
            className="cursor-pointer"
          >
            {m.tooltip && (
              <Tooltip direction="top" offset={[0, -8]} className="leaflet-tooltip-custom" opacity={1}>
                {m.tooltip}
              </Tooltip>
            )}
          </CircleMarker>
        ))}
        <FitBounds positions={positions} />
      </MapContainer>
    </div>
  );
}
