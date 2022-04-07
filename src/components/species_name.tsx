import {useState} from "react";

const SpeciesName = ({speciesName, triggerSpeciesNameUpdate}: {speciesName: string, triggerSpeciesNameUpdate: Function}) : JSX.Element =>
{
    return (
        <div>
            <label>
                Species Name:
            </label>
            <input type="text" value={speciesName} name="speciesName" onChange={(e) => triggerSpeciesNameUpdate(e.target.value)} />
        </div>
    );
}

export default SpeciesName;