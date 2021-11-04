puts "🌱 Seeding spices..."

Manager.create([
    {
        first_name: "Peter",
        last_name: "Smith"
    },
    {
        first_name: "Karen",
        last_name: "Johnson"
    },
    {
        first_name: "Jon",
        last_name: "Baker"
    }
])

Staff.create([
    {
        first_name: "Sam",
        last_name: "Smith",
        paid_rate: 31
    },
    {
        first_name: "Lil",
        last_name: "Jon",
        paid_rate: 24

    },
    {
        first_name: "Justin",
        last_name: "Timberlake",
        paid_rate: 19

    },
    {
        first_name: "Brittney",
        last_name: "Spears",
        paid_rate: 19
    },
    {
        first_name: "John",
        last_name: "Wick",
        paid_rate: 100

    },
    {
        first_name: "Fifty",
        last_name: "Cents",
        paid_rate: 0.5

    }
])

puts "✅ Done seeding!"
