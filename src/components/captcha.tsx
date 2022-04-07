import {useState} from "react";

const Captcha = ({captcha, triggerCaptchaUpdate}: {captcha: string, triggerCaptchaUpdate: Function}) : JSX.Element =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
//    What is 2 + 2: "4" must be selected. Selecting "Not 4" should display an error.
        if (value === "4")
        {
            return ""
        }
        if (value === "Not 4")
        {
            return "Please recheck"
        }
        if (value === "none")
        {
            return "Please choose an option"
        }

    }

    return (
        <div>
            <label htmlFor="captcha">
                What is 2 + 2:
            </label>
            <select id="captcha" value={captcha} name="captcha" onChange={(e) =>
                {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    triggerCaptchaUpdate(e.target.value)
                }} >
                <div className="error"><i>{errorMessage}</i> </div>
                    <option value="none">none</option>
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
                </select>
            <div className="error"><i>{errorMessage}</i> </div>

        </div>
    );
}

//    What is 2 + 2: "4" must be selected. Selecting "Not 4" should display an error.


export default Captcha;