import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

// const SINGLE_UPLOAD = gql`
//   mutation($file: Upload!) {
//     singleUpload(file: $file) {
//       filename
//       mimetype
//       encoding
//       url
//     }
//   }
// `;

const UploadFile = () => {
  const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    console.log({ variables: { file } });
    validity.valid && mutate({ variables: { file } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <React.Fragment>
      <input type="file" required onChange={onChange} />
    </React.Fragment>
  );
};

export default UploadFile;
