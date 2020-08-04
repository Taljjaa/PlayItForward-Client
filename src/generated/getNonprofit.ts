/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNonprofit
// ====================================================

export interface getNonprofit_getNonprofit_events_volunteers {
  __typename: 'Volunteer';
  id: number;
}

export interface getNonprofit_getNonprofit_events {
  __typename: 'Event';
  id: number;
  title: string;
  location: string;
  date: string;
  volunteers: getNonprofit_getNonprofit_events_volunteers[];
}

export interface getNonprofit_getNonprofit {
  __typename: 'Nonprofit';
  displayName: string;
  logo: string;
  events: getNonprofit_getNonprofit_events[];
}

export interface getNonprofit {
  getNonprofit: getNonprofit_getNonprofit;
}

export interface getNonprofitVariables {
  id: number;
}
