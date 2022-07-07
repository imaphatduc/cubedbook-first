import { ChangeEvent, FC, useId, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPencilFill, BsFillPlayFill } from 'react-icons/bs';

import { CubedNode } from '../../pages';
import Scratchpad from '../Scratchpad';
import DropField from '../fields/DropField';
import InputField from '../fields/InputField';
import { useCubed } from '../../contexts/CubedContext';

interface Props {
  mode: 'create' | 'edit';
  nodes: CubedNode[];
  setNodes: (nodes: CubedNode[]) => void;
  currentNodeId: string;
  setCurrentNodeId: (currentNodeId: string) => void;
  setCurrentPad: (currentPad: JSX.Element) => void;
}

const CreatePad: FC<Props> = ({
  mode,
  nodes,
  setNodes,
  currentNodeId,
  setCurrentNodeId,
  setCurrentPad,
}) => {
  const [cubiconNodeId, setCubiconNodeId] = useState('');
  const [duration, setDuration] = useState(0);

  const id = useId();

  const { cubed, group } = useCubed();

  const handleCreateNode = () => {
    const cubicon = nodes.filter((node) => node.id === cubiconNodeId)[0].object;

    const newNode = {
      id: id,
      name: 'anim-create',
      object: new cubed!.Create({
        cubicon: cubicon,
        duration: duration,
      }),
    };

    group!.play([newNode.object]);

    setNodes([...nodes, newNode]);

    setCurrentNodeId('');
    setCurrentPad(<></>);
  };

  const handleEditNode = () => {
    const cubicon = nodes.filter((node) => node.id === cubiconNodeId)[0].object;

    const newNodes = nodes.map((node) => {
      if (node.id === currentNodeId) {
        node.object.cubicon = cubicon;
        node.object.duration = duration;

        group!.play([node.object]);
      }

      return node;
    });

    setCurrentNodeId('');
    setNodes(newNodes);
  };

  const handleDurationInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value));
  };

  return (
    <Scratchpad tag="Create">
      {mode === 'create' ? (
        <Button onClick={handleCreateNode}>
          <BsFillPlayFill />
        </Button>
      ) : (
        <Button onClick={handleEditNode}>
          <BsFillPencilFill />
        </Button>
      )}

      <DropField
        label="cubicon"
        nodes={nodes}
        setCubiconNodeId={setCubiconNodeId}
      />
      <InputField label="duration" handler={handleDurationInputChange} />
    </Scratchpad>
  );
};

export default CreatePad;
