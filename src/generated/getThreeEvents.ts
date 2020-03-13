/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getThreeEvents
// ====================================================

export interface getThreeEvents_event_nonprofit {
  __typename: 'nonprofit';
  display_name: string;
  logo: string;
}

export interface getThreeEvents_event {
  __typename: 'event';
  image: string | null;
  id: number;
  title: string;
  date: any;
  location: string | null;
  /**
   * An object relationship
   */
  nonprofit: getThreeEvents_event_nonprofit;
}

export interface getThreeEvents {
  /**
   * fetch data from the table: "event"
   */
  event: getThreeEvents_event[];
}
