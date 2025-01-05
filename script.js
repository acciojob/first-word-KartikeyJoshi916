function firstWord(s) {
	s=s.trim();
	// if(s.length==0){
	// 	return '';
	// }
	let ans="";
	for(let i=0;i<s.length;i++){
		if(s[i]==' '){
			break;
		}else{
			ans+=s[i];
		}
	}
	return ans;
} 

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 
