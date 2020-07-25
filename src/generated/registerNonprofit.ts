/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: registerNonprofit
// ====================================================

export interface registerNonprofit_registerNonprofit_errors {
  __typename: 'Error';
  path: string;
  message: string | null;
}

export interface registerNonprofit_registerNonprofit_nonprofit {
  __typename: 'Nonprofit';
  id: number;
}

export interface registerNonprofit_registerNonprofit {
  __typename: 'LoginResponse';
  ok: boolean;
  errors: registerNonprofit_registerNonprofit_errors[] | null;
  token: string | null;
  nonprofit: registerNonprofit_registerNonprofit_nonprofit | null;
}

export interface registerNonprofit {
  registerNonprofit: registerNonprofit_registerNonprofit;
}

export interface registerNonprofitVariables {
  username: string;
  password: string;
  mission: string;
  description: string;
  displayName: string;
  contact: string;
  file?: any | null;
}
