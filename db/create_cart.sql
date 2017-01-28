insert into cart(userId)
  values($1)
  returning id;
