import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import "./style/SightingDetails.css";
import "../../node_modules/ol/ol.css";
import VectorSource from "ol/source/Vector";
import { fromLonLat, Projection } from "ol/proj";
import { Icon, Style } from "ol/style";
import markerIceon from "../images/pl-icon-location.png";
import { defaults } from "ol/control";
function SightingDetails() {
    let { id } = useParams();

    useEffect(() => {
        initMap();
    }, []);

    return (
        <div className="sighting-details-content">
            <div id="map" className="map"></div>
        </div>
    );

    function initMap() {
        const iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 150],
                anchorXUnits: "fraction",
                anchorYUnits: "pixels",
                src: markerIceon,
                scale: [0.3, 0.3],
            }),
        });
        const iconFeature = new Feature({});
        iconFeature.setStyle(iconStyle);

        const markers = new VectorLayer({
            source: new VectorSource(),
        });

        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([14.505751, 46.056946]),
                zoom: 18,
                maxZoom: 20,
                minZoom: 10,
            }),
            controls: defaults({
                attribution: false,
                zoom: false,
            }),
        });

        map.addLayer(markers);

        const marker = new Feature(
            new Point(fromLonLat([14.505751, 46.056946]))
        );
        markers.getSource().addFeature(marker);
        markers.setStyle(iconStyle);
    }
}

export default SightingDetails;
