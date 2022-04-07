import { render, screen } from '@testing-library/react';
import Captcha from "./captcha";
import NumberOfBeings from "./number_of_beings";


test('test What is 2 + 2 label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<Captcha captcha={testText} triggerCaptchaUpdate={myMockFn}/>);
    const someText = screen.getByText('What is 2 + 2:');
    expect(someText).toBeInTheDocument();
});

test('test What is 2 + 2 input none', () => {
    const testText="none"
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<Captcha captcha={testText} triggerCaptchaUpdate={myMockFn}/>);
    expect(screen.getByLabelText('What is 2 + 2:')).toHaveValue(testText);
});