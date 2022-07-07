import { FC } from 'react';

import { CubedNode } from '../../pages';
import CreatePad from '../scratchpads/CreatePad';
import SquarePad from '../scratchpads/SquarePad';
import TypewriterButton from '../TypewriterButton';

interface Props {
  nodes: CubedNode[];
  setNodes: (nodes: CubedNode[]) => void;
  currentNodeId: string;
  setCurrentNodeId: (id: string) => void;
  setCurrentPad: (currentPad: JSX.Element) => void;
}

const TypewriterSection: FC<Props> = ({
  nodes,
  setNodes,
  currentNodeId,
  setCurrentNodeId,
  setCurrentPad,
}) => {
  return (
    <div className="typewriter-section">
      <h5 className="text-center my-2">Typewriter</h5>

      <TypewriterButton
        label="Square"
        handler={() => {
          setCurrentNodeId('');

          setCurrentPad(
            <SquarePad
              mode="create"
              nodes={nodes}
              setNodes={setNodes}
              currentNodeId={currentNodeId}
              setCurrentNodeId={setCurrentNodeId}
              setCurrentPad={setCurrentPad}
            />
          );
        }}
      />
      <TypewriterButton
        label="Create"
        handler={() => {
          setCurrentNodeId('');

          setCurrentPad(
            <CreatePad
              mode="create"
              nodes={nodes}
              setNodes={setNodes}
              currentNodeId={currentNodeId}
              setCurrentNodeId={setCurrentNodeId}
              setCurrentPad={setCurrentPad}
            />
          );
        }}
      />
    </div>
  );
};

export default TypewriterSection;
