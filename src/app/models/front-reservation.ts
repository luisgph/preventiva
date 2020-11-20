import { headerInfo, passengersInfo, specialServicesInfo, frequentTravellersInfo , itinerariesInfo, motivesInfo} from "./models";

export interface frontReservation {
  headerInfo: headerInfo;
  passengersInfo: passengersInfo[];
  specialServicesInfo: specialServicesInfo[];
  frequentTravellersInfo: frequentTravellersInfo[];
  itinerariesInfo: itinerariesInfo[];
  motivesInfo: motivesInfo[];
  urlCrm: string;
  case_Id: string;
}
