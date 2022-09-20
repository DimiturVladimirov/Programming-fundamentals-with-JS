function vacation(people, type, day) {
    let totalPrice = 0;
    switch (type) {
        case "Students":
            if (day === "Friday") {
                totalPrice = people * 8.45
            } else if (day === "Saturday") {
                totalPrice = people * 9.8
            } else if (day === "Sunday") {
                totalPrice = people * 10.46

            }
            if (people >= 30) {
                totalPrice = totalPrice * 0.85
            }
            break;
        case "Business":
            if(people>= 100){
                people = people-10
            }
            if (day === "Friday") {
                totalPrice = people * 10.90
            } else if (day === "Saturday") {
                totalPrice = people * 15.60
            } else if (day === "Sunday") {
                totalPrice = people * 16

            }
           
            break;
        case "Regular":
            
            if (day === "Friday") {
                totalPrice = people * 15

            } else if (day === "Saturday") {
                totalPrice = people * 20

            } else if (day === "Sunday") {
                totalPrice = people * 22.5


            }
            if(people>=10 && people <=20){
                totalPrice= totalPrice*0.95
            }
            break;




    }
console.log(`Total price: ${totalPrice}`)








} vacation(30, "Students", "Sunday")