import React, { Component } from 'react'
import Feature from './Feature'
import Practice from './Practice'
import { connect } from 'react-redux'
import MagooshList from '../dictionary/MagooshList';

class MagooshDashboard extends Component {
    render() { 
        //console.log(this.props);
        const { magooshWords } = this.props;
        return ( 
            <div className="container-fluid">
              <div className="row">
                <Feature />
                <MagooshList magooshWords={magooshWords}/>
                <Practice />
              </div>
            </div>
        );
    }
}
 

const mapStateToProps = (state) => {
  return {
    magooshWords: state.magooshWord.magooshWords
  }
}

export default connect(mapStateToProps)(MagooshDashboard);
