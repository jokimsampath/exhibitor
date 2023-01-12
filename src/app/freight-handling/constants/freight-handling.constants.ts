export class FreightHandlingConstants {

    public static seaFreight = [
        { description: 'For transport from “IN” gate of the Exhibition to  Exhibition stand including unloading.', 	code: '001', rate: 'Euro 35.00 /CBM(Min. charge Euro 35.00)' },
        { description: 'Unpacking charges',																			code: '002', rate: 'Euro 10.00 /CBM(Min. charge Euro 10.00)' },
        { description: 'Removal of Empties, Storage and Return of Empties',											code: '003', rate: 'Euro 10.00 /CBM(Min. charge Euro 10.00)' },
        { description: 'Re-packing charges', 																		code: '004', rate: 'Euro 10.00 /CBM(Min. charge Euro 10.00)' },
        { description: "From Exhibition stand to clients Vehicle (including loading)",							    code: '005', rate: 'Euro 35.00 /CBM(Min. charge Euro 35.00)' } 
    ];  

	public static airFreight = [
        { description: 'For transport from “IN” gate of the Exhibition to  Exhibition stand including unloading.', 	code: '001', rate: 'Euro 0.35 /KG Min. charge Euro 35.00)' },
        { description: 'Unpacking charges',																			code: '002', rate: 'Euro 0.10 /KG(Min. charge Euro 10.00)' },
        { description: 'Removal of Empties, Storage and Return of Empties',											code: '003', rate: 'Euro 10 /CBM(Min. charge Euro 10.00)' },
        { description: 'Re-packing charges', 																		code: '004', rate: 'Euro 0.10 /KG(Min. charge Euro 10.00)' },
        { description: "From Exhibition stand to client's Vehicle (including loading)",							    code: '005', rate: 'Euro 0.35 /KG(Min. charge Euro 35.00)' } 
    ];                                                                                                             
	
    public static onsiteHandling2000kg = [                                                                                          
        { description: 'Offloading and Shifting to Booth ', 														code: '001', rate: 'Rs.250/- per 500 kgs or part there off.' },
        { description: 'Unpacking & Placement of Exhibits ', 														code: '002', rate: 'Rs.200/- per 500 kgs or part there off.' },
        { description: 'Positioning & Re-positioning ', 															code: '003', rate: 'Rs.250/- per 500 kgs Minimum Rs.250 of the exhibits (each time)' },
        { description: 'Removal of empties for storage & Return of empty cases after the close of exhibition', 		code: '004', rate: 'Rs.200/- per CBM' },
        { description: 'Repacking of Exhibits ', 																	code: '005', rate: 'Rs.200/- per 500 kgs or part there off.' },
        { description: 'Shifting from Booth & Loading ', 															code: '006', rate: 'Rs.250/- per 500 kgs or part there off.' }
    ];                                                                                                               
																													 
    public static onsiteHandling3000kg = [                                                                                          
        { description: 'Offloading and Shifting to Booth', 															code: '001', rate: 'Rs.300/- per 500 kgs or part there off.' },
        { description: 'Unpacking & Placement of Exhibits', 														code: '002', rate: 'Rs.250/- per 500 kgs or part there off.' },
        { description: 'Positioning & Re-positioning', 																code: '003', rate: 'Rs.250/- per 500 kgs Minimum Rs.250 of the exhibits (each time)' },
        { description: 'Removal of empties for storage & Return of empty cases after the close of exhibition', 		code: '004', rate: 'Rs.200/- per CBM' },
        { description: 'Repacking of Exhibits', 																	code: '005', rate: 'Rs.250/- per 500 kgs or part there off.' },
        { description: 'Shifting from Booth & Loading', 															code: '006', rate: 'Rs.300/- per 500 kgs or part there off.' }
    ];

    public static hireEquipments = [
        { description: 'Hydraulic Pallet', 		capacity: '02 - Ton Capacity', code: '001', rate: 'Rs.100 per hour - Minimum 2 hours' }, 
        { description: 'Fork Lift', 			capacity: '03 - Ton Capacity', code: '002', rate: 'Rs.300 per hour - Minimum 2 hours' }, 
        { description: 'Fork Lift', 			capacity: '05 - Ton Capacity', code: '003', rate: 'Rs.400 per hour - Minimum 2 hours' }, 
        { description: 'Fork Lift', 			capacity: '10 - Ton Capacity', code: '004', rate: 'Rs.500 per hour - Minimum 2 hours' }, 
        { description: 'Crane', 				capacity: '10 - Ton Capacity', code: '005', rate: 'Rs.1,000 per hour - Minimum 2 hours' }, 
        { description: 'Labour', 											   code: '006', rate: 'Rs.60 per hour per man - Minimum 2 hours' }
    ];

    public static heavyLiftSurcharges = [
        { description: 'For single piece weighing more than 5000 kgs :', 	code: '001', rate: 'Surcharge 10 % extra' },
        { description: 'For single piece weighing more than 10000 kgs :', 	code: '002', rate: 'Surcharge 20% extra' },
        { description: 'For single piece weighing more than 15000 kgs :',	code: '003', rate: 'Surcharge 30% extra' }
    ];

}
