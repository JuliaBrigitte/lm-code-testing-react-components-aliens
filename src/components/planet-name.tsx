import {useState} from "react";

const PlanetName = ({planetName, triggerPlanetNameUpdate}: {planetName: string, triggerPlanetNameUpdate: Function}) : JSX.Element =>
{
    return (
        <div>
            <label>
                Planet Name:
            </label>
            <input type="text" value={planetName} name="planetName" onChange={(e) => triggerPlanetNameUpdate(e.target.value)} />
        </div>
    );
}

export default PlanetName;