import React from 'react'
import WordSummary from './WordSummary'

const MagooshList = ({magooshWords}) => {
  console.log(magooshWords);
    return (
        <div className="col-md-7">
            <div className="container">
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

export default MagooshList;