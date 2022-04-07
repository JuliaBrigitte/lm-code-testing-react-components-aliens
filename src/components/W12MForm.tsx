import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from "./species_name";
import PlanetName from "./planet-name";
import NumberOfBeings from "./number_of_beings";
import ReasonForSparing from "./reason-for-sparing";
import Captcha from "./captcha";



const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState<string>("")
	const [planetName, setPlanetName] = useState<string>("")
	const [numberOfBeings, setNumberOfBeings] = useState<number>(0)
	const [captcha, setCaptcha] = useState<string>("")
	const [reasonForSparing, setReasonForSparing] = useState<string>("")
	const [formSubmitted, setFormSubmitted] = useState<string>("not yet")

	// @ts-ignore
	const handleSubmit = (event) => {
		event.preventDefault()
		setFormSubmitted("now it is submitted")
	};

	return (
		<section className='w12MForm'>
			<p>Input Values Form</p>
			<p>Species Name: {speciesName}</p>
			<p>Planet Name: {planetName}</p>
			<p>Number of Beings: {numberOfBeings}</p>
			<p>What is 2 + 2: {captcha}</p>
			<p>Reason for sparing: {reasonForSparing}</p>
			<p>Form submitted: {formSubmitted}</p>
			<form>
			{/*<W12MHeader />*/}
			{/*/!* REST OF FORM GOES HERE *!/*/}
			{/*Species Name	text input tag*/}
			<SpeciesName speciesName={speciesName} triggerSpeciesNameUpdate={setSpeciesName}/>
			{/*Planet Name	text input tag*/}
			<PlanetName planetName={planetName} triggerPlanetNameUpdate={setPlanetName}/>
			{/*Number of beings	text input tag*/}
			<NumberOfBeings numberOfBeings={numberOfBeings} triggerNumberOfBeingsUpdate={setNumberOfBeings}/>
			{/*What is 2 + 2	select tag	two option tags: "4", "Not 4"*/}
			<Captcha captcha={captcha} triggerCaptchaUpdate={setCaptcha}/>
			{/*Reason for sparing	textarea tag*/}
			<ReasonForSparing reasonForSparing={reasonForSparing} triggerReasonForSparingUpdate={setReasonForSparing}/>
			<input type="submit" value="Submit" onClick={(event) => handleSubmit(event)} />
			</form>
		</section>
	);
};

export default W12MForm;
