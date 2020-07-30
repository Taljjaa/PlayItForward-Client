// React imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import UploadFile from './UploadFile';

// Type definitions
type DialogueProps = {
  isVolunteer: boolean;
  setIsVolunteer: any;
};

type Inputs = {
  username: string;
  password: string;
  confirmPassword: string;
  mission: string;
  description: string;
  displayName: string;
  contact: string;
};

const REGISTER_VOLUNTEER = gql`
  mutation registerVolunteer(
    $username: String!
    $password: String!
    $file: Upload
  ) {
    registerVolunteer(username: $username, password: $password, file: $file) {
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
    $file: Upload
  ) {
    registerNonprofit(
      username: $username
      password: $password
      mission: $mission
      description: $description
      displayName: $displayName
      contact: $contact
      file: $file
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
  const [file, setFile] = useState<File | null>(null);

  const { register, handleSubmit, errors, watch } = useForm<Inputs>();
  const {
    username,
    password,
    displayName,
    contact,
    mission,
    description,
    confirmPassword,
  } = errors;

  let history = useHistory();

  const [registerVolunteer] = useMutation(REGISTER_VOLUNTEER);
  const [registerNonprofit] = useMutation(REGISTER_NONPROFIT);

  const onIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFile(e.target.files![0]);
  };

  const onSubmit = async (data: Inputs) => {
    if (props.isVolunteer) {
      const { username, password } = data;
      let volunteerData = await registerVolunteer({
        variables: {
          username,
          password,
          file,
        },
      });
      if (volunteerData.data.registerVolunteer.ok) {
        localStorage.setItem(
          'volunteerId',
          volunteerData.data.registerVolunteer.volunteer.id,
        );
        localStorage.setItem('type', 'volunteer');
        history.push('/volunteer-dashboard');
      }
    } else {
      const {
        username,
        password,
        mission,
        description,
        displayName,
        contact,
      } = data;
      let nonprofitData = await registerNonprofit({
        variables: {
          username,
          password,
          mission,
          description,
          displayName,
          contact,
          file,
        },
      });
      if (nonprofitData.data.registerNonprofit.ok) {
        localStorage.setItem(
          'nonprofitId',
          nonprofitData.data.registerNonprofit.nonprofit.id,
        );
        localStorage.setItem('type', 'nonprofit');
        history.push('/nonprofit-dashboard');
      }
    }
  };

  return (
    <form
      className="bg-blue-500 flex flex-col h-full px-4 pt-4"
      onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <p className="text-center text-white font-semibold text-xl pb-4">
        Sign Up!
      </p>
      {/* Text Fields */}
      <input
        name="username"
        ref={register({ required: true })}
        placeholder="Enter Username"
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
      />
      {username && <span className="text-white">Username is required</span>}
      <input
        name="password"
        type="password"
        ref={register({
          required: true,
          validate: value => value === watch('confirmPassword'),
        })}
        placeholder="Enter Password"
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
      />
      {password && (
        <span className="text-white">Password is blank or doesn't match</span>
      )}
      <input
        name="confirmPassword"
        type="password"
        ref={register({
          required: true,
          validate: value => value === watch('password'),
        })}
        placeholder="Re-type Password"
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
      />
      {confirmPassword && (
        <span className="text-white">Password is blank or doesn't match</span>
      )}
      {!props.isVolunteer ? (
        <>
          <input
            name="mission"
            ref={register({ required: true })}
            placeholder="Enter Mission Statement"
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
          />
          {mission && (
            <span className="text-white">Mission statement is required</span>
          )}
          <input
            name="description"
            ref={register({ required: true })}
            placeholder="Enter Organization Description"
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
          />
          {description && (
            <span className="text-white">
              Organization description is required
            </span>
          )}
          <input
            name="displayName"
            ref={register({ required: true })}
            placeholder="Enter Organization Display Name"
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
          />
          {displayName && (
            <span className="text-white">
              Organization display name is required
            </span>
          )}
          <input
            name="contact"
            ref={register({ required: true })}
            placeholder="Enter Organization Contact"
            className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
          />
          {contact && (
            <span className="text-white">Organization contact is required</span>
          )}
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
