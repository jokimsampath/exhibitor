export class SponsorshipOpportunitiesModel {

    VisitorsBags: SponsorshipOpportunitiesDetailsModel;
    BrandedPens: SponsorshipOpportunitiesDetailsModel;
    ExhibitorsKits: SponsorshipOpportunitiesDetailsModel;
    Lanyard: SponsorshipOpportunitiesDetailsModel;
    Signage: SponsorshipOpportunitiesDetailsModel;
    Seminar: SponsorshipOpportunitiesDetailsModel;
    InformationBooths: SponsorshipOpportunitiesDetailsModel;
    WaterBooths: SponsorshipOpportunitiesDetailsModel;
    GolfCarts: SponsorshipOpportunitiesDetailsModel;
    AdvertisementFairGuide: SponsorshipOpportunitiesDetailsModel;
    SponsorshipCdPenDrive: SponsorshipOpportunitiesDetailsModel;

    constructor() {
        this.VisitorsBags = new SponsorshipOpportunitiesDetailsModel();
        this.BrandedPens = new SponsorshipOpportunitiesDetailsModel();
        this.ExhibitorsKits = new SponsorshipOpportunitiesDetailsModel();
        this.Lanyard = new SponsorshipOpportunitiesDetailsModel();
        this.Signage = new SponsorshipOpportunitiesDetailsModel();
        this.Seminar = new SponsorshipOpportunitiesDetailsModel();
        this.InformationBooths = new SponsorshipOpportunitiesDetailsModel();
        this.WaterBooths = new SponsorshipOpportunitiesDetailsModel();
        this.GolfCarts = new SponsorshipOpportunitiesDetailsModel();
        this.AdvertisementFairGuide = new SponsorshipOpportunitiesDetailsModel();
        this.SponsorshipCdPenDrive = new SponsorshipOpportunitiesDetailsModel();
    }
}

export class SponsorshipOpportunitiesDetailsModel {

    slNo: string | number = '';
    checked: boolean = false;
    event: string = '';
    noOfSponsors: string | number = '';
    tarrif: string = '';
    active: string = '';

    constructor() {

    }
}
