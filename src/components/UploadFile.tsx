import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;

const UploadFile = () => {
  const [uploadFile] = useMutation(SINGLE_UPLOAD);
  const onChange = async ({
    target: {
      files: [file],
    },
  }: any) => {
    console.log({ variables: { file } });
    let fileData = await uploadFile({
      variables: { file },
    });
    console.log(fileData);
  };

  return (
    <React.Fragment>
      <input type="file" required onChange={onChange} />
    </React.Fragment>
  );
};

export default UploadFile;
