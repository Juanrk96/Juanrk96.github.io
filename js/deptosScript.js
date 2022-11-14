

function fillCategory(){
    // this function is used to fill the category list on load
    //addOption(document.drop_list.Category, "Ahuachapán", "Ahuachapán", "");
    addOption(document.getElementById("Category"), "Ahuachapán", "Ahuachapán", "");
    addOption(document.getElementById("Category"), "Cabañas", "Cabañas", "");
    addOption(document.getElementById("Category"), "Chalatenango", "Chalatenango", "");
    addOption(document.getElementById("Category"), "Cuscatlán", "Cuscatlán", "");
    addOption(document.getElementById("Category"), "La Libertad", "La Libertad", "");
    addOption(document.getElementById("Category"), "La Paz", "La Paz", "");
    addOption(document.getElementById("Category"), "La Unión", "La Unión", "");
    addOption(document.getElementById("Category"), "Morazán", "Morazán", "");
    addOption(document.getElementById("Category"), "San Miguel", "San Miguel", "");
    addOption(document.getElementById("Category"), "San Salvador", "San Salvador", "");
    addOption(document.getElementById("Category"), "San Vicente", "San Vicente", "");
    addOption(document.getElementById("Category"), "Santa Ana", "Santa Ana", "");
    addOption(document.getElementById("Category"), "Sonsonate", "Sonsonate", "");
    addOption(document.getElementById("Category"), "Usulután", "Usulután", "");
    }



function addOption(selectbox, value, text )
{
	var optn = document.createElement("OPTION","selected");
	optn.text = text;
	optn.value = value;

	selectbox.options.add(optn);
}

  function dispHandle(obj) {
	if (obj.style.display == "none")
		obj.style.display = "";
	else
		obj.style.display = "none";
  }
 