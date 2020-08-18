// React imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import UploadFile from './UploadFile';
import './AuthDialogueBox.scss';

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
    <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <p className="headerText">Sign Up!</p>
      {/* Text Fields */}
      <input
        name="username"
        ref={register({ required: true })}
        placeholder="Enter Username"
        className="formInputs"
      />
      {username && <span className="errorText">Username is required</span>}
      <input
        name="password"
        type="password"
        ref={register({
          required: true,
          validate: value => value === watch('confirmPassword'),
        })}
        placeholder="Enter Password"
        className="formInputs"
      />
      {password && (
        <span className="errorText">Password is blank or doesn't match</span>
      )}
      <input
        name="confirmPassword"
        type="password"
        ref={register({
          required: true,
          validate: value => value === watch('password'),
        })}
        placeholder="Re-type Password"
        className="formInputs"
      />
      {confirmPassword && (
        <span className="errorText">Password is blank or doesn't match</span>
      )}
      {!props.isVolunteer ? (
        <>
          <input
            name="mission"
            ref={register({ required: true })}
            placeholder="Enter Mission Statement"
            className="formInputs"
          />
          {mission && (
            <span className="errorText">Mission statement is required</span>
          )}
          <input
            name="description"
            ref={register({ required: true })}
            placeholder="Enter Organization Description"
            className="formInputs"
          />
          {description && (
            <span className="errorText">
              Organization description is required
            </span>
          )}
          <input
            name="displayName"
            ref={register({ required: true })}
            placeholder="Enter Organization Display Name"
            className="formInputs"
          />
          {displayName && (
            <span className="errorText">
              Organization display name is required
            </span>
          )}
          <input
            name="contact"
            ref={register({ required: true })}
            placeholder="Enter Organization Contact"
            className="formInputs"
          />
          {contact && (
            <span className="errorText">Organization contact is required</span>
          )}
        </>
      ) : null}

      {/* Radio Selection */}
      <UploadFile onIconChange={onIconChange} />
      <div className="radioButtonContainer">
        <div>
          <label>
            Volunteer
            <input
              type="radio"
              className="accountTypeRadioButton"
              name="accountType"
              checked={props.isVolunteer}
              onChange={() => props.setIsVolunteer(true)}
            />
          </label>
        </div>
        <div>
          <label>
            Nonprofit
            <input
              type="radio"
              className="accountTypeRadioButton"
              name="accountType"
              checked={!props.isVolunteer}
              onChange={() => props.setIsVolunteer(false)}
            />
          </label>
        </div>
      </div>
      {/* Submit */}
      <button className="submitButton">Register</button>
    </form>
  );
};

export default SignUpDialogueBox;
