import React,{Component} from 'react';

class cal2 extends Component{

    render(){
        return (

            <div class="input-group">
                <input type="text" class="form-control" placeholder="식품 이름을 입력하세요!"/>
                <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button">찾기</button>
                </span>
            </div>
        );
    }
}
export default cal2;