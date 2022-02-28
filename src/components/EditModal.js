import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/Todos";

const EditModal = ({id, todo}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
  

    return (
        <>
            <a onClick={showModal}>Edit</a>
            <Modal
                title="Edit"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button onClick={() => {
                        dispatch(
                            updateTodo({
                                id: id,
                                todo: newTodo,
                            })
                        );
                        setIsModalVisible(false);

                    }

                    }>OK</Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,
                ]}
            >
                <div>
                    <Input
                        type="text"
                        placeholder="Edit Todo..."
                        onChange={(event) => {
                            setNewTodo(event.target.value);
                        }}
                        defaultValue={todo}
                    />
                </div>
            </Modal>
        </>
    );
};

export default EditModal;