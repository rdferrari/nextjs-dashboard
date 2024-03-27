'use client'
import { useEffect, useRef, useState } from "react";

async function loadMap(container: HTMLDivElement) {
    const { init } = await import("../../lib/mapping");
    init(container);
}

export default function WebMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded && mapRef.current) {
            setLoaded(true);
            loadMap(mapRef.current);
        }
    }, [mapRef, loaded]);

    return (
        <section className="h-full w-full">
            <div className="h-full w-full" ref={mapRef}></div>
        </section>
    );
}