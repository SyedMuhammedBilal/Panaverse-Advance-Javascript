function carInfo(manufacturer, model, ...rest) {
  let car = {
    manufacturer,
    model,
    ...rest,
  };
  return car;
}

console.log(carInfo("Toyota", "Corolla", { color: "red", year: 2019 }));
console.log(carInfo("Honda", "Civic", { color: "blue", year: 2018 }, { color: "red", year: 2019 }));