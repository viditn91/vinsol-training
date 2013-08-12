var data = {
  selectBox1: document.getElementById('selectBox1'),
  selectBox2: document.getElementById('selectBox2'),
  buttonAdd: document.getElementById('add'),
  buttonRemove: document.getElementById('remove'),
};

data.buttonAdd.addEventListener("click",addCountry);
data.buttonRemove.addEventListener("click",removeCountry);

function addCountry(){
  selectBox2.appendChild(selectBox1.options[selectBox1.selectedIndex]);
}

function removeCountry(){
  selectBox1.appendChild(selectBox2.options[selectBox2.selectedIndex]);
}