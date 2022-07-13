import bcrypt from "bcryptjs";

const users = [
    {
        nim:" 10219001",
        username: "Admin",
        email: "admin@admin.com",
        firstName: "Admin",
        lastName: "Admin",
        university: "UNIKOM",
        saldo: 10000,
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        nim: "10219002",
        username: "Mohripan",
        email: "mohripan@gmail.com",
        firstName: "Mohammad",
        lastName: "Ripan",
        university: "UNIKOM",
        saldo: 10000,
        password: bcrypt.hashSync("Mohripan123", 10)
    }
];

export default users;