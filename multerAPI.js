const fs = require("fs");


function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}
jsonReader("./customer.json", (err, customer) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Name of the customer is :", customer.name);
});

jsonReader("./customer.json", (err, customer) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    // increase customer order count by 1
    customer.orderCount += 1;
    fs.writeFile("./newCustomer.json", JSON.stringify(customer), err => {
        if (err) console.log("Error writing file:", err);
    });
});