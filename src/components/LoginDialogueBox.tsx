import React, { useState, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";

// Type definitions
type DialogueProps = {
  isVolunteer: boolean;
  setIsVolunteer: any;
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //hook used to access the cache
  const client = useApolloClient();
  let history = useHistory();

  const [loginVol] = useMutation(LOGIN_VOLUNTEER);
  const [loginNonprofit] = useMutation(LOGIN_NONPROFIT);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (props.isVolunteer) {
      let volunteerData = await loginVol({ variables: { username, password } });
      console.log(volunteerData);
      if (volunteerData.data.loginVolunteer.ok) {
        client.writeData({
          data: {
            volunteerID: volunteerData.data.loginVolunteer.volunteer.id,
            token: volunteerData.data.loginVolunteer.token
          }
        });
        history.push("/volunteer-dashboard");
      }
    } else {
      let nonprofitData = await loginNonprofit({
        variables: { username, password }
      });

      if (nonprofitData.data.loginNonprofit.ok) {
        client.writeData({
          data: {
            nonprofitID: nonprofitData.data.loginNonprofit.nonprofit.id,
            token: nonprofitData.data.loginNonprofit.token
          }
        });
        history.push("/nonprofit-dashboard");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-500 flex flex-col h-full w-full px-4 pt-4"
    >
      {/* Header */}
      <p className="text-center text-white font-semibold text-xl pb-4">
        Welcome Back!
      </p>

      {/* Text Fields */}
      <input
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
        placeholder="Enter Username"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={onChangePassword}
      />

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
