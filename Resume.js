function yellow() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
  }
  
  function pink() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#ffa7e7";
  }
  
  function blue() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#a7ebff";
  }
  
  function white() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
  }
  
  function form() {
    var x = document.form["myForm"]["fskill"].value;
    }
  
  function removeSkill() {
    var x = document.getElementById("mySelect");
    x.remove(x.selectedIndex);
  }
  
  function insertValue() {
    var txtVal = document.getElementById("val").value,
        select = document.getElementById("mySelect"),
        newOption = document.createElement("OPTION"),
        newOptionVal = document.createTextNode(txtVal);
        
     newOption.appendChild(newOptionVal);
     select.insertBefore(newOption,select.firstChild);
  }