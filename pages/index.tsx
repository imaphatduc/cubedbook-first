import type { NextPage } from 'next';

import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Animation, TYPES } from 'cubecubed';

import TypewriterSection from '../components/sections/TypewriterSection';
import ScratchpadSection from '../components/sections/ScratchpadSection';
import TocSection from '../components/sections/TocSection';

export interface CubedNode {
  id: string;
  name: string;
  object: TYPES | Animation;
}

const Home: NextPage = () => {
  const bootstrapRatio = 12;
  const animScreenRatio = 6;

  const [nodes, setNodes] = useState<CubedNode[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState('');

  const [currentPad, setCurrentPad] = useState(<></>);

  return (
    <DndProvider backend={HTML5Backend}>
      <Row>
        <Col md={(bootstrapRatio - animScreenRatio) / 2}>
          <TocSection
            nodes={nodes}
            setNodes={setNodes}
            currentNodeId={currentNodeId}
            setCurrentNodeId={setCurrentNodeId}
            setCurrentPad={setCurrentPad}
          />
          <TypewriterSection
            nodes={nodes}
            setNodes={setNodes}
            currentNodeId={currentNodeId}
            setCurrentNodeId={setCurrentNodeId}
            setCurrentPad={setCurrentPad}
          />
        </Col>
        <Col
          xs={animScreenRatio}
          id="cubecubed"
          style={{
            position: 'sticky',
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            height: '100vh',
          }}
        ></Col>
        <Col md={(bootstrapRatio - animScreenRatio) / 2}>
          <ScratchpadSection scratchpad={currentPad} />
        </Col>
      </Row>
    </DndProvider>
  );
};

export default Home;
