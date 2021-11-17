puts "🌱 Seeding..."

User.create([
    {
        first_name: "Peter",
        last_name: "Smith",
        department_id: 1,        
        paid_rate: 31,
        username: "Manager1",
        email: "1@1.com",
        password: "1",
        is_manager: true
    },
    {
        first_name: "Karen",
        last_name: "Johnson",
        department_id: 2,
        username: "Manager2",
        paid_rate: 31,
        email: "1234@123.com",
        password: "1",
        is_manager: true
    },
    {
        first_name: "Sam",
        last_name: "Smith",
        department_id: 3,
        paid_rate: 31,
        username: "Staff1",
        email: "1237@123.com",
        password: "1",
        is_manager: false
    },
    {
        first_name: "Lil",
        last_name: "Jon",
        department_id: 1,
        paid_rate: 24,
        username: "Staff2",
        email: "1238@123.com",
        password: "1",
        is_manager: false
    },
    {
        first_name: "Big",
        last_name: "Sean",
        department_id: 2,
        paid_rate: 42,
        username: "Staff3",
        email: "1238@123.com",
        password: "1",
        is_manager: false
    },
    {
        first_name: "Justin",
        last_name: "Timberlake",
        department_id: 3,
        paid_rate: 19,
        username: "Staff4",
        email: "1239@123.com",
        password: "1",
        is_manager: false
    }
])

Department.create([
    {
        department: "Accounting"
    },
    {
        department: "Shipping"
    },
    {
        department: "Operation"
    },
    {
        department: "Logistics"
    },
    {
        department: "Retails"
    },
    {
        department: "Adminstration"
    }
])

puts "✅ Done seeding!"
