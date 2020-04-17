export class User {
  constructor(name, age, sex, country){
    this.name = name;
    this.earthYears = age;
    this.sex = sex;
    this.country = country;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
  }

  convertYears(){
    this.mercuryYears = parseInt((this.earthYears*4.16).toFixed(1));

  }
}

