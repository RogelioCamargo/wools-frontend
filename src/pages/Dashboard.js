import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeAnnouncements } from "../reducers/announcementReducer";
import { initializeReminders } from "../reducers/reminderReducer";
import { initializeTickets } from "../reducers/ticketReducer";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import PlusIcon from "../components/PlusIcon";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnnouncements());
    dispatch(initializeReminders());
    dispatch(initializeTickets());
  }, [dispatch]);

  const announcments = useSelector((state) => state.announcements);
  const reminders = useSelector(state => state.reminders);
  const tickets = useSelector(state => state.tickets);

	return (
    <div className="w-75 mx-auto my-5">
      <PageHeader title="Dashboard" />
      <div className="mb-4">
        <Header title="Announcments" />
        <ItemList
          items={announcments.sort((a, b) => a.level - b.level)}
          isMessage
        />
        <Button variant="outline-primary" className="mt-2">
          <PlusIcon />
          Announcment
        </Button>
      </div>
      <div className="mb-4">
        <Header title="Reminders" />
        <ItemList
          items={reminders.sort((a, b) => a.level - b.level)}
          isMessage
        />
        <Button variant="outline-primary" className="mt-2">
          <PlusIcon />
          Reminder
        </Button>
      </div>
      <div>
        <Header title="Tickets" />
        <ItemList items={tickets.sort((a, b) => a.level - b.level)} isMessage />
        <Button variant="outline-primary" className="mt-2">
          <PlusIcon />
          Ticket
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;