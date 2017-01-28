select * from cartItem
where id = $1
set (quantity) values ($2)
