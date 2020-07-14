import React from "react";

const UploadFile = ({
  onIconChange
}: {
  onIconChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onIconChange(e);
  };

  return (
    <React.Fragment>
      <input type="file" required onChange={onChange} />
    </React.Fragment>
  );
};

export default UploadFile;
