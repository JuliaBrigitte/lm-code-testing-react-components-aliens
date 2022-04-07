import {useState} from "react";

const NumberOfBeings = ({numberOfBeings, triggerNumberOfBeingsUpdate}: {numberOfBeings: number, triggerNumberOfBeingsUpdate: Function}) : JSX.Element =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: number) =>
    {
        //Number of beings: Numbers ONLY. Must be at least 1,000,000,000.
        if (value < 1000000000)
        {
            return "Must be at least 1,000,000,000"
        }
        if (! (/^[0-9]*$/.test(value.toString())) )
        {
            return "Numbers ONLY"
        }
        return ""
    }

    return (
        <div>
            <label htmlFor="numberOfBeings">
                Number of Beings:
            </label>
            <input id="numberOfBeings" type="number" value={numberOfBeings} name="numberOfBeings" onChange={(e) =>
            {
                const errorMessage = validate(parseInt(e.target.value));
                setErrorMessage(errorMessage);
                triggerNumberOfBeingsUpdate(e.target.value)
            }} />
            <div className="error"><i>{errorMessage}</i> </div>
        </div>
    );
}


export default NumberOfBeings;