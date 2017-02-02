select *
from cart
join product on cart.productId = product.id
where userId = $1
order by cart.id;
