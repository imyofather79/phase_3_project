puts "🌱 Seeding..."

Manager.destroy_all
Staff.destroy_all
WorkDay.destroy_all
User.destroy_all

User.create([
    {
        username: "Manager1",
        email: "123@123.com",
        password: "123456",
        is_manager: true
    },
    {
        username: "Manager2",
        email: "1234@123.com",
        password: "123456",
        is_manager: true
    },
    {
        username: "Staff1",
        email: "1237@123.com",
        password: "123456",
        is_manager: false
    },
    {
        username: "Staff2",
        email: "1238@123.com",
        password: "123456",
        is_manager: false

    },
    {
        username: "Staff3",
        email: "1239@123.com",
        password: "123456",
        is_manager: false
    }
])



Manager.create([
    {
        first_name: "Peter",
        last_name: "Smith",
        department: "Accounting",
        username: "Manager1",
        email: "123@123.com",
        password: "123456",
        user_id: 1,
        is_manager: true
    },
    {
        first_name: "Karen",
        last_name: "Johnson",
        department: "Administration",
        username: "Manager2",
        email: "1234@123.com",
        password: "123456",
        user_id: 2,
        is_manager: true
    }
])

Staff.create([
    {
        first_name: "Sam",
        last_name: "Smith",
        department: "Administration",
        paid_rate: 31,
        username: "Staff1",
        email: "1237@123.com",
        password: "123456",
        user_id: 3,
        is_manager: false
    },
    {
        first_name: "Lil",
        last_name: "Jon",
        department: "Accounting",
        paid_rate: 24,
        username: "Staff2",
        email: "1238@123.com",
        password: "123456",
        user_id: 4,
        is_manager: false
    },
    {
        first_name: "Justin",
        last_name: "Timberlake",
        department: "Accounting",
        paid_rate: 19,
        username: "Staff3",
        email: "1239@123.com",
        password: "123456",
        user_id: 5,
        is_manager: false
    }
])

WorkDay.create([
    {
        day: "Monday",
        manager_id: 1,
        staff_id: 1
    },
    {
        day: "Tuesday",
        manager_id: 1,
        staff_id: 2
    },
    {
        day: "Tuesday",
        manager_id: 2,
        staff_id: 1
    }
])

puts "✅ Done seeding!"
