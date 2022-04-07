import {useState} from "react";

const NumberOfBeings = ({numberOfBeings, triggerNumberOfBeingsUpdate}: {numberOfBeings: number, triggerNumberOfBeingsUpdate: Function}) : JSX.Element =>
{
    return (
        <div>
            <label>
                Number of Beings:
            </label>
            <input type="number" value={numberOfBeings} name="numberOfBeings" onChange={(e) => triggerNumberOfBeingsUpdate(e.target.value)} />
        </div>
    );
}

export default NumberOfBeings;