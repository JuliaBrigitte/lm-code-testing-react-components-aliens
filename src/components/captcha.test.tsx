import { render, screen } from '@testing-library/react';
import Captcha from "./captcha";


test('test planet Name label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<Captcha captcha={testText} triggerCaptchaUpdate={myMockFn}/>);
    const someText = screen.getByText('What is 2 + 2:');
    expect(someText).toBeInTheDocument();
});