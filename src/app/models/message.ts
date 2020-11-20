import { frontReservation, stateManagement, site, frontLoginResponse, token } from "./models";
import { ValidationListModel } from "./validation-list-model";
import { ContactType } from "./ContactType";
import { AffectationTypeByHistories } from "./affectation-type-by-histories";

export interface message {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: frontReservation;
}

export interface messageStateManagement {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: stateManagement;
}

export interface messageChangeStateManagement {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: string;
}

export interface messageSaveOutboundReservation {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: string;
}

export interface messageSaveInboundReservation {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: string;
}

export interface messageChangeUserStateManagementToDisconect {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: string;
}

export interface messageSite {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: site;
}

export interface messageLogin {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: frontLoginResponse;
}

export interface messageToken {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: token;
}

export interface messageValidationListModel {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: ValidationListModel;
}

export interface messageContactTypeModel {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: ContactType;
}

export interface messageAffectationTypeByHistories{
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: AffectationTypeByHistories;
}

export interface messageSaveIropsReservation {
  IsSuccess: boolean;
  ReturnMessage: string;
  Data: string;
}
