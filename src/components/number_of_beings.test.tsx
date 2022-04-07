import { render, screen } from '@testing-library/react';
import NumberOfBeings from "./number_of_beings";


test('test Number of Beings label text', () => {
    const testNumber=0
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<NumberOfBeings numberOfBeings={testNumber} triggerNumberOfBeingsUpdate={myMockFn}/>);
    const someText = screen.getByText("Number of Beings:");
    expect(someText).toBeInTheDocument();
});

test('test Number of Beings input 100', () => {
    const testNumber=100
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<NumberOfBeings numberOfBeings={testNumber} triggerNumberOfBeingsUpdate={myMockFn}/>);
    expect(screen.getByLabelText('Number of Beings:')).toHaveValue(testNumber);
});