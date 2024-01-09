--cuantos pedidos realizo cada cliente?

select c.name, count(o.id), max(o.total) from clients c 
join orders o on o.id_client = c.id
group by c.name


--que cantidad de  c/producto se alquilo o compro?

SELECT
    p.title AS Producto,
    SUM(d.cant) AS Total,
	SUM(d.cant * d.is_buy) AS Ventas,
    SUM(d.cant * (1 - d.is_buy)) AS Alquileres   
FROM
    products p
JOIN
    order_details d ON d.id_product = p.id
GROUP BY
    p.title;

--9	Breaking Bad
--8	Stranger Things 2
--5	Queen - A Night at the Opera
--4	The Shawshank Redemption
--3	The Rolling Stones - Sticky Fingers
--3	Inception
--3	Pink Floyd - The Dark Side of the Moon


--top 5 de los generos mas solicitados

select TOP 2 g.gender, count(p.id) as CantidadSolicitudes from genders g join products p on g.id=p.id_gender
join order_details od on od.id_product = p.id
group by g.gender
order by CantidadSolicitudes DESC


--empleados (legajo, nombre y apellido) que trabajaron entre el 12 y 15 de enro de 2024
--ordenado por fecha z-a y legajo a-z

select e.legajo, e.name, e.last_name , max(o.date) from employees e
join orders o on o.id_employee = e.id
where o.date between '2024-01-12' and '2024-01-15'
group by e.legajo,e.name, e.last_name
order by max(o.date) desc, e.legajo asc

--Metodos de pago utilizados por los socios, siempre que sea mas de 2 veces

select pm.payment_method, COUNT(pm.payment_method) as 'veces utilizado' from clients c join orders o on o.id_client = c.id join payment_methods pm on pm.id = o.id_payment_method
where c.is_partner = 1
group by pm.payment_method
having count(pm.payment_method) > 2

insert into orders(number_order, date, total, discount, id_client, id_employee,id_payment_method)
values
(1018, '2024-01-15',500, 15, 3,5, 2),
(1019, '2024-01-15',500, 15, 3,5, 2),
(1020, '2024-01-15',500, 15, 3,5, 2)

