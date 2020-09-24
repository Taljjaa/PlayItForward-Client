import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import './AuthDialogueBox.scss';

// Type definitions
type DialogueProps = {
  isVolunteer: boolean;
  setIsVolunteer: any;
};

type Inputs = {
  username: string;
  password: string;
};

const LOGIN_VOLUNTEER = gql`
  mutation loginVolunteer($username: String!, $password: String!) {
    loginVolunteer(username: $username, password: $password) {
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

const LOGIN_NONPROFIT = gql`
  mutation loginNonprofit($username: String!, $password: String!) {
    loginNonprofit(username: $username, password: $password) {
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

// Structure:
// Header, Text Fields, Radio Selection, Submit Button
const LoginDialogueBox = (props: DialogueProps) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  let history = useHistory();

  const [loginVol] = useMutation(LOGIN_VOLUNTEER);
  const [loginNonprofit] = useMutation(LOGIN_NONPROFIT);

  const onSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    if (props.isVolunteer) {
      let volunteerData = await loginVol({ variables: { username, password } });
      if (volunteerData.data.loginVolunteer.ok) {
        localStorage.setItem(
          'volunteerId',
          volunteerData.data.loginVolunteer.volunteer.id,
        );
        localStorage.setItem('type', 'volunteer');
        history.push('/volunteer-dashboard');
      }
    } else {
      let nonprofitData = await loginNonprofit({
        variables: { username, password },
      });
      if (nonprofitData.data.loginNonprofit.ok) {
        localStorage.setItem(
          'nonprofitId',
          nonprofitData.data.loginNonprofit.nonprofit.id,
        );
        localStorage.setItem('type', 'nonprofit');
        history.push('/nonprofit-dashboard');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      {/* Header */}
      <p className="headerText">Welcome Back!</p>
      {/* Text Fields */}
      <input
        name="username"
        ref={register({ required: true })}
        placeholder="Enter Username"
        className="formInputs"
      />
      {errors.username && (
        <span className="errorText">Username is required</span>
      )}
      <input
        name="password"
        type="password"
        ref={register({ required: true })}
        placeholder="Enter Password"
        className="formInputs"
      />
      {errors.password && (
        <span className="errorText">Password is required</span>
      )}
      {/* Radio Selection */}
      <div className="radioButtonContainer">
        <div>
          <label>
            Volunteer
            <input
              className="accountTypeRadioButton"
              type="radio"
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
              className="accountTypeRadioButton"
              type="radio"
              name="accountType"
              checked={!props.isVolunteer}
              onChange={() => props.setIsVolunteer(false)}
            />
          </label>
        </div>
      </div>
      {/* Submit Button */}
      <button className="submitButton">Login</button>
    </form>
  );
};

export default LoginDialogueBox;
