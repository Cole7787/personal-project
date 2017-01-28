select cart, cartItem, product
from cart
inner join cartItem on cart.id = cartItem.cartId
inner join product on cartItem.productId = product.id
where cart.id = $1;
