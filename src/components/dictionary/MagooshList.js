import React, {Component} from 'react'
import WordSummary from './WordSummary'

class MagooshList extends Component {

    state = {
      searchString: ''
    }
    
    handleChange = (e) => {
         this.setState({ searchString : e.target.value });
    }
    
    render() {
      console.log(this.props);
      var magooshWords = this.props.magooshWords,
          searchString = this.state.searchString.trim().toLowerCase();
      if (searchString.length > 0) {
        magooshWords = magooshWords.filter(magooshWord => {
          return magooshWord.word.toLowerCase().match( searchString );
        });
      }

      return (
        <div className="col-md-7">
          <div className="container">
            <input type="text" className="form-control border-primary ml-5 mt-3" style={{ width: '40%' }} value={this.state.searchString} placeholder="Search word" onChange={this.handleChange} />
            <div id="accordion" className="accordion">
              <ul className="list-group mt-1">
                { magooshWords && magooshWords.map(magooshWord => {
                  return ( 
                    <WordSummary magooshWord={magooshWord} key={magooshWord.id} /> 
                  )
                })}  
              </ul>
              </div>
            </div>
        </div>
      );
    }
}

    
export default MagooshList;
