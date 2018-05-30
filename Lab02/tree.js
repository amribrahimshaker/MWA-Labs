const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

const find = fileName => tree => {
	
	if(tree.files.includes(fileName)){
		return true;
	}else{
		for(let i=0; i< tree.subFolders.length; i++){
			let res = find(fileName)(tree.subFolders[i])
			if(res)
				return true;
		}
	}
	return false;
}
	
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false

console.log(find("summer1.jpg")(tree)); // true
