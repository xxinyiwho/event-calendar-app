FactoryBot.define do
  factory :event do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    start_date { Faker::Date.in_date_period }
    end_date { Faker::Date.in_date_period }
  end
end