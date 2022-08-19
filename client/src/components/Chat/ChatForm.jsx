import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Col, InputGroup, Button, Row } from 'reactstrap';
import { sendChatMessage } from '../../Redux/actions/chatActions';

export default function ChatForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const inputHAndler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sendChatMessage({ message: input }));
    setInput('');
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <InputGroup>
              <Input type="text" value={input} onChange={inputHAndler} />
              <Button color="success" type="submit">
                Send
              </Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
}
