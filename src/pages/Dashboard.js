import React from "react";
import { useResource } from "../hooks";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const [announcments] = useResource(
    "http://localhost:3001/api/messages",
    "type=announcement"
  );

  const [reminders] = useResource(
    "http://localhost:3001/api/messages",
    "type=reminder"
  );

  const [tickets] = useResource(
    "http://localhost:3001/api/messages",
    "type=ticket"
  );

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          Reminder
        </Button>
      </div>
      <div>
        <Header title="Tickets" />
        <ItemList items={tickets.sort((a, b) => a.level - b.level)} isMessage />
        <Button variant="outline-primary" className="mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Ticket
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;