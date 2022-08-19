import React from 'react';
import { Row } from 'reactstrap';
import ChatWrapper from './ChatWrapper';
import UsersList from './UserList';

export default function ChatPage() {
  return (
    <Row>
      <UsersList />
      <ChatWrapper />
    </Row>
  );
}
