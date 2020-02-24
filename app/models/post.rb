class Post < ApplicationRecord
  MINIMUM_DESCRIPTION_LENGTH = 1
  MAXIMUM_DESCRIPTION_LENGTH = 10000

  validates :description, length: {
    minimum: MINIMUM_DESCRIPTION_LENGTH,
    maximum: MAXIMUM_DESCRIPTION_LENGTH
  }
end
