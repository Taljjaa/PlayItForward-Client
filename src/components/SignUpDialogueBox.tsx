// React imports
import React, { useState, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import UploadFile from './UploadFile';

// Type definitions
type DialogueProps = {
  isVolunteer: boolean;
  setIsVolunteer: any;
};

const REGISTER_VOLUNTEER = gql`
  mutation registerVolunteer($username: String!, $password: String!) {
    registerVolunteer(username: $username, password: $password) {
      ok
      errors {
        path
        message
      }
      token
      volunteer {
        id
      }
    }
  }
`;

const REGISTER_NONPROFIT = gql`
  mutation registerNonprofit(
    $username: String!
    $password: String!
    $mission: String!
    $description: String!
    $displayName: String!
    $contact: String!
  ) {
    registerNonprofit(
      username: $username
      password: $password
      mission: $mission
      description: $description
      displayName: $displayName
      contact: $contact
    ) {
      ok
      errors {
        path
        message
      }
      token
      nonprofit {
        id
      }
    }
  }
`;

// Structure
// Header, Text Fields, Radio Selection, Submit
const SignUpDialogueBox = (props: DialogueProps) => {
  const [matching, setMatching] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mission, setMission] = useState('');
  const [description, setDescription] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [contact, setContact] = useState('');
  const [icon, setIcon] = useState<File | null>(null);

  const client = useApolloClient();
  let history = useHistory();

  const [registerVolunteer] = useMutation(REGISTER_VOLUNTEER);
  const [registerNonprofit] = useMutation(REGISTER_NONPROFIT);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPassword(e.target.value);
    if (e.target.value === confirmPassword) {
      setMatching(true);
    } else {
      setMatching(false);
    }
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setMatching(true);
    } else {
      setMatching(false);
    }
  };

  const onChangeMission = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setMission(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setDescription(e.target.value);
  };

  const onChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setDisplayName(e.target.value);
  };

  const onChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setContact(e.target.value);
  };

  const onIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    console.log(e.target.files![0]);
    setIcon(e.target.files![0]);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (props.isVolunteer) {
      let volunteerData = await registerVolunteer({
        variables: {
          username,
          password,
          confirmPassword,
        },
      });
      if (volunteerData.data.registerVolunteer.ok) {
        client.writeData({
          data: {
            volunteerID: volunteerData.data.registerVolunteer.volunteer.id,
            token: volunteerData.data.registerVolunteer.token,
          },
        });
        history.push('/volunteer-dashboard');
      }
    } else {
      let nonprofitData = await registerNonprofit({
        variables: {
          username,
          password,
          confirmPassword,
          mission,
          description,
          displayName,
          contact,
        },
      });
      if (nonprofitData.data.registerNonprofit.ok) {
        client.writeData({
          data: {
            nonprofitID: nonprofitData.data.registerNonprofit.nonprofit.id,
            token: nonprofitData.data.registerNonprofit.token,
          },
        });
        history.push('/nonprofit-dashboard');
      }
    }
  };

  return (
    <form
      className="bg-blue-500 flex flex-col h-full px-4 pt-4"
      onSubmit={handleSubmit}>
      {/* Header */}
      <p className="text-center text-white font-semibold text-xl pb-4">
        Sign Up!
      </p>

      {/* Text Fields */}
      <input
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
        placeholder="Enter Username"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        className={
          matching
            ? 'text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2'
            : 'text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-red-500 mb-2'
        }
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={onChangePassword}
      />
      <input
        className={
          matching
            ? 'text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2'
            : 'text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-red-500 mb-2'
        }
        type="password"
        placeholder="Re-type Password"
        value={confirmPassword}
        onChange={onChangePasswordConfirm}
      />

      {!props.isVolunteer ? (
        <>
          <input
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
            placeholder="Enter Mission Statement"
            value={mission}
            onChange={onChangeMission}
          />
          <input
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
            placeholder="Enter Organization Description"
            value={description}
            onChange={onChangeDescription}
          />
          <input
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
            placeholder="Enter Organization Display Name"
            value={displayName}
            onChange={onChangeDisplayName}
          />
          <input
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
            placeholder="Enter Organization Contact"
            value={contact}
            onChange={onChangeContact}
          />
        </>
      ) : null}

      {/* Radio Selection */}
      <UploadFile onIconChange={onIconChange} />
      <div className="flex justify-around text-white">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="accountType"
            checked={props.isVolunteer}
            onClick={() => props.setIsVolunteer(true)}
          />
          <span className="ml-2">Volunteer</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="accountType"
            checked={!props.isVolunteer}
            onClick={() => props.setIsVolunteer(false)}
          />
          <span className="ml-2">Nonprofit</span>
        </label>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <button className="bg-blue-600 w-24 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 mb-2">
          Register
        </button>
      </div>
    </form>
  );
};

export default SignUpDialogueBox;
