class CarDefault {
  label: string = "Generic Car";
  numWheels: number = 4;
  horn() {
    return "Beep";
  }
}

class Truck extends CarDefault {
  label = "Truck";
  numWheels = 18;
}

class Tesla extends CarDefault {
  label = "Tesla";
  numWheels = 4;
}

function washCar<T extends CarDefault>(car: T): T {
  console.log(`Label: ${car.label}`);
  console.log(`Wheels: ${car.numWheels}`);
  console.log(`Horn: ${car.horn()}`);
  
  return car;
}

const myTesla = new Tesla();
washCar<Tesla>(myTesla);
