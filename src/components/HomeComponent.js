import { Card } from "antd";
import React from 'react';
import TableComponent from './TableComponent'
import CreateModal from './CreateModal';

const HomeComponent = () => {
    return (
        <div>
            <Card title="Todo List App" style={{ marginTop: 64}}>
            <CreateModal/>
            <TableComponent/>
            </Card>
        </div>
    );
};
export default HomeComponent;
