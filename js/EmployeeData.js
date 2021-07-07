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