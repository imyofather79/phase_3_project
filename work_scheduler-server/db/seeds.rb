puts "🌱 Seeding..."

Manager.destroy_all
Staff.destroy_all
WorkDay.destroy_all
User.destroy_all

# user1 = User.create(
#     first_name: "Peter",
#     last_name: "Smith",
#     department: "Accounting",
#     username: "Manager1",
#     email: "123@123.com",
#     password: "123456",
#     is_manager: true
#     )
# user2 = User.create(
#     first_name: "Karen",
#     last_name: "Johnson",
#     department: "Administration",
#     username: "Manager2",
#     email: "1234@123.com",
#     password: "123456",
#     is_manager: true
# )
# user3 = User.create(
#     first_name: "Sam",
#     last_name: "Smith",
#     department: "Administration",
#     username: "Staff1",
#     email: "1237@123.com",
#     password: "123456",
#     is_manager: false
# )
# user4 = User.create(
#     first_name: "Lil",
#     last_name: "Jon",
#     department: "Accounting",
#     username: "Staff2",
#     email: "1238@123.com",
#     password: "123456",
#     is_manager: false
# )
# user5 = User.create(
#     first_name: "Justin",
#     last_name: "Timberlake",
#     department: "Accounting",
#     username: "Staff3",
#     email: "1239@123.com",
#     password: "123456",
#     is_manager: false
# )



User.create([
    {
        first_name: "Peter",
        last_name: "Smith",
        id: 1,
        department: "Accounting",
        username: "Manager1",
        email: "123@123.com",
        password: "123456",
        is_manager: true
    },
    {
        first_name: "Karen",
        last_name: "Johnson",
        department: "Administration",
        id: 2,
        username: "Manager2",
        email: "1234@123.com",
        password: "123456",
        is_manager: true
    },
    {
        first_name: "Sam",
        last_name: "Smith",
        department: "Administration",
        id: 3,
        username: "Staff1",
        email: "1237@123.com",
        password: "123456",
        is_manager: false
    },
    {
        first_name: "Lil",
        last_name: "Jon",
        department: "Accounting",
        id: 4,
        username: "Staff2",
        email: "1238@123.com",
        password: "123456",
        is_manager: false

    },
    {
        first_name: "Justin",
        last_name: "Timberlake",
        department: "Accounting",
        id: 5,
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



puts "✅ Done seeding!"
