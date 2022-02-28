import React, { useState } from "react";
import { Table, Space,Divider, Popconfirm } from 'antd';
import EditModal from './EditModal';
import { useDispatch, useSelector } from "react-redux";
import {deleteTodo} from "../features/Todos";



const TableComponent = (props) => {

  const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);

  const columns = [
    {
      title: 'TODO',
      dataIndex: 'todo',
      key: 'todo',
      render: text => <div>{text}</div>,
    },
    {
      title: 'ACTION',
      key: 'id',
      fixed: 'right',
      dataIndex: 'id',
      width: 260,
      render: (rows, record) => [
        <Space size={<Divider type="vertical"/>} size="middle">
          <a>Done</a>
          <EditModal id={rows} 
          todo={record.todo}/>
        <Popconfirm
          title="Are You Sure??"
          onConfirm={() => {
            dispatch(deleteTodo({ id: rows }));
          }}>
          <a>Delete</a>
          </Popconfirm>  
        </Space>
      ],
    },
  ];
    return(
      <div style={{ marginTop: 16}}>
        <Table columns={columns} dataSource={todoList} rowKey="id" />
      </div>
        );
};
export default TableComponent;