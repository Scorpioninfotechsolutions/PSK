import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Crosshair } from 'lucide-react';

// Fix for marker icon issues in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Custom CSS for Leaflet map integration
import './Map.css';

// Fix Leaflet's default icon path issues
let DefaultIcon = L.Icon.extend({
  options: {
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }
});

L.Marker.prototype.options.icon = new DefaultIcon();

interface MapProps {
  coordinates: [number, number];
}

const Map = ({ coordinates }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const openGoogleMapsDirections = (coords: [number, number]) => {
    // Convert coordinates to string format that Google Maps expects
    // Leaflet uses [lat, lng] format but Google Maps expects "lat,lng"
    const destination = `${coords[0]},${coords[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  const centerOnMarker = () => {
    if (!mapRef.current) return;
    
    mapRef.current.setView([coordinates[0], coordinates[1]], 16, {
      animate: true,
      duration: 1.5 // seconds
    });
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map if it doesn't exist
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainer.current, {
        zoomControl: false, // We'll add custom zoom controls if needed
        attributionControl: true,
      }).setView([coordinates[0], coordinates[1]], 16);
      
      // Add a cleaner, light-themed OpenStreetMap tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapRef.current);
      
      // Create marker with a slightly better appearance
      markerRef.current = L.marker([coordinates[0], coordinates[1]], {
        alt: "Location marker"
      }).addTo(mapRef.current);
      
      // Add popup with consistent styling
      const popup = L.popup({
        closeButton: false,
        offset: [0, 15],
        className: 'custom-popup'
      }).setContent(
        '<div class="px-2 py-1 bg-black/80 text-white font-medium text-sm rounded-md shadow-lg border border-white/20">Click here for directions</div>'
      );
      
      // Show popup on hover
      markerRef.current.on('mouseover', function(e) {
        this.bindPopup(popup).openPopup();
      });
      
      markerRef.current.on('mouseout', function(e) {
        this.closePopup();
      });
      
      // Add click event to marker
      markerRef.current.on('click', function() {
        openGoogleMapsDirections([coordinates[0], coordinates[1]]);
      });
    } else {
      // Update marker position if map already exists
      markerRef.current?.setLatLng([coordinates[0], coordinates[1]]);
      mapRef.current.setView([coordinates[0], coordinates[1]], 16);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordinates]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Map Controls Container */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {/* Locate Marker Button */}
        <button
          onClick={centerOnMarker}
          className="bg-black/80 p-2 rounded-md hover:bg-black/90 transition-all duration-200 
                   text-white border border-white/20 shadow-lg backdrop-blur-sm"
          title="Center on Location"
        >
          <Crosshair className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Map;
