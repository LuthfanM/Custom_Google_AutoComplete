import RNLocation from 'react-native-location';

class RNLocationClass {

	constructor(
		
	) { }

	get isInitialize() {
		return this.appInitialize;
	}

	static getInstance() {
		if (!RNLocationClass.instance) {
			RNLocationClass.instance = new RNLocationClass();
		}
		return RNLocationClass.instance;
	}

	setInitialize() {
		this.appInitialize = true;
	}

	setMasterDataInitialize() {
		this.masterDataInitialize = true;
	}
}

const rnLocationInstance = RNLocationClass.getInstance();

let quiting = false;

if (!rnLocationInstance.isInitialize) {
	
	RNLocation.configure({
		distanceFilter: 100
	})
	
	rnLocationInstance.setInitialize();
}

