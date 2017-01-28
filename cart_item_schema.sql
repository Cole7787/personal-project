create table cartItem(
  id serial primary key,
  productId int references product(id),
  quantity int,
  cartId int references cart(id)
);
