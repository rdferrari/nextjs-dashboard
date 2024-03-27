'use client'
import React, { useRef, useEffect } from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';

const ARCGIS_KEY = "AAPK223bdd7f24bc4d25a11bd956bd88f0c0VdmhHo7RVSt_Y6yaeeUg9Zn5Xx-T_fAsss7coD9AeSsYxXDgTgZ37nGFt9ThzBHU"

export default function EsriMap() {
    const mapDiv = useRef(null);

    useEffect(() => {
        /**
         * Initialize application
         */
        if (mapDiv.current) {
            /**
             * Make sure to follow the documented best practices for managing API KEYs, including
             * one per app, frequent rotations, restrictive scopes and referrers, and monitoring usage.
             * https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys
             */
            esriConfig.apiKey = ARCGIS_KEY; // add your key to .env.local and uncomment this line

            const map = new ArcGISMap({
                basemap: "arcgis/topographic"
            });

            console.log(map)

            const view = new MapView({
                map: map,
                center: [-118.805, 34.027], // Longitude, latitude
                zoom: 13, // Zoom level
                container: mapDiv.current // Div element
            });


        }
    }, []);

    return <div className="mapDiv" ref={mapDiv}></div>;
}