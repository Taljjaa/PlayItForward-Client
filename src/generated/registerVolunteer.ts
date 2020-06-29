/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: registerVolunteer
// ====================================================

export interface registerVolunteer_registerVolunteer_errors {
  __typename: "Error";
  path: string;
  message: string | null;
}

export interface registerVolunteer_registerVolunteer_volunteer {
  __typename: "Volunteer";
  id: number;
}

export interface registerVolunteer_registerVolunteer {
  __typename: "LoginResponse";
  ok: boolean;
  errors: registerVolunteer_registerVolunteer_errors[] | null;
  token: string | null;
  volunteer: registerVolunteer_registerVolunteer_volunteer | null;
}

export interface registerVolunteer {
  registerVolunteer: registerVolunteer_registerVolunteer;
}

export interface registerVolunteerVariables {
  username: string;
  password: string;
  confirmPassword: string;
}
