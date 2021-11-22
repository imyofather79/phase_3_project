puts "🌱 Seeding..."


department1 = Department.create(
    department: "Accounting"
)
department2 = Department.create(
    department: "Shipping"
)
department3 = Department.create(
    department: "Operation"
)
department4 = Department.create(
    department: "Logistics"
)
department5 = Department.create(
    department: "Retails"
)
department6 = Department.create(
    department: "Adminstration"
)

user1 = User.create(
    first_name: "Peter",
    last_name: "Smith",
    department_id: department1.id,        
    paid_rate: 31,
    username: "Manager1",
    email: "manager1@1.com",
    password: "1",
    is_manager: true
)
user2 = User.create(
    first_name: "Karen",
    last_name: "Johnson",
    department_id: department2.id,
    username: "Manager2",
    paid_rate: 31,
    email: "1234@123.com",
    password: "1",
    is_manager: true
)
user3 = User.create(
    first_name: "Sam",
    last_name: "Smith",
    department_id: department3.id,
    paid_rate: 31,
    username: "Staff1",
    email: "1237@123.com",
    password: "1",
    is_manager: false
)
user4 = User.create(
    first_name: "Lil",
    last_name: "Jon",
    department_id: department4.id,
    paid_rate: 24,
    username: "Staff2",
    email: "1238@123.com",
    password: "1",
    is_manager: false
)
user5 = User.create(
    first_name: "Big",
    last_name: "Sean",
    department_id: department5.id,
    paid_rate: 42,
    username: "Staff3",
    email: "1238@123.com",
    password: "1",
    is_manager: false
)
user6 = User.create(
    first_name: "Justin",
    last_name: "Timberlake",
    department_id: department6.id,
    paid_rate: 19,
    username: "Staff4",
    email: "1239@123.com",
    password: "1",
    is_manager: false
)


puts "✅ Done seeding!"
