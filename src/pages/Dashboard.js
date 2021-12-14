import React from "react";
import { useResource } from "../hooks";

// components
import Message from "../components/Message";
import PageHeader from "../components/PageHeader";

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
      <PageHeader title="Dashboard"/>
      <div>
        <h2 className="h5">Announcments</h2>
        <div>
          {announcments.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="h5">Reminders</h2>
        {reminders.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div>
        <h2 className="h5">Tickets</h2>
        {tickets.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;