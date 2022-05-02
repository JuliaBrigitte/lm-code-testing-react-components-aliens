import {useState} from "react";

const PlanetName = ({planetName, triggerPlanetNameUpdate}: {planetName: string, triggerPlanetNameUpdate: Function}) : JSX.Element =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
        //Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
        if ((value.length < 2) ||  (value.length > 49))
        {
            return "Planet Name must be between 2 and 49 characters"
        }
        if (! (/^[A-Za-z0-9 ]*$/.test(value)) )
        {
            return "Numbers are allowed, but no special characters"
        }
        return ""
    }

    return (
        <div>
            <label htmlFor="planetName">
                Planet Name:
            </label>
            <input type="text" value={planetName} name="planetName" id="planetName" onChange={(e) =>
            {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                triggerPlanetNameUpdate(e.target.value)
            }} />
            <div className="error"><i>{errorMessage}</i> </div>
        </div>
    );

}




export default PlanetName;