puts "🌱 Seeding..."

Manager.destroy_all
Staff.destroy_all
WorkDay.destroy_all


Manager.create([
    {
        first_name: "Peter",
        last_name: "Smith",
        department: "Accounting"
    },
    {
        first_name: "Karen",
        last_name: "Johnson",
        department: "Administration"
    },
    {
        first_name: "Victor",
        last_name: "Soto",
        department: "Shipping"
    },
    {
        first_name: "Jon",
        last_name: "Baker",
        department: "Operation"
    }
])

Staff.create([
    {
        first_name: "Sam",
        last_name: "Smith",
        department: "Administration",
        paid_rate: 31
    },
    {
        first_name: "Lil",
        last_name: "Jon",
        department: "Accounting",
        paid_rate: 24

    },
    {
        first_name: "Justin",
        last_name: "Timberlake",
        department: "Accounting",
        paid_rate: 19

    },
    {
        first_name: "Brittney",
        last_name: "Spears",
        department: "Shipping",
        paid_rate: 19
    },
    {
        first_name: "John",
        last_name: "Wick",
        department: "Operation",
        paid_rate: 100

    },
    {
        first_name: "Fifty",
        last_name: "Cents",
        department: "Shipping",
        paid_rate: 0.5

    }
])

puts "✅ Done seeding!"
