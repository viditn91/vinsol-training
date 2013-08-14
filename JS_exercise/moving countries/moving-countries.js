var data = {
  selectBox1:   document.getElementById('selectBox1'),
  selectBox2:   document.getElementById('selectBox2'),
  buttonAdd:    document.getElementById('add'),
  buttonRemove: document.getElementById('remove'),
};

data.buttonAdd.addEventListener("click",moveCountry);
data.buttonRemove.addEventListener("click",moveCountry);

function moveCountry(e){
	if(e.target.id == "add") {
		selectBox2.appendChild(selectBox1.options[selectBox1.selectedIndex]);
	} else {
		selectBox1.appendChild(selectBox2.options[selectBox2.selectedIndex]);
	}
}
