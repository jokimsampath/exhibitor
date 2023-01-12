export class PowerRequirementTemporaryModel {

    _001: PowerRequirementTemporaryDetailsModel;
  

    constructor() { 
		this._001  =  new PowerRequirementTemporaryDetailsModel();
	}

}

export class PowerRequirementExhibitionModel {

    _001: PowerRequirementExhibitionDetailsModel = null;
    _002: PowerRequirementExhibitionDetailsModel = null;
  

    constructor() { 
		this._001  =  new PowerRequirementExhibitionDetailsModel();
        this._002  =  new PowerRequirementExhibitionDetailsModel();
	}

}

export class PowerRequirementTemporaryDetailsModel {

    slNo: string | number = '';
    chargesPerKwPerDay: any =  1000;
    display: string = '';
    quantity: any = 0;
    numberOfDays: any = 0;
    rate: any = 0;
    code: string = '';

    constructor() { }
    
}

export class PowerRequirementExhibitionDetailsModel {

    slNo: string | number = '';
    typeOfSpace: string = '';
    chargesPerKw4Day: any = 0;
    display: string = '';
    phaseType: string = '';
    quantity: any = 0;
    rate: any = 0;
    code: string = '';

    constructor() { }
    
}

export class PowerRequirementTemporaryRequestModel {

    numberOfDays: any = 0;
    quantity: any = 0;
    rate: any = 0;

    constructor() { }
    
}

export class PowerRequirementExhibitionRequestModel {

    typeOfSpace: string = '';
    phaseType: string = '';
    quantity: any = 0;
    rate: any = 0;

    constructor() { }
    
}

