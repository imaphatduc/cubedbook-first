import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  label: string;
  handler: () => void;
}

const TypewriterButton: FC<Props> = ({ label, handler }) => {
  return (
    <>
      <Button onClick={handler}>{label}</Button>
    </>
  );
};

export default TypewriterButton;
