/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNonprofitData
// ====================================================

export interface getNonprofitData_nonprofit_events_event_volunteers {
  __typename: 'event_volunteers';
  id: number;
}

export interface getNonprofitData_nonprofit_events {
  __typename: 'event';
  /**
   * An array relationship
   */
  event_volunteers: getNonprofitData_nonprofit_events_event_volunteers[];
}

export interface getNonprofitData_nonprofit {
  __typename: 'nonprofit';
  display_name: string;
  logo: string;
  /**
   * An array relationship
   */
  events: getNonprofitData_nonprofit_events[];
}

export interface getNonprofitData {
  /**
   * fetch data from the table: "nonprofit"
   */
  nonprofit: getNonprofitData_nonprofit[];
}
