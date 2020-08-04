# если не будет работать  переписать в одну строку
class AddProduct < ActiveRecord::Migration[6.0]
  def change
    Product.create({:title => 'Margarita',
       :description => 'This is margarita pizza',
       :price => 350,
       :size => 30,
       :is_spicy => false,
       :is_veg => false,
       :is_best_offer => false,
       :path_to_image => '/images/margarita.jpg'})

       Product.create({:title => 'Pepperoni',
         :description => 'This is pepperoni pizza',
         :price => 400,
         :size => 30,
         :is_spicy => false,
         :is_veg => false,
         :is_best_offer => false,
         :path_to_image => '/images/pepperoni.jpg'})

       Product.create({:title => 'Hawaii',
        :description => 'This is hawaii pizza',
        :price => 350,
        :size => 40,
        :is_spicy => false,
        :is_veg => false,
        :is_best_offer => false,
        :path_to_image => '/images/hawaii.jpg'})
  end
end
