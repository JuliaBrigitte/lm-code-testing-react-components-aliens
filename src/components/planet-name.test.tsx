import { render, screen } from '@testing-library/react';
import PlanetName from "./planet-name";


test('test planet Name label text', () => {
    const testText="Mars"
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<PlanetName planetName={testText} triggerPlanetNameUpdate={myMockFn}/>);
    const someText = screen.getByText("Planet Name:");
    expect(someText).toBeInTheDocument();
});