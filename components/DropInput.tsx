import { FC, useState } from 'react';
import { useDrop } from 'react-dnd';

import { CubedNode } from '../pages';

export interface InputProps {
  nodes: CubedNode[];
  setCubiconNodeId: (id: string) => void;
}

const DropInput: FC<InputProps> = ({ nodes, setCubiconNodeId }) => {
  const [cubiconName, setCubiconName] = useState('');

  const nodesId = nodes.map((node) => node.id);

  const [{}, drop] = useDrop(
    () => ({
      accept: nodesId,
      drop: (item: { node: CubedNode }) => {
        setCubiconName(item.node.name);
        setCubiconNodeId(item.node.id);
      },
      collect: () => ({}),
    }),
    []
  );

  return (
    <>
      <input
        ref={drop}
        value={cubiconName}
        disabled
        style={{ maxWidth: 100 }}
      />
    </>
  );
};

export default DropInput;
