import React, {Component} from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Agesex = (props) =>{
    return(
        <Form>
            <Form.Row>
                <FormGroup as={Col} controlId="fromGridAge">
                    <Form.Control as="select" value="연령대선택">
                        <option>0-5 개월</option>
                        <option>6-11 개월</option>
                    </Form.Control>
                </FormGroup>
            </Form.Row>
        </Form>
    )
}

export default Agesex;