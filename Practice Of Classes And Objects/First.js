const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    // calcTax2 : function() {
    //     console.log("Your tax rate is 20%");
    // },

};

const karanArjun = {
    salary : 50000,

    calcTax1() {
        console.log("Tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;

