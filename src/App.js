import React from 'react';
import HomeComponent from './components/HomeComponent';
import {Row, Col} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Row>
      <Col span={16} offset={4}>
        <HomeComponent/>
      </Col>
    </Row>
  );
}

export default App;
