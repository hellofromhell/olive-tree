<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Olive-Tree Index</title>

  <link href="/laravel/olive-tree/public/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="/laravel/olive-tree/public/stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
  <!--[if IE]>
      <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <![endif]-->

</head>
<body>
<h2>Product List</h2>
<button type="button" class="new-product-btn">Add product</button>
<div id="new-product-holder"></div>
<script type="text/template" id="add-form">
  <form action="" id="new-product" class="product">

    <label for="new-title">Title: </label>
    <input id="new-title" type="text">

    <label for="new-price">Price: </label>
    <input id="new-price" type="number">

    <label for="new-description">Description: </label>
    <input id="new-description" type="text">

    <button type="button" class="cancel">Cancel</button></div>
    <button type="button" class="save">Add product</button></div>
  </form>
</script>

<ul id="product-container"></ul>

<script id="product-single" type="text/template">
  <ul>
    <li class="title"><p><%= title %></p>
    <input class="edit-title" value="<%= title %>"></li>

    <li class="price"><p>&pound;<%= price %></p>
    <input class="edit-price" value="<%= price %>"></li>

    <li class="description"><p><%= description %></p>
    <input class="edit-description" value="<%= description %>"></li>

    <li><button class="delete" type="button">Delete</button></li>
    <li><button class="edit" type="button">Edit</button></li>
    <li><button class="cancel" type="button">Cancel</button></li>
    <li><button class="save" type="button">Save changes</button></li>
  </ul>
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
<script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
<script src="js/app.js"></script>
<script src="js/models/product.js"></script>
<script src="js/collections/products.js"></script>
<script src="js/views/product.js"></script>
<script src="js/views/products.js"></script>
<script src="js/views/newProduct.js"></script>
<script src="js/views/chrome.js"></script>
<script src="js/router.js"></script>
<script src="js/application.js"></script>

</body>
</html>