require 'rails_helper'

RSpec.describe Post, type: :model do
  it { should validate_length_of(:description).is_at_least(1).is_at_most(10000) }
end
