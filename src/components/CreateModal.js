import React, { useState } from 'react';
import { Modal, Button, Input, Form} from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/Todos";


const CreateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.value);
  const [todo, setTodo] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
  
    dispatch(
        addTodo({
            id: todoList[todoList.length - 1].id + 1,
            todo,
        })
    );

    setIsModalVisible(false);
};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <Button type="primary" onClick={showModal}>
        Tambah Todo
      </Button>
      <Modal title="Tambah Todo" visible={isModalVisible}  onCancel={handleCancel}
      footer={[
        <Button
        onClick={handleOk} htmlType="submit">
          OK
        </Button>,
        <Button onClick={handleCancel}>Cancel</Button>,
      ]}>
      <div>
          <Input
              name="todo"
              onChange={(event) => {
                  setTodo(event.target.value);
              }}
              required
              autoComplete='off'
              placeholder="Tambah Todo..."
          />
      </div>
      </Modal>
    </>
  );
};


export default CreateModal;