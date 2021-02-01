class Car {
  constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car) {      
    console.log(`Max speed: ${car.maxSpeed}, Speed: ${car.speed}, isOn: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`);
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value < this.maxSpeed) {
        return this.speed = value;
    }
    console.log('Too fast');
  }

  decelerate(value) {
    this.speed -= value;
    if (this.speed <= 0) {
      console.log("The car has stopped. You reached 0 speed");
      this.speed = 0;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 30, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
