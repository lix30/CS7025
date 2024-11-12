function greeting(hour) {
    let greeting;

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 19) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    console.log(greeting);
}


