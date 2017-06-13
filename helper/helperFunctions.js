export function extractPageOptions (data) {
  const pageOptions = data.split(',')
  let obj = {}
  
  for(var i = 0; i < pageOptions.length; i++) {
    if(pageOptions[i].indexOf('next') !== -1) {
      obj['next'] = pageOptions[i].substring(1,pageOptions[i].length-13);
    }
    else if(pageOptions[i].indexOf('prev') !== -1) {
        obj['prev'] = pageOptions[i].substring(1,pageOptions[i].length-13);
        
      }
    else if(pageOptions[i].indexOf('last') !== -1){
       obj['last'] = pageOptions[i].substring(92,pageOptions[i].length-13);
    }
  }
  console.log(pageOptions)
  console.log(obj);

  return obj;
}