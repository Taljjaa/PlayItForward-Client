/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEvents
// ====================================================

export interface getEvents_getEvents_nonprofit {
  __typename: "Nonprofit";
  displayName: string;
}

export interface getEvents_getEvents {
  __typename: "Event";
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  nonprofit: getEvents_getEvents_nonprofit;
}

export interface getEvents {
  getEvents: getEvents_getEvents[];
}
