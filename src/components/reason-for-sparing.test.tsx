import { render, screen } from '@testing-library/react';
import ReasenForSparing from "./reason-for-sparing";


test('Reason for Sparing label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<ReasenForSparing reasonForSparing={testText} triggerReasonForSparingUpdate={myMockFn}/>);
    const someText = screen.getByText("Reason for Sparing:");
    expect(someText).toBeInTheDocument();
});