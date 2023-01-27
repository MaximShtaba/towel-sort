module.exports = function towelSort (matrix) {
	let reduseValue;
	if (typeof matrix !== "object") {return matrix = [ ]} else {
	 reduseValue = matrix.reduce(function(previousValue, item, index, array){
		 item.sort((a,b)=>(index%2===0)? a-b:b-a).map(index=>previousValue.push(index));
		return previousValue; }, [ ] ); 
	  return reduseValue;}
 }
