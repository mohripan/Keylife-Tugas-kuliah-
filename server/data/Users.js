import bcrypt from "bcryptjs";

const users = [
    {
        username: "Admin",
        email: "admin@admin.com",
        password: bcrypt.hasSync("123456", 10),
        isAdmin: true
    },
    {
        username: "Mohripan",
        email: "mohripan@gmail.com",
        password: bcrypt.hasSync("Mohripan123", 10)
    }
];

export default users;