function hacking() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            // console.log("Initializing Hacking...")
        }, 3000);
        
    });
}

function dots() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(".");
        }, 2000);
        setTimeout(() => {
            console.log(".");
        }, 3000);
        setTimeout(() => {
            console.log(".");
            resolve();  // Resolve the promise after the last dot
        }, 4000);
    });
}

async function hack() {
    await hacking();
    console.log("Reading your Files");
    // await dots();

    await hacking();
    console.log("Password Files Detected");
    // await dots();

    await hacking();
    console.log("Sending all Passwords and Personal Files to Server");
    // await dots();

    await hacking();
    console.log("Cleaning up");
    // await dots();
}

hack();