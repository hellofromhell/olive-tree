<?php

class ProductsTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $products = [
      ['title' => 'Kitchen Table', 'price' => '99.99', 'description' => 'I will not let this tea go cold'],
      ['title' => 'Nice Lamp', 'price' => '109.33', 'description' => 'It did not go cold! What a total result!']
    ];

    DB::table('products')->insert($products);
  }

}