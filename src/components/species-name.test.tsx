import {fireEvent, render, screen} from '@testing-library/react';
import SpeciesName from "./species_name";
import userEvent from "@testing-library/user-event";


test('test Species Name label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<SpeciesName speciesName={testText} triggerSpeciesNameUpdate={myMockFn}/>);
    const someText = screen.getByText("Species Name:");
    expect(someText).toBeInTheDocument();
});

test('test Species Name validation text Human', () => {
    const testText="Human"
    const myMockFn = jest.fn();
    render(<SpeciesName speciesName="" triggerSpeciesNameUpdate={myMockFn}/>);
    const speciesName=screen.getByLabelText("Species Name:")
    fireEvent.change(speciesName, {target: { value: testText }});
    expect(screen.queryByText('Species Name must be between 2 and 23 characters')).not.toBeInTheDocument();
});

test('test Species Name validation only 1 Char', () => {
    const testText="J"
    const myMockFn = jest.fn();
    render(<SpeciesName speciesName="" triggerSpeciesNameUpdate={myMockFn}/>);
    const speciesName=screen.getByLabelText("Species Name:")
    fireEvent.change(speciesName, {target: { value: testText }});
    const someText = screen.getByText('Species Name must be between 2 and 23 characters');
    expect(someText).toBeInTheDocument();
});

test('test Species Name validation text Huhuhuhuhuhuhuhuhuhuhuhuhu', () => {
    const testText="Huhuhuhuhuhuhuhuhuhuhuhuhu"
    const myMockFn = jest.fn();
    render(<SpeciesName speciesName="" triggerSpeciesNameUpdate={myMockFn}/>);
    const speciesName=screen.getByLabelText("Species Name:")
    fireEvent.change(speciesName, {target: { value: testText }});
    const someText = screen.getByText('Species Name must be between 2 and 23 characters');
    expect(someText).toBeInTheDocument();
});

