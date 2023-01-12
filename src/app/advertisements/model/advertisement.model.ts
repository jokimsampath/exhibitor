export class AdvertisementModel {

    _001: AdvertisementDetailsModel;
    _002: AdvertisementDetailsModel;
    _003: AdvertisementDetailsModel;
    _004: AdvertisementDetailsModel;
    _005: AdvertisementDetailsModel;
    _006: AdvertisementDetailsModel;
    _007: AdvertisementDetailsModel;
  

    constructor() { 
		this._001  =  new AdvertisementDetailsModel();
		this._002  =  new AdvertisementDetailsModel();
		this._003  =  new AdvertisementDetailsModel();
		this._004  =  new AdvertisementDetailsModel();
		this._005  =  new AdvertisementDetailsModel();
		this._006  =  new AdvertisementDetailsModel();
		this._007  =  new AdvertisementDetailsModel();
	}

}

export class AdvertisementDetailsModel {

    slNo: string | number = '';
    code: string = '';
    checked: boolean = false;
    type: string = '';
    rateInr: string | number = '';
    rateUsd: string = '';
    active: string = '0';

    constructor() { }
    
}
