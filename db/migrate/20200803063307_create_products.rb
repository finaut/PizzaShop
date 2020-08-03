class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.decimal :size
      t.boolean :is_spicy # буль тип острая да или нет
      t.boolean :is_veg # спрашиваем веган
      t.boolean :is_best_offer # админ сможет держать вверху лучшие предложение
      t.string :path_to_image # путь расположение фотографии


      t.timestamps
    end
  end
end
