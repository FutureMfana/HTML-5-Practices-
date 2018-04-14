function name_func() {
    
    document.getElementById('error_name').innerHTML = "";
    document.getElementById('error_name').style.color = 'red';

    document.getElementById('name').style.borderBottom = "2px red double";

    var name = document.getElementById('name').value;
    name = name.trim();
    if (name == ""){
        document.getElementById('error_name').innerHTML = "Name is required *";
        document.getElementById('name').focus();
        return;
    }

    document.getElementById('name').style.borderBottom = "green 2px solid";
}

function sur_func(){
    
    document.getElementById('error_sur').innerHTML = "";
    document.getElementById('error_sur').style.color = 'red';

    document.getElementById('sur').style.borderBottom = "2px red double";

    var sur = document.getElementById('sur').value;
    sur = sur.trim();
    if (sur == ""){
        document.getElementById('error_sur').innerHTML = "Surname is required *";
        document.getElementById('sur').focus();
        return;
    }

    document.getElementById('sur').style.borderBottom = "green 2px solid";
}

function id_func() {
    
    document.getElementById('error_id_no').innerHTML = "";
    document.getElementById('error_id_no').style.color = 'red';

    document.getElementById('id_no').style.borderBottom = "2px red double";

    var id = document.getElementById('id_no').value;
    id = id.trim();
    if (id == ""){
        document.getElementById('error_id_no').innerHTML = "Identity number is required *";
        document.getElementById('id_no').focus();
        return;
    }
    document.getElementById('id_no').style.borderBottom = "green 2px solid";
    dob(id);
    gender(id);
    citizen(id);
}
function citizen(id){
    document.getElementById('nationality').style.borderBottom = "2px green solid";
    document.getElementById('nationality').value = "South African Citizen";

    var nat = id.substring(10,11)
    if (nat * 1 == 1){
        document.getElementById('nationality').value = "Permanent South African Resident";
    }
}
function gender(id){
    document.getElementById('gender').style.borderBottom = "2px green solid";
    var gen = id.substring(6,7);

    if (gen * 1 <= 4){
        document.getElementById("gender").value = "Female";
        return;
    }
    document.getElementById("gender").value = "Male";
}
function dob(id){
     var mon = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
     dd = id.substring(4,6);
     mm = id.substring(2,4);
     yy = id.substring(0,2);

     if ((1 * yy ) > 18){
         yy = "19" + yy;
     }else{
         yy = "20" + yy;
     }

     ddmmyy = dd + "/" + mon[(1 * mm) - 1] + "/" + yy

     document.getElementById('dob').style.borderBottom = "2px green solid";
     document.getElementById('dob').value = ddmmyy;

}
function func_race(){
    if (document.getElementById('race').value=="None"){
        document.getElementById('race').style.borderBottom = "2px red solid";
        document.getElementById('error_race').style.color= "red";
        document.getElementById('error_race').innerHTML = "*Race is required";
        document.getElementById('race').focus();
        return;
    }
    
    document.getElementById('error_race').innerHTML = "";
    document.getElementById('race').style.borderBottom = "2px green solid";
}