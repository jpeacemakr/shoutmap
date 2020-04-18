import { Plugins } from '@capacitor/core';
import { useState, useEffect } from "react";




export function useGPS() {

	//creates GPS in state and sets default to 0.0
	const [GPS, setGPS] = useState<Number>(0.0);





	const { Geolocation } = Plugins;


	const newGPS = async () => {
		const coordinates = await Geolocation.getCurrentPosition();
		console.log('Current', coordinates);
	}




	return {
	    newGPS
	};

	



}