import { ChangeEvent, FC, useId, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPencilFill, BsFillPlayFill } from 'react-icons/bs';

import { CubedNode } from '../../pages';
import InputField from '../fields/InputField';
import Scratchpad from '../Scratchpad';

import { useCubed } from '../../contexts/CubedContext';

interface Props {
  mode: 'create' | 'edit';
  nodes: CubedNode[];
  setNodes: (nodes: CubedNode[]) => void;
  currentNodeId: string;
  setCurrentNodeId: (currentNodeId: string) => void;
  setCurrentPad: (currentPad: JSX.Element) => void;
}

const SquarePad: FC<Props> = ({
  mode,
  nodes,
  setNodes,
  currentNodeId,
  setCurrentNodeId,
  setCurrentPad,
}) => {
  const [name, setName] = useState('');
  const [sideLength, setSideLength] = useState(0);

  const id = useId();

  const { cubed, group } = useCubed();

  const handleCreateNode = () => {
    const newNode = {
      id: id,
      name: name,
      object: new cubed!.Square({
        group: group!,
        sideLength: sideLength,
      }).render(),
    };

    setNodes([...nodes, newNode]);

    setCurrentNodeId('');
    setCurrentPad(<></>);
  };

  const handleEditNode = () => {
    const newNodes = nodes.map((node) => {
      if (node.id === currentNodeId) {
        node.name = name;
        node.object.width = sideLength;
        node.object.height = sideLength;

        node.object.render();
      }

      return node;
    });

    setCurrentNodeId('');
    setNodes(newNodes);
  };

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSideLengthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSideLength(parseInt(e.target.value));
  };

  return (
    <Scratchpad tag="Square">
      {mode === 'create' ? (
        <Button onClick={handleCreateNode}>
          <BsFillPlayFill />
        </Button>
      ) : (
        <Button onClick={handleEditNode}>
          <BsFillPencilFill />
        </Button>
      )}

      <InputField label="name" handler={handleNameInputChange} />
      <InputField label="sideLength" handler={handleSideLengthInputChange} />
    </Scratchpad>
  );
};

export default SquarePad;
