function printTime(msg) {
    console.log(msg, new Date());
    }
    setInterval(printTime, 1000, "1 초 간격");

    setInterval(function (msg) {
        console.log(msg, new Date());
        }, 1000, "1 초 간격");

        setInterval(function (msg) {
            console.log(msg, new Date());
            }, 1000, "1 초 간격");