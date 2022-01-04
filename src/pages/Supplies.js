import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeItems } from "../reducers/suppliesReducer";
import { toggleSuppliesModal } from "../reducers/modalReducer";
import { useHistory } from "react-router-dom";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import ModalForm from "../components/ModalForm";
import Title from "../components/Title";
import { Form } from "react-bootstrap";

const Supplies = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
	const history = useHistory();

  useEffect(() => {
		history.go();		
    dispatch(initializeItems());
  }, [dispatch, history]);

  const supplies = useSelector(state => state.supplies);
  const show = useSelector(state => state.modals.suppliesModal);

  const criticals = supplies.filter(item => !item.level);
  const matches = supplies.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Supplies"
        onClick={() => dispatch(toggleSuppliesModal(!show))}
      />
      <div>
        <Title title="Critical" />
        <ItemList items={criticals} isCritialList />
      </div>
      <Form.Control
        className="my-3"
        placeholder="Search"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        <Title title="All" />
        <ItemList items={matches} />
      </div>
      <ModalForm
        title="Add New Supply Item"
        show={show}
        handleClose={() => dispatch(toggleSuppliesModal(!show))}
      />
    </div>
  );
};

export default Supplies;
