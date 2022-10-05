import bcrypt from 'bcryptjs';

const users = [
    {
        username: "Admin User",
        email: "admin@falconstore.com",
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true
    },
    {
        username: "Nouman Ayaz",
        email: "noman@gmail.com",
        password: bcrypt.hashSync('noman', 10)
    },
    {
        username: "Dawood Ansari",
        email: "dawood@gmail.com",
        password: bcrypt.hashSync('dawood', 10)
    }
]

export default users;