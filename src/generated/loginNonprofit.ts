/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginNonprofit
// ====================================================

export interface loginNonprofit_loginNonprofit_errors {
  __typename: "Error";
  path: string;
  message: string | null;
}

export interface loginNonprofit_loginNonprofit_nonprofit {
  __typename: "Nonprofit";
  id: number;
}

export interface loginNonprofit_loginNonprofit {
  __typename: "LoginResponse";
  ok: boolean;
  errors: loginNonprofit_loginNonprofit_errors[] | null;
  token: string | null;
  nonprofit: loginNonprofit_loginNonprofit_nonprofit | null;
}

export interface loginNonprofit {
  loginNonprofit: loginNonprofit_loginNonprofit;
}

export interface loginNonprofitVariables {
  username: string;
  password: string;
}
