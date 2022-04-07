import { render, screen } from '@testing-library/react';
import SpeciesName from "./species_name";


test('test Species Name label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<SpeciesName speciesName={testText} triggerSpeciesNameUpdate={myMockFn}/>);
    const someText = screen.getByText("Species Name:");
    expect(someText).toBeInTheDocument();
});