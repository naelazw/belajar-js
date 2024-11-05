let angka = 41;

if (angka >= 50){ //berupa true or false
    console.log("LULUS")
}else if(angka >=40){
    console.log("ga lulus")
}else{
    console.log("ga lulus BANGET")
}


nilai = 78;
if (nilai >= 80 && nilai <= 100){
    console.log("DAPAT A")
}else if(nilai >=70 && nilai < 80){
    console.log("DAPAT B")
}else if(nilai >=60 && nilai < 70){
    console.log("DAPAT c")
}


// and or not

nilai = 50

let banding = nilai >=80 && nilai <= 100;
console.log(banding)
let banding1 = nilai >=80 || nilai < 100;
console.log(banding1)
let banding2 = !50;
console.log(banding2)


//bedanya =  dengan == 
let x = 50;
let y = "50";


let banding4 = x == y  //tida penting tipe data
console.log(banding4, 4)
let banding5 = x === y //penting tipe data
console.log(banding5, 5)



//if bersarang

let number  = 4 ;

if (number > 5 ){
    if(number % 2 ===0){
        console.log("lebih dari 5 dan genap")
    }else{
        console.log("lebih dari 5 dan ganjil")
    }
}else{
    if(number %2 ===0){
        console.log("lebih kecil dari 5 dan genap")
    }else{
        console.log("lebih kecil dari 5 dan ganjil")
    }
}