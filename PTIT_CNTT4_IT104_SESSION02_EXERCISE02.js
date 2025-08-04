function greetingWithWeather(name,weather){
    if(weather=="sunny"){
        return `Chao ${name}! Hom nay troi nang tuyet voi!`;
    }else if(weather=="rainy"){
        return `Chao ${name}! Hom nay troi mua , hay mang theo o!`;
    }else{
        return `Chao ${name}! Hom nay thoi tiet khong xac dinh`;
    }
}
console.log(greetingWithWeather("Lan","sunny"));
console.log(greetingWithWeather("Vinh","rainy"));
console.log(greetingWithWeather("My","cloudy"));

