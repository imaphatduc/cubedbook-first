import { FC } from 'react';

interface Props {
  scratchpad: JSX.Element;
}

const ScratchpadSection: FC<Props> = ({ scratchpad }) => {
  return (
    <div className="scratchpad-section">
      <h5 className="text-center my-2">Scratchpad</h5>

      {scratchpad}
    </div>
  );
};

export default ScratchpadSection;
