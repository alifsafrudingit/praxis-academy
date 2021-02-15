function Vehicle(make, model, color, year) {
  (this.make = make),
    (this.model = model),
    (this.color = color),
    (this.year = year),
    (this.getName = function () {
      return `${this.make} ${this.model}`;
    });
}

let car = new Vehicle("Toyota", "Corolla", "Black");
let car1 = new Vehicle("Honda", "Civic", "Yellow");
car1.year = "2017";
console.log(car1);
