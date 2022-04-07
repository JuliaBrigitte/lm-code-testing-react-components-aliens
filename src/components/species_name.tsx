import {useState} from "react";

const SpeciesName = ({speciesName, triggerSpeciesNameUpdate}: {speciesName: string, triggerSpeciesNameUpdate: Function}) : JSX.Element =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
        //Species Name: Must be between 3 and 23 characters. No numbers or special characters allowed!
        if ((value.length < 2) ||  (value.length > 23))
        {
            return "Species Name must be between 2 and 23 characters"
        }
        if (! (/^[A-Za-z ]*$/.test(value)) )
        {
            return "No numbers or special characters allowed"
        }
        return ""
    }

    return (
        <div>
            <label>
                Species Name:
            </label>
            <input type="text" value={speciesName} name="speciesName" onChange={(e) =>
            {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                triggerSpeciesNameUpdate(e.target.value)
            }} />
            <div className="error"><i>{errorMessage}</i> </div>
        </div>

);
}



export default SpeciesName;