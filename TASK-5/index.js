class Worker {
  #name;
  #surname;
  #rate;
  #days;
  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  // GETTERS
  getName() {
    return this.#name;
  }
  getSurname() {
    return this.#surname;
  }
  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }
  getRate() {
    return this.#rate;
  }
  getDays() {
    return this.#days;
  }
  getSalary() {
    return this.#rate * this.#days;
  }
  //SETTERS
  setRate(value) {
    this.#rate = value;
  }
  setDays(value) {
    this.#days = value;
  }
}

const worker = new Worker("Name", "Surname", 10, 31);

console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

worker.setRate(20); // let's increase rate
worker.setDays(10); // let's decrease days
console.log(worker.getSalary()); //outputs 200 - what equal 20*10
