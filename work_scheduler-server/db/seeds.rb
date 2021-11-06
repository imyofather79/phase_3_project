puts "🌱 Seeding..."

# Manager.destroy_all
# Staff.destroy_all
# WorkDay.destroy_all


Manager.create([
    {
        first_name: "Peter",
        last_name: "Smith",
        department: "Accounting",
        username: "Manager1",
        email: "123@123.com",
        password: "123456"
    },
    {
        first_name: "Karen",
        last_name: "Johnson",
        department: "Administration",
        username: "Manager2",
        email: "1234@123.com",
        password: "123456"
    },
    {
        first_name: "Victor",
        last_name: "Soto",
        department: "Shipping",
        username: "Manager3",
        email: "1235@123.com",
        password: "123456"
    },
    {
        first_name: "Jon",
        last_name: "Baker",
        department: "Operation",
        username: "Manager4",
        email: "1236@123.com",
        password: "123456"
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
        password: "123456"
    },
    {
        first_name: "Lil",
        last_name: "Jon",
        department: "Accounting",
        paid_rate: 24,
        username: "Staff2",
        email: "1238@123.com",
        password: "123456"

    },
    {
        first_name: "Justin",
        last_name: "Timberlake",
        department: "Accounting",
        paid_rate: 19,
        username: "Staff3",
        email: "1239@123.com",
        password: "123456"

    },
    {
        first_name: "Brittney",
        last_name: "Spears",
        department: "Shipping",
        paid_rate: 19,
        username: "Staff4",
        email: "1230@123.com",
        password: "123456"
    },
    {
        first_name: "John",
        last_name: "Wick",
        department: "Operation",
        paid_rate: 100,
        username: "Staff5",
        email: "12311@123.com",
        password: "123456"

    },
    {
        first_name: "Fifty",
        last_name: "Cents",
        department: "Shipping",
        paid_rate: 0.5,
        username: "Staff6",
        email: "12312@123.com",
        password: "123456"

    }
])

puts "✅ Done seeding!"
