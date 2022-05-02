import {useState} from "react";

const ReasonForSparing = ({reasonForSparing, triggerReasonForSparingUpdate}: {reasonForSparing: string, triggerReasonForSparingUpdate: Function})  =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
        //Reason for sparing: Must be between 17 and 153 characters.
        if ((value.length < 17) ||  (value.length > 153))
        {
            return "Reason must be between 17 and 153 characters"
        }
        return ""

    }

    return (
        <div>
            <label htmlFor="reasonForSparing">
                Reason for Sparing:
            </label>
            <textarea value={reasonForSparing} name="reasonForSparing" id="reasonForSparing" onChange={(e) =>
            {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                triggerReasonForSparingUpdate(e.target.value)
            }} />
            <div className="error"><i>{errorMessage}</i> </div>
        </div>
    );
}

//Reason for sparing: Must be between 17 and 153 characters.

export default ReasonForSparing;