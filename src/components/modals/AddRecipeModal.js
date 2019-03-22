import React from 'react';
import { Modal, Form, Input, Switch } from 'antd';

const formItemLayout = {labelCol: { span: 5 }, wrapperCol: { spam: 14 }};

const AddRecipeModal = ({
  modalOpen, 
  handleSubmit,
  handleCloseModal,
  handleChecked,
  handleChange,
  title,
  ingredients,
  directions,
  published,
  ...props
}) => (
  <Modal
    title="Add New Recipe"
    centered
    visible={modalOpen}
    onOk={handleSubmit}
    onCancel={handleCloseModal}
  >
    <Form layout="horizontal">
      <Form.Item label="Tile" {...formItemLayout}>
        <Input
          value={title}
          onChange={handleChange}
          placeholder="Recipe Title"
          name="title"
        />
      </Form.Item>
      <Form.Item label="Ingredients" {...formItemLayout}>
        <Input
          value={ingredients}
          onChange={handleChange}
          name="ingredients"
          placeholder="Ingredients"
        />
      </Form.Item>
      <Form.Item label="Directions" {...formItemLayout}>
        <Input
          value={directions}
          onChange={handleChange}
          name="directions"
          placeholder="Directions"
        />
      </Form.Item>
      <Form.Item label="Published" {...formItemLayout}>
        <Switch checked={published} onChange={handleChecked} />
      </Form.Item>
    </Form>
  </Modal>
);

const WrappedForm = Form.create({ name: 'add-new-recipe'})(AddRecipeModal);

export default WrappedForm;