update cartItem
where id = $1
set (qty) values ($2)
