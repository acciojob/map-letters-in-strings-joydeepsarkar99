//your JS code here. If required.
function mapLetters(str) {
	let obj = {}
	for(let i=0;i<str.length;i++){
	  let s = str[i]
	  if(s in obj == false){
	    obj[s] = []
	  }
	  obj[s].push(i)
	}
	return obj
}


// const s = prompt("Enter String:");
// alert(mapLetters(s));
