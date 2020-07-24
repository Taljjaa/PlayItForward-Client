import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';

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
        history.push('/nonprofit-dashboard');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-blue-500 flex flex-col h-full w-full px-4 pt-4">
      {/* Header */}
      <p className="text-center text-white font-semibold text-xl pb-4">
        Welcome Back!
      </p>
      {/* Text Fields */}
      <input
        name="username"
        ref={register({ required: true })}
        placeholder="Enter Username"
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
      />
      {errors.username && (
        <span className="text-white">Username is required</span>
      )}
      <input
        name="password"
        type="password"
        ref={register({ required: true })}
        placeholder="Enter Password"
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
      />
      {errors.password && (
        <span className="text-white">Password is required</span>
      )}
      {/* Radio Selection */}
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
      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-blue-600 w-24 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 mb-2">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginDialogueBox;
