import React, {Fragment, memo} from 'react';

import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"

import world from './Static/world-50m.json';



const VectorMap = (props) => {

    const include = [
        "ARG", "BOL", "BRA", "CHL", "COL", "ECU",
        "GUY", "PRY", "PER", "SUR", "URY", "VEN",
    ]
    
    const markersImoveis = () => {
        const markers = []
        props.imoveis.map((imv) => {
            const mark = {}
            mark.markerOffset = -10
            mark.coordinates = [imv.longitude, imv.latitude]
            markers.push(mark)
        })
        console.log(markers)
        return markers
    }

    return (
        <Fragment>
            <ComposableMap
                projectionConfig={{scale: 900}}
                width={980}
                height={551}
                style={{
                    width: "100%",
                    height: "auto",
                }}
            >
                <ZoomableGroup center={[ -50, -15 ]} disablePanning>
                    <Geographies geography={world}>
                        {(geographies, projection) =>
                            geographies.map((geography, i) =>
                                include.indexOf(geography.id) !== -1 && (
                                    <Geography
                                        key={i}
                                        geography={geography}
                                        projection={projection}
                                        style={{
                                            default: {
                                                fill: "#e9ecef",
                                                stroke: "#adb5bd",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#CFD8DC",
                                                stroke: "#adb5bd",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "#3f6ad8",
                                                stroke: "#adb5bd",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                )
                            )
                        }
                    </Geographies>
                    <Markers>
                        {markersImoveis().map((marker, i) => (
                            <Marker
                                key={i}
                                marker={marker}
                                style={{
                                    default: { fill: props.markerColor || "#3f6ad8" },
                                    hover: { fill: "#FFFFFF" },
                                    pressed: { fill: props.markerColor || "#3f6ad8" },
                                }}
                            >
                                <circle
                                    cx={0}
                                    cy={0}
                                    r={8}
                                    style={{
                                        stroke: props.markerColor || "#3f6ad8",
                                        strokeWidth: 3,
                                        opacity: 0.9,
                                    }}
                                />
                                <text
                                    textAnchor="middle"
                                    y={marker.markerOffset}
                                    style={{
                                        fontFamily: "Bariol, sans-serif",
                                        fill: "#adb5bd",
                                    }}
                                >
                                    {marker.name}
                                </text>
                            </Marker>
                        ))}
                    </Markers>
                </ZoomableGroup>
            </ComposableMap>
        </Fragment>
    )
}

export default memo(VectorMap)