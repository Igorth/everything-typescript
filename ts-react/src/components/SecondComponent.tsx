import React from 'react';

type Props = {
  name: string;
};

const SecondComponent = (props: Props) => {
  return (
    <div>
      <h1>Second Component</h1>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default SecondComponent;
