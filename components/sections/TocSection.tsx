import { FC } from 'react';
import { Button } from 'react-bootstrap';

import { CubedNode } from '../../pages';
import CreatePad from '../scratchpads/CreatePad';
import SquarePad from '../scratchpads/SquarePad';
import TocHeading from '../TocHeading';

interface Props {
  nodes: CubedNode[];
  setNodes: (nodes: CubedNode[]) => void;
  currentNodeId: string;
  setCurrentNodeId: (id: string) => void;
  setCurrentPad: (currentPad: JSX.Element) => void;
}

const TocSection: FC<Props> = ({
  nodes,
  setNodes,
  currentNodeId,
  setCurrentNodeId,
  setCurrentPad,
}) => {
  const handleOpenScratchpad = (node: CubedNode) => {
    setCurrentNodeId(node.id);

    switch (node.object.constructor.name) {
      case 'Square':
        setCurrentPad(
          <SquarePad
            mode="edit"
            nodes={nodes}
            setNodes={setNodes}
            currentNodeId={currentNodeId}
            setCurrentNodeId={setCurrentNodeId}
            setCurrentPad={setCurrentPad}
          />
        );

        break;

      case 'Create':
        setCurrentPad(
          <CreatePad
            mode="edit"
            nodes={nodes}
            setNodes={setNodes}
            currentNodeId={currentNodeId}
            setCurrentNodeId={setCurrentNodeId}
            setCurrentPad={setCurrentPad}
          />
        );

        break;
    }
  };

  return (
    <div className="typewriter-section">
      <h5 className="text-center my-2">Table of Contents</h5>

      {nodes.map((node, i) => (
        <TocHeading key={i} node={node} handler={handleOpenScratchpad} />
      ))}
    </div>
  );
};

export default TocSection;
