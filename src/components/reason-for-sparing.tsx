import {useState} from "react";

const ReasonForSparing = ({reasonForSparing, triggerReasonForSparingUpdate}: {reasonForSparing: string, triggerReasonForSparingUpdate: Function}) : JSX.Element =>
{
    return (
        <div>
            <label>
                Reason for Sparing:
            </label>
            <textarea value={reasonForSparing} name="reasonForSparing" onChange={(e) => triggerReasonForSparingUpdate(e.target.value)} />
        </div>
    );
}

export default ReasonForSparing;