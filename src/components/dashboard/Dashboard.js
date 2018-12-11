import React, { Component } from 'react'
import Feature from './Feature'
import MagooshList from '../dictionary/MagooshList'
import Practice from './Practice'
import { connect } from 'react-redux'


class Dashboard extends Component {
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

export default connect(mapStateToProps)(Dashboard);
