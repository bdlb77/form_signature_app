class CreateFormData < ActiveRecord::Migration[5.2]
  def change
    create_table :form_data do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.boolean :cool
      t.boolean :hipster
      t.boolean :swag
      t.boolean :spiritual

      t.timestamps
    end
  end
end
