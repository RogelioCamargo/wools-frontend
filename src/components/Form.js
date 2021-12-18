import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

// action creators
import {
  updateName,
  updateContent,
  updateLevel,
  updateType,
  updateBrand,
} from "../reducers/fieldsReducer";

const MyForm = ({ isMessage }) => {
	const dispatch = useDispatch();
	const fields = useSelector(state => state.fields);

	return (
    <Form>
      {isMessage ? (
        <Form.Group className="mb-2">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={fields.content}
            onChange={({ target }) => {
              console.log(target.value);
              dispatch(updateContent(target.value));
            }}
            placeholder="i.e. Schedule Roadie"
          />
        </Form.Group>
      ) : (
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={fields.name}
            onChange={({ target }) => {
              console.log(target.value);
              dispatch(updateName(target.value));
            }}
            placeholder="i.e. Orange Squeeze"
          />
        </Form.Group>
      )}
      {isMessage ? (
        <Form.Group className="mb-2">
          <Form.Label htmlFor="inlineFormCustomSelect">Priority</Form.Label>
          <Form.Select
            id="inlineFormCustomSelect"
            name="level"
            value={fields.level}
            onChange={({ target }) => {
              console.log(target.value);
              dispatch(updateLevel(target.value));
            }}
          >
            <option value="0">High</option>
            <option value="1">Medium</option>
            <option value="2">Low</option>
          </Form.Select>
        </Form.Group>
      ) : (
        <Form.Group className="mb-2">
          <Form.Label htmlFor="inlineFormCustomSelect">Stock</Form.Label>
          <Form.Select
            id="inlineFormCustomSelect"
            name="level"
            value={fields.level}
            onChange={({ target }) => {
              console.log(target.value);
              dispatch(updateLevel(target.value));
            }}
          >
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </Form.Select>
        </Form.Group>
      )}
      {isMessage ? (
        <Form.Group className="mb-2">
          <Form.Label htmlFor="inlineFormCustomSelect">Type</Form.Label>
          <Form.Select
            id="inlineFormCustomSelect"
            value={fields.type}
            name="type"
            onChange={({ target }) => dispatch(updateType(target.value))}
          >
            <option value="announcement">Announcment</option>
            <option value="reminder">Reminder</option>
            <option value="ticket">Ticket</option>
          </Form.Select>
        </Form.Group>
      ) : (
        <Form.Group className="mb-4">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={fields.brand}
            onChange={({ target }) => dispatch(updateBrand(target.value))}
            placeholder="i.e Olipop"
          />
        </Form.Group>
      )}
    </Form>
  );
}

export default MyForm;