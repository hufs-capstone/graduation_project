import React, {Component} from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';

const comp = (props) =>{
    return(
        <Form>
            <Row form>
                <Col>
                <FormGroup>
                    <Input type="text" name ="selectfirst" id="first" placeholder="상품1을 입력하세요">
                    </Input>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Input type="text" name ="selectSecond" id="Second" placeholder="상품2를 입력하세요">
                    </Input>
                </FormGroup>
                </Col>
                <Col>
                    <Button outline color="primary">비교</Button>
                </Col>
            </Row>
        </Form>

    );
}

export default comp;