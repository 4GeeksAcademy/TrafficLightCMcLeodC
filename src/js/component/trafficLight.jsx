import React, { useState, useEffect } from "react";

const TrafficLight = () => {
	const [colorRed, setColorRed] = useState("bg-danger opacity-50")
	const [colorOrange, setColorOrange] = useState("bg-warning opacity-50")
	const [colorGreen, setColorGreen] = useState("bg-success opacity-50")
	const [activeInterval, setActiveInterval] = useState(false)

	function changeColorRed() {
		setColorRed("bg-danger")
		setColorOrange("bg-warning opacity-50")
		setColorGreen("bg-success opacity-50")
	}

	function changeColorOrange() {
		setColorOrange("bg-warning")
		setColorRed("bg-danger opacity-50")
		setColorGreen("bg-success opacity-50")
	}

	function changeColorGreen() {
		setColorGreen("bg-success")
		setColorRed("bg-danger opacity-50")
		setColorOrange("bg-warning opacity-50")
	}

	useEffect(() => {
		let interval
		if (activeInterval) {
			interval = setInterval(() => {
				changeColorRed();
				setTimeout(() => changeColorOrange(), 3000); 
				setTimeout(() => changeColorGreen(), 6000); 
			  }, 9000);
		}
		
		if (activeInterval) {
			changeColorRed();
			setTimeout(() => changeColorOrange(), 3000); 
			setTimeout(() => changeColorGreen(), 6000); 
		}
		
		return () => clearInterval(interval);
	  }, [activeInterval]);

	  	const buttonClick = () => {
			if (activeInterval === true) {
				setActiveInterval(false)
			}
			else {
			setActiveInterval(true)
			}
		}

	return (
		<>
			<div className="trafficLight container bg-black">
				<div className={`redLight bg-secondary rounded-circle ${colorRed}`} onClick={changeColorRed}>red</div>
				<div className={`orangeLight bg-warning rounded-circle ${colorOrange}`} onClick={changeColorOrange}>yellow</div>
				<div className={`redLight bg-success rounded-circle ${colorGreen}`} onClick={changeColorGreen} ></div>
			</div>
			<button type="button" className="btn btn-dark" aria-pressed="true" onClick={buttonClick}>Cycle Lights</button>
		</>
	);
};

export default TrafficLight;