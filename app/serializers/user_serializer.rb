class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :lfg, :image, :location 
end
