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
	const [captcha, setCaptcha] = useState<string>("none")
	const [reasonForSparing, setReasonForSparing] = useState<string>("none, we will all die eventually anyway")
	const [formSubmitted, setFormSubmitted] = useState<string>("not yet")

	const [speciesNameSubmitted, setSpeciesNameSubmitted] = useState<string>("")
	const [planetNameSubmitted, setPlanetNameSubmitted] = useState<string>("")
	const [numberOfBeingsSubmitted, setNumberOfBeingsSubmitted] = useState<number>(0)
	const [captchaSubmitted, setCaptchaSubmitted] = useState<string>("")
	const [reasonForSparingSubmitted, setReasonForSparingSubmitted] = useState<string>("")

	// @ts-ignore
	const handleSubmit = (event) => {
		event.preventDefault()
		setFormSubmitted("now it is submitted")
		setSpeciesNameSubmitted(speciesName)
		setPlanetNameSubmitted(planetName)
		setNumberOfBeingsSubmitted(numberOfBeings)
		setCaptchaSubmitted(captcha)
		setReasonForSparingSubmitted(reasonForSparing)
	};

	return (
		<section className='w12MForm'>
			<div className="row">
				<div className="column">

				<p>Input Values Form</p>
				<p>Species Name: {speciesName}</p>
				<p>Planet Name: {planetName}</p>
				<p>Number of Beings: {numberOfBeings}</p>
				<p>What is 2 + 2: {captcha}</p>
				<p>Reason for sparing: {reasonForSparing}</p>
				<p className="submitted">Form submitted: {formSubmitted}</p>

				</div>

				<div className="column">

				<p>Submitted Values</p>
				<p className="submitted">Species Name: {speciesNameSubmitted}</p>
				<p className="submitted">Planet Name: {planetNameSubmitted}</p>
				<p className="submitted">Number of Beings: {numberOfBeingsSubmitted}</p>
				<p className="submitted">What is 2 + 2: {captchaSubmitted}</p>
				<p className="submitted">Reason for sparing: {reasonForSparingSubmitted}</p>
				<p></p>

				</div>
			</div>

			<form>
			<W12MHeader />
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
