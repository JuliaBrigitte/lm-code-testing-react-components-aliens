import {useState} from "react";

const Captcha = ({captcha, triggerCaptchaUpdate}: {captcha: string, triggerCaptchaUpdate: Function}) : JSX.Element =>
{
    return (
        <div>
            <label>
                What is 2 + 2:
            </label>
            <select value={captcha} name="captcha" onChange={(e) => triggerCaptchaUpdate(e.target.value)}>
                    <option value="none">none</option>
                    <option value="2">2</option>
                    <option value="Not 2">Not 2</option>
                </select>
        </div>
    );
}

export default Captcha;