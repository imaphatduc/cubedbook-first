import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useDrag } from 'react-dnd';

import { CubedNode } from '../pages';

interface Props {
  node: CubedNode;
  handler: (node: CubedNode) => void;
}

const TocHeading: FC<Props> = ({ node, handler }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: node.id,
      item: () => ({
        node: node,
      }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const opacity = isDragging ? 0.4 : 1;

  return (
    <Button
      ref={drag}
      className="w-100"
      onClick={() => handler(node)}
      style={{ opacity }}
    >
      {node.name}: {node.object.constructor.name}
    </Button>
  );
};

export default TocHeading;
