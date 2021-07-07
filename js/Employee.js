window.addEventListener('DOMContentLoaded',(event) => {

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output'); 
    console.log(salary.value);
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });

    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error'); 
    text.addEventListener('input', function() {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(text.value))
            textError.textContent = "";
        else 
            textError.textContent = "Name is Incorrect";
            });


    
});
function getByID(id){
    return document.querySelector(id).value;
}
function submitted(){
    let empdata = new EmployeeData();
    empdata.name = getByID('#name');
    empdata.profilePic = getByID('input[name="profile"]:checked');
    empdata.gender = getByID('input[name="gender"]:checked');
    empdata.startDate = getByID('#joindate');
    empdata.salary = getByID('#salary');
    var arr = [];
    for(var c of document.querySelectorAll('input[name="dept"]:checked').values() ){
        arr.push(c);
    }
    empdata.department = arr;
    // alert(getByID('#name'));
    // alert(getByID('input[name="profile"]:checked'));
    alert(empdata.toString());
}


class EmployeeData{
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get startDate(){
        return this._startdate;
    }
    set startDate(startdate){
        this._startdate = startdate;
    }
    toString(){
        return "name=" + this.name + ", gender='" + this.gender + 
        ", profilePic='" + this.profilePic +
        ", salary=" + this.salary;
    }
    
}



