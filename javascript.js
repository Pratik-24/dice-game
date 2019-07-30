//functiocn cnsturctor
var cars = function(model, color, milage, price) {
  this.model = model;
  this.color = color;
  this.milage = milage;
  this.price = price;
};
cars.prototype.discount = function() {
  console.log(this.price - 3000);
};

var audi = new cars("audi", "black", 42, 10000);
var waganor = new cars("wagonar", "white", 48, 15000);

waganor.discount();
audi.discount();
console.log(audi);
console.log(waganor);
