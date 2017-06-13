export function extractLastPage (data) {
  const pageOptions = data.split(',')
  let obj = {}
  
  for(var i = 0; i < pageOptions.length; i++) {
    if(pageOptions[i].indexOf('last') !== -1){
       obj['last'] = pageOptions[i].substring(92,pageOptions[i].length-13);
    }
  }
  console.log(obj)
  return obj;
}