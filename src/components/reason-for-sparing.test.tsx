import {fireEvent, render, screen} from '@testing-library/react';
import ReasenForSparing from "./reason-for-sparing";
import PlanetName from "./planet-name";


test('Reason for Sparing label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<ReasenForSparing reasonForSparing={testText} triggerReasonForSparingUpdate={myMockFn}/>);
    const someText = screen.getByText("Reason for Sparing:");
    expect(someText).toBeInTheDocument();
});

test('Reason for Sparing validation error', () => {
    const testText="none"
    const myMockFn = jest.fn();
    render(<ReasenForSparing reasonForSparing={testText} triggerReasonForSparingUpdate={myMockFn}/>);
    const reasonForSparing=screen.getByLabelText("Reason for Sparing:")
    fireEvent.change(reasonForSparing, {target: { value: testText }});
    expect(screen.queryByText('Reason must be between 17 and 153 characters')).not.toBeInTheDocument();
});