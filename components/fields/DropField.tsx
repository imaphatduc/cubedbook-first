import { FC } from 'react';

import DropInput, { InputProps } from '../DropInput';

interface Props extends InputProps {
  label: string;
}

const DropField: FC<Props> = ({ label, nodes, setCubiconNodeId }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <p>{label}</p>
      <DropInput nodes={nodes} setCubiconNodeId={setCubiconNodeId} />
    </div>
  );
};

export default DropField;
