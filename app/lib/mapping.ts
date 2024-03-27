import config from '@arcgis/core/config'
import ArcGISMap from '@arcgis/core/Map'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import MapView from '@arcgis/core/views/MapView'

config.apiKey = process.env.NEXT_PUBLIC_API_KEY!;

interface MapApp {
    view?: MapView;
    map?: ArcGISMap;
    layer?: FeatureLayer;
    savedExtent?: any;
}

const app: MapApp = {}

let handler: IHandle

export async function init(container: HTMLDivElement): Promise<() => void> {
    if (app.view) {
        app.view.destroy()
    }

    // const layer = new FeatureLayer({
    //     portalItem: {
    //         id: '848d61af726f40d890219042253bedd7'
    //     },
    // })

    const map = new ArcGISMap({
        basemap: 'dark-gray',
    })

    const view = new MapView({
        map,
        container,
        center: [174.763336, -36.848461], // Longitude, latitude
        zoom: 13,
    })

    app.map = map
    // app.layer = layer
    app.view = view

    return cleanup
}

function cleanup() {
    handler?.remove()
    app.view?.destroy()
}