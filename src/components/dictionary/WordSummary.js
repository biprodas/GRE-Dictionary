import React from 'react';

const WordSummary = ({magooshWord}) => {
    let wordId = "#" + magooshWord.word;
    return (
        <li className="btn list-group-item list-group-item-action bg-light border-info mt-2">
            <div className="collapsed" data-toggle="collapse" href={wordId}>
                <h5><span className="badge badge-info">{magooshWord.word}</span><small><code className="mx-1">{magooshWord.type}</code></small>- <small>{magooshWord.meaning}</small></h5>
                <p className="text-muted mb-0 text-Consolas">{magooshWord.definition}</p>
            </div>
            <div id={magooshWord.word} className="collapse mt-0" data-parent="#accordion">
                <div className="border-top mt-2">
                <h6 className="mt-2">Word Details</h6>
                <h6>Mnemonics</h6>
                <h6>Examples</h6>
                <h6>Synonyms</h6>
                </div>
            </div>
        </li>
    )
}



export default WordSummary;