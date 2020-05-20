import React,{Component} from 'react';
import { Table } from 'reactstrap';
import { render } from 'react-dom';
import { Button, Input, Col } from 'reactstrap';

class cal1 extends Component{

    render(){
        return (
            <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>제품명 : </th>
                <th>변환 전</th>
                <th>변환 후</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>칼로리</td>
                <td><input type="string" placeholder="칼로리 입력" name="kcal"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>탄수화물</td>
                <td><input type="string" placeholder="탄수화물 입력" name="carb"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>단백질</td>
                <td><input type="string" placeholder="단백질 입력" name="protein"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>지방</td>
                <td><input type="string" placeholder="지방 입력" name="fat"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>나트륨</td>
                <td><input type="string" placeholder="나트륨 입력" name="na"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>콜레스테롤</td>
                <td><input type="string" placeholder="콜레스테롤 입력" name="chol"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>당류</td>
                <td><input type="string" placeholder="당류 입력" name="sugar"/></td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td> </td>
                <td> </td>
                <td><Button class="btn pull-right" color="info">상품 정보 입력</Button>{' '}</td>
              </tr>
            </tbody>
            </Table>
        );
    }
}
export default cal1;