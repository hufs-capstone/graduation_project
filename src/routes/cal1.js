import React,{Component} from 'react';
import { Table } from 'reactstrap';
import { render } from 'react-dom';
import { Button, Input, Col } from 'reactstrap';

class cal1 extends Component{
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true,
      kcal: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      na: 0,
      chol: 0,
      sugar: 0,
      kcal2: 0,
      carbs2: 0,
      protein2: 0,
      fat2: 0,
      na2: 0,
      chol2: 0,
      sugar2: 0
     };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = () => {
    let url = 'http://localhost:3000/manualtranslate'
    let options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        age: '3',
        sex: 'female',
        kcal: this.state.kcal,
        carbs: this.state.carbs,
        protein: this.state.protein,
        fat: this.state.fat,
        na: this.state.na,
        chol: this.state.chol,
        sugar: this.state.sugar
      })
    };
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        this.setState(()=> ({
          'carbs2' :data.translated.product.carbs,
          'kcal2' :data.translated.product.kcal,
          'protein2' :data.translated.product.protein,
          'fat2' :data.translated.product.fat,
          'na2' :data.translated.product.na,
          'chol2' :data.translated.product.chol,
          'sugar2' :data.translated.product.sugar
        }))
      })
  }

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
                <td><input type="number" placeholder="칼로리 입력" name="kcal" onChange={this.handleChange}/></td>
                <td>{this.state.kcal2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>탄수화물</td>
                <td><input type="number" placeholder="탄수화물 입력" name="carbs" onChange={this.handleChange}/></td>
                <td>{this.state.carbs2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>단백질</td>
                <td><input type="number" placeholder="단백질 입력" name="protein" onChange={this.handleChange}/></td>
                <td>{this.state.protein2} </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>지방</td>
                <td><input type="number" placeholder="지방 입력" name="fat" onChange={this.handleChange}/></td>
                <td>{this.state.fat2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>나트륨</td>
                <td><input type="number" placeholder="나트륨 입력" name="na" onChange={this.handleChange}/></td>
                <td>{this.state.na2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>콜레스테롤</td>
                <td><input type="number" placeholder="콜레스테롤 입력" name="chol" onChange={this.handleChange}/></td>
                <td>{this.state.chol2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>당류</td>
                <td><input type="number" placeholder="당류 입력" name="sugar" onChange={this.handleChange}/></td>
                <td>{this.state.sugar2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td> </td>
                <td> </td>
                <td><Button className="btn pull-right" color="info" onClick={this.handleClick}>상품 정보 입력</Button></td>
              </tr>
            </tbody>
            </Table>
        );
    }
}
export default cal1;