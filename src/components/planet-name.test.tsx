import {fireEvent, render, screen} from '@testing-library/react';
import PlanetName from "./planet-name";
import SpeciesName from "./species_name";


test('test planet Name label text', () => {
    const testText="Mars"
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<PlanetName planetName={testText} triggerPlanetNameUpdate={myMockFn}/>);
    const someText = screen.getByText("Planet Name:");
    expect(someText).toBeInTheDocument();
});

test('test Planet Name validation text Earth', () => {
    const testText="Earth"
    const myMockFn = jest.fn();
    render(<PlanetName planetName="" triggerPlanetNameUpdate={myMockFn}/>);
    const planetName=screen.getByLabelText("Planet Name:")
    fireEvent.change(planetName, {target: { value: testText }});
    expect(screen.queryByText('Planet Name must be between 2 and 49 characters')).not.toBeInTheDocument();
});

test('test Planet Name validation only 1 Char', () => {
    const testText="E"
    const myMockFn = jest.fn();
    render(<PlanetName planetName="" triggerPlanetNameUpdate={myMockFn}/>);
    const planetName=screen.getByLabelText("Planet Name:")
    fireEvent.change(planetName, {target: { value: testText }});
    const someText = screen.getByText('Planet Name must be between 2 and 49 characters');
    expect(someText).toBeInTheDocument();
});

test('test Planet Name validation text VEryLognPlanetNamefjadslfjlkadsjflkajfdklsjfldkasjflkasjdf', () => {
    const testText="VEryLognPlanetNamefjadslfjlkadsjflkajfdklsjfldkasjflkasjdf"
    const myMockFn = jest.fn();
    render(<PlanetName planetName="" triggerPlanetNameUpdate={myMockFn}/>);
    const planetName=screen.getByLabelText("Planet Name:")
    fireEvent.change(planetName, {target: { value: testText }});
    const someText = screen.getByText('Planet Name must be between 2 and 49 characters');
    expect(someText).toBeInTheDocument();
});
