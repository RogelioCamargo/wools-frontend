import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// action creators
import { initializeAnnouncements } from "../reducers/announcementReducer";
import { initializeReminders } from "../reducers/reminderReducer";
import { initializeTickets } from "../reducers/ticketReducer";
import { toggleMessageModal } from "../reducers/modalReducer";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import ModalForm from "../components/ModalForm";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnnouncements());
    dispatch(initializeReminders());
    dispatch(initializeTickets());
  }, [dispatch]);

  const show = useSelector(state => state.modals.messageModal);

  const announcments = useSelector(state => state.announcements);
  const reminders = useSelector(state => state.reminders);
  const tickets = useSelector(state => state.tickets);

	return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Dashboard"
        onClick={() => dispatch(toggleMessageModal(!show))}
        isMessage
      />
      <div className="mb-4">
        <Header title="Announcments" />
        <ItemList
          items={announcments.sort((a, b) => a.level - b.level)}
          isMessage
        />
      </div>
      <div className="mb-4">
        <Header title="Reminders" />
        <ItemList
          items={reminders.sort((a, b) => a.level - b.level)}
          isMessage
        />
      </div>
      <div>
        <Header title="Tickets" />
        <ItemList items={tickets.sort((a, b) => a.level - b.level)} isMessage />
      </div>
      <ModalForm
        title="Add New Message Item"
        show={show}
        handleClose={() => dispatch(toggleMessageModal(!show))}
        isMessage
      />
    </div>
  );
};

export default Dashboard;