var all_contacts = []
var row_id;

function addContact(){
    var fname = document.getElementById("fname_1").value;
    var lname= document.getElementById("lname_1").value;
    var phone = document.getElementById("ph_1").value;
    var image = document.getElementById("image").value;

    var data = {
        firstName:fname,
        lastName:lname,
        phone:phone,
        image:image,
    };

    all_contacts.push(data);
    console.log(all_contacts);

     document.getElementById("fname_1").value="";
    document.getElementById("lname_1").value="";
    document.getElementById("ph_1").value="";
    document.getElementById("image").value="";

    displayContacts();
}

function displayContacts(){
    document.getElementById("tbody").innerHTML="";
    for(var i = 0; i < all_contacts.length; i++){
        var tr=document.createElement("tr");
        tr.setAttribute("id",i+1);
        
        var td1=document.createElement("td");
        td1.innerHTML=i+1;
        tr.appendChild(td1);
        
        var td2=document.createElement("td");
        td2.innerHTML=all_contacts[i].firstName;
        tr.appendChild(td2);
        
        var td3=document.createElement("td");
        td3.innerHTML=all_contacts[i].lastName;
        tr.appendChild(td3);
        
        var td4=document.createElement("td");
        td4.innerHTML=all_contacts[i].phone;
        tr.appendChild(td4);
        
        var td5=document.createElement("td");
        td5.innerHTML=all_contacts[i].image;
        tr.appendChild(td5);
        
        var td6=document.createElement("td");
        

        var edit_btn=document.createElement("button");
        edit_btn.innerHTML="Edit";
        edit_btn.setAttribute("class","btn btn-primary");
        edit_btn.setAttribute("onclick","edit(event)");
        edit_btn.setAttribute("id","edit_btn");
        td6.appendChild(edit_btn);
        
        var del_btn=document.createElement("button");
        del_btn.innerHTML="Delete"; 
        del_btn.setAttribute("class","btn btn-danger");
        del_btn.setAttribute("onclick","delete_(event)");
        del_btn.setAttribute("id","del_btn");

        td6.appendChild(del_btn);
        tr.appendChild(td6);

        var tbody=document.getElementById("tbody");
        tbody.append(tr);
         
    }

}

function edit(e){
    var row = e.target.parentElement.parentElement.id;
    var object = all_contacts[row - 1];
    row_id = row - 1;

    document.getElementById("fname_1").value = object.firstName;
    document.getElementById("lname_1").value = object.lastName;
    document.getElementById("ph_1").value = object.phone;
    document.getElementById("image").value;

    document.getElementById("add_new").setAttribute("style", "display:none");
    document.getElementById("save").setAttribute("style", "display:block")
}

function saveContact(){
    var fname = document.getElementById("fname_1").value;
    var lname= document.getElementById("lname_1").value;
    var phone = document.getElementById("ph_1").value;
    var image = document.getElementById("image").value;

    var data = {
        firstName:fname,
        lastName:lname,
        phone:phone,
        image:image,
    };

    all_contacts[row_id] = data;
    console.log(all_contacts);

   
    document.getElementById("fname_1").value="";
    document.getElementById("lname_1").value="";
    document.getElementById("ph_1").value="";
    document.getElementById("image").value="";

    displayContacts();
}

function delete_(e){
    
   
{   
    var rowindex =e.target.parentElement.parentElement.id;
    console.log(rowindex);
    document.getElementById("contactlist").deleteRow(rowindex);


}


    
    console.log(e)
}
