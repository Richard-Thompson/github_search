import React from 'react';

export function extractLastPage (data) {
  if(!data) return undefined;
  const pageOptions = data.split(',')
  let obj = {}
  
  for(var i = 0; i < pageOptions.length; i++) {
    if(pageOptions[i].indexOf('last') !== -1){
       obj['last'] = pageOptions[i].substring(92,pageOptions[i].length-13);
    }
  }
  return obj;
}

export function checkLanguage (language) {
    if(language === 'JavaScript') {
      return (<div className="details"><div className="javascript"></div><p>JavaScript</p></div>)
    }
    else if(language === 'CSS') {
      return (<div className="details"><div className="css"></div><p>CSS</p></div>)
    }
    else if(language === 'HTML') {
       return (<div className="details"><div className="html"></div><p>HTML</p></div>)
    }
    else if( language === 'Ruby') {
       return (<div className="details"><div className="ruby"></div><p>Ruby</p></div>)
    }
    else if( language === 'Python') {
       return (<div className="details"><div className="python"></div><p>Python</p></div>)
    }
     else if( language === 'Java') {
       return (<div className="details"><div className="java"></div><p>Java</p></div>)
    }
     else if( language === 'C') {
       return (<div className="details"><div className="c"></div><p>C</p></div>)
    }
     else if( language === 'PHP') {
       return (<div className="details"><div className="php"></div><p>PHP</p></div>)
    }
     else if( language === 'C++') {
       return (<div className="details"><div className="c-plus"></div><p>C++</p></div>)
    }
    else{
      return null;
    }
  }