
class Person{
    
    private _firstname: string = "";

    get firstname(){
        return this._firstname;
    }

    set firstname(value: string){
        this._firstname = value.toUpperCase();
    }
}

let person: Person = new Person();
person.firstname = "Asaad";
console.log(person.firstname);

