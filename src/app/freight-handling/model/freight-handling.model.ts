export class SeaFreightHandlingModel {
    _001: SeaFreightHandlingDetailsModel;
	_002: SeaFreightHandlingDetailsModel;
	_003: SeaFreightHandlingDetailsModel;
	_004: SeaFreightHandlingDetailsModel;
	_005: SeaFreightHandlingDetailsModel;
	
	constructor(){
		this._001 = new SeaFreightHandlingDetailsModel();
		this._002 = new SeaFreightHandlingDetailsModel();
		this._003 = new SeaFreightHandlingDetailsModel();
		this._004 = new SeaFreightHandlingDetailsModel();
		this._005 = new SeaFreightHandlingDetailsModel();
	}
}

export class SeaFreightHandlingDetailsModel {
		slNo: string | number = '';
		checked: boolean = false;
		description: string = '';
		rate: string = '';
		code: string = '';
		active: string = '';
}

export class AirFreightHandlingModel {
    _001: AirFreightHandlingDetailsModel;
	_002: AirFreightHandlingDetailsModel;
	_003: AirFreightHandlingDetailsModel;
	_004: AirFreightHandlingDetailsModel;
	_005: AirFreightHandlingDetailsModel;
	
	constructor(){
		this._001 = new AirFreightHandlingDetailsModel();
		this._002 = new AirFreightHandlingDetailsModel();
		this._003 = new AirFreightHandlingDetailsModel();
		this._004 = new AirFreightHandlingDetailsModel();
		this._005 = new AirFreightHandlingDetailsModel();
	}
}

export class AirFreightHandlingDetailsModel {
		slNo: string | number = '';
		checked: boolean = false;
		description: string = '';
		rate: string = '';
		code: string = '';
		active: string = '';
}

export class OnsiteHandling2000kgModel {
    _001: OnsiteHandling2000kgDetailsModel;
	_002: OnsiteHandling2000kgDetailsModel;
	_003: OnsiteHandling2000kgDetailsModel;
	_004: OnsiteHandling2000kgDetailsModel;
	_005: OnsiteHandling2000kgDetailsModel;
	_006: OnsiteHandling2000kgDetailsModel;
	
	constructor(){
		this._001 = new OnsiteHandling2000kgDetailsModel();
		this._002 = new OnsiteHandling2000kgDetailsModel();
		this._003 = new OnsiteHandling2000kgDetailsModel();
		this._004 = new OnsiteHandling2000kgDetailsModel();
		this._005 = new OnsiteHandling2000kgDetailsModel();
		this._006 = new OnsiteHandling2000kgDetailsModel();
	}
}

export class OnsiteHandling2000kgDetailsModel {
		slNo: string | number = '';
		checked: boolean = false;
		description: string = '';
		rate: string = '';
		code: string = '';
		active: string = '';
}


export class OnsiteHandling3000kgModel {
    _001: OnsiteHandling3000kgDetailsModel;
	_002: OnsiteHandling3000kgDetailsModel;
	_003: OnsiteHandling3000kgDetailsModel;
	_004: OnsiteHandling3000kgDetailsModel;
	_005: OnsiteHandling3000kgDetailsModel;
	_006: OnsiteHandling3000kgDetailsModel;
	
	constructor(){
		this._001 = new OnsiteHandling3000kgDetailsModel();
		this._002 = new OnsiteHandling3000kgDetailsModel();
		this._003 = new OnsiteHandling3000kgDetailsModel();
		this._004 = new OnsiteHandling3000kgDetailsModel();
		this._005 = new OnsiteHandling3000kgDetailsModel();
		this._006 = new OnsiteHandling3000kgDetailsModel();
	}
}

export class OnsiteHandling3000kgDetailsModel {
		slNo: string | number = '';
		checked: boolean = false;
		description: string = '';
		rate: string = '';
		code: string = '';
		active: string = '';
}

export class HireEquipmentsModel {
    _001: HireEquipmentsDetailsModel;
	_002: HireEquipmentsDetailsModel;
	_003: HireEquipmentsDetailsModel;
	_004: HireEquipmentsDetailsModel;
	_005: HireEquipmentsDetailsModel;
	_006: HireEquipmentsDetailsModel;
	
	constructor(){
		this._001 = new HireEquipmentsDetailsModel();
		this._002 = new HireEquipmentsDetailsModel();
		this._003 = new HireEquipmentsDetailsModel();
		this._004 = new HireEquipmentsDetailsModel();
		this._005 = new HireEquipmentsDetailsModel();
		this._006 = new HireEquipmentsDetailsModel();
	}
}

export class HireEquipmentsDetailsModel {
		slNo: string | number = '';
		checked: boolean = false;
		description: string = '';
        capacity: string = '';
		rate: string = '';
		code: string = '';
		active: string = '';
}

export class HeavyLiftSurchargesModel {
    _001: HeavyLiftSurchargesDetailsModel;
	_002: HeavyLiftSurchargesDetailsModel;
	_003: HeavyLiftSurchargesDetailsModel;
	
	constructor(){
		this._001 = new HeavyLiftSurchargesDetailsModel();
		this._002 = new HeavyLiftSurchargesDetailsModel();
		this._003 = new HeavyLiftSurchargesDetailsModel();
	}
}

export class HeavyLiftSurchargesDetailsModel {
		slNo: string | number = '';
		checked: boolean = false;
		description: string = '';
		rate: string = '';
		code: string = '';
		active: string = '';
}