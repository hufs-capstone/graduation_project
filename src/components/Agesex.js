import React, {Component} from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Agesex = (props) =>{
    return(
        <Form>
            <Row form>
                <Col>
                <FormGroup>
                    <Input type="select" name ="selectAge" id="Age">
                        <option>연령대 선택</option>
                        <option>0-5 개월</option>
                        <option>6-11 개월</option>
                        <option>1-2 세</option>
                        <option>3-5 세</option>
                        <option>6-8 세</option>
                        <option>9-11 세</option>
                        <option>12-14 세</option>
                        <option>15-18 세</option>
                        <option>19-29 세</option>
                        <option>30-49 세</option>
                        <option>50-64 세</option>
                        <option>65-74 세</option>
                        <option>75세 이상</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Input type="select" name ="selectSex" id="Sex">
                        <option>성별 선택</option>
                        <option>여성</option>
                        <option>남성</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col>
                    <Button outline color="primary">입력</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Agesex;