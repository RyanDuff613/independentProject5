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
    this.mercuryYears = parseInt((this.earthYears*4.16).toFixed(0));
    this.venusYears = parseInt((this.earthYears*1.61).toFixed(0));
    this.marsYears = parseInt((this.earthYears * .53).toFixed(0));
    this.jupiterYears = parseInt((this.earthYears *.08).toFixed(0));
  }

  lifeExpectancy(){
    let lifeExpectancy = 0;
    if (this.sex === 'male'){
      lifeExpectancy = 76.3;
    } else{
      lifeExpectancy = 81.4;
    }
    return lifeExpectancy;
  }

  timeLeft(){
    let timeLeftEarthYears = 0;
    timeLeftEarthYears = this.lifeExpectancy() - this.earthYears;
    let timeLeftMercuryYears = 0;
    let timeLeftVenusYears = 0;
    let timeLeftMarsYear = 0;
    let timeLeftJupiterYears = 0;
    timeLeftMercuryYears = (timeLeftEarthYears * 4.16).toFixed(0);
    timeLeftVenusYears = (timeLeftEarthYears *1.61).toFixed(0);
    timeLeftMarsYear = (timeLeftEarthYears * .53).toFixed(0);
    timeLeftJupiterYears = (timeLeftEarthYears * .08).toFixed(0);
    return timeLeftEarthYears;
  }
}

