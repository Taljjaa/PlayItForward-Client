/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginVolunteer
// ====================================================

export interface loginVolunteer_loginVolunteer_errors {
  __typename: "Error";
  path: string;
  message: string | null;
}

export interface loginVolunteer_loginVolunteer_volunteer {
  __typename: "Volunteer";
  id: number;
}

export interface loginVolunteer_loginVolunteer {
  __typename: "LoginResponse";
  ok: boolean;
  errors: loginVolunteer_loginVolunteer_errors[] | null;
  token: string | null;
  volunteer: loginVolunteer_loginVolunteer_volunteer | null;
}

export interface loginVolunteer {
  loginVolunteer: loginVolunteer_loginVolunteer;
}

export interface loginVolunteerVariables {
  username: string;
  password: string;
}
