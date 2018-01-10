function Phone(brand, price, color, year, segment) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.year = year;
  this.segment = segment;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".The launch date of this " + this.segment + " class model is " + this.year + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 1000, "black", 2017, "premium");
var iPhone6s = new Phone("Apple", 2000, "white", 2016, "standard");
var OnePlusOne = new Phone("OnePlus", 3000, "grey", 2018, "business");

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();








