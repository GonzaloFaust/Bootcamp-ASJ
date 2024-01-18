--1 - Listar todos los artitas por Discografica, ordenados por el nombre del artista
SELECT a.nombre as Nombre, d.nombre as Discografica
FROM artista a
inner join discografica d on d.id = a.discografica_id
order by a.nombre asc, d.nombre asc;

--2
--Que Discográfica NO tiene artistas?

SELECT d.nombre FROM discografica d
WHERE d.id NOT IN(SELECT a.discografica_id FROM artista a)
select * from discografica

--3 - Listar el numero de canciones por artista en orden descendiente

SELECT a.nombre as 'Nombre Artista', COUNT(c.id) as 'Cantidad Canciones'
FROM artista a
inner join album alb ON a.id= alb.artista_id
inner join canciones c ON c.album_id = alb.id
GROUP BY a.nombre
ORDER BY COUNT(c.id) desc

--4 - Que artista grabó el mayor numero de canciones?

SELECT TOP (1) a.nombre as 'Nombre Artista', COUNT(c.id) as 'Cantidad Canciones'
FROM artista a
inner join album alb ON a.id= alb.artista_id
inner join canciones c ON c.album_id = alb.id
GROUP BY a.nombre
ORDER BY COUNT(c.id) desc

SELECT a.nombre as 'Nombre Artista', COUNT(c.id) as 'Numero de canciones'
FROM artista a
INNER JOIN album alb ON a.id=alb.artista_id
INNER JOIN canciones c ON alb.id=c.album_id
GROUP BY a.nombre
HAVING COUNT(c.id) = (SELECT MAX(cuenta_canciones) FROM (SELECT COUNT(id) as cuenta_canciones FROM canciones GROUP BY album_id) as subquery);

--5 - Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?
SELECT a.nombre as 'Nombre Artista', alb.nombre as 'Nombre Album', COUNT(c.id) as 'Canciones < 5' FROM artista a
inner join album alb ON alb.artista_id = a.id
inner join canciones c ON c.album_id = alb.id
WHERE c.duracion < 5
group by alb.nombre, a.nombre

--6 - En relación con la consulta anterior, muestra también las canciones y su duración

SELECT a.nombre as 'Nombre Artista', alb.nombre as 'Nombre Album', c.nombre as 'Cancion', c.duracion as 'Duracion' FROM artista a
inner join album alb ON alb.artista_id = a.id
inner join canciones c ON c.album_id = alb.id
WHERE c.duracion < 5
ORDER BY a.nombre, alb.nombre

--7 - Qué artistas grabaron canciones mas largas que 5 minutos, y cuántas canciones fueron?

SELECT a.nombre as 'Nombre Artista', COUNT(c.id) as 'Canciones > 5' FROM artista a
inner join album alb ON alb.artista_id = a.id
inner join canciones c ON c.album_id = alb.id
WHERE c.duracion > 5
group by a.nombre;


--8 - En que año se grabaron la mayoría de las canciones?
SELECT TOP (1) alb.anio as 'Año', COUNT(c.id) 
FROM album alb
INNER JOIN canciones c ON alb.id= c.album_id
group by alb.anio;



--9 - Mostrar el ranking de los 5 artistas, album, cancion y año con las canciones más largas
SELECT TOP (5) a.nombre as 'Artista', alb.nombre as 'Album', c.nombre as 'Cancion', alb.anio as 'Año', c.duracion as 'Duracion' FROM artista a 
INNER JOIN album alb ON alb.artista_id = a.id 
INNER JOIN canciones c ON c.album_id = alb.id
ORDER BY c.duracion DESC;

--10 - Duración total de todas las canciones grabadas por cada artista en orden descendente
SELECT a.nombre as 'Artista', ROUND(SUM(c.duracion),2) as Duracion 
FROM artista a
INNER JOIN album alb ON alb.artista_id = a.id
INNER JOIN canciones c ON c.album_id = alb.id
GROUP BY a.nombre
ORDER BY SUM(c.duracion) DESC

SELECT a.nombre as 'Nombre Artista',  ROUND(SUM(c.duracion), 2) as 'Suma Duracion'
FROM artista a
INNER JOIN album alb ON a.id=alb.artista_id
INNER JOIN canciones c ON alb.id=c.album_id
GROUP BY a.nombre
ORDER BY SUM(c.duracion) DESC;

--11 - Que artistas y album no tienen canciones de menos de 5 minutos?
SELECT a.nombre as 'Artista', alb.nombre as 'Album' FROM artista a
INNER JOIN album alb ON a.id=alb.artista_id
WHERE alb.id NOT IN (SELECT alb.id FROM album alb 
						INNER JOIN canciones c ON c.album_id = alb.id
						WHERE c.duracion < 5)

--12 - Mostrar el top 3 de cada artista con el promedio de duración de las canciones, en orden descendente con la canción mas larga primero
SELECT TOP 3 a.nombre 'Nombre Artista', ROUND(AVG(c.duracion),2) as 'Promedio de duracion'
FROM artista a
JOIN album al ON al.artista_id = a.id
JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY AVG(c.duracion) DESC


--13 - Qué artistas no lanzaron un album durante la decada de 1980 y 1990?

SELECT a.nombre  as 'Artista'
FROM artista a
WHERE a.id NOT IN (SELECT a.id
					FROM artista a
					INNER JOIN album alb ON alb.artista_id = a.id
					WHERE alb.anio BETWEEN 1980 AND 1990)


--14 - Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)
select alb.nombre as 'Album', FLOOR(SUM(c.duracion)) as Minutos, FLOOR(((SUM(c.duracion)-FLOOR(SUM(c.duracion))))*60) as Segundos
  from album alb 
INNER JOIN canciones c ON c.album_id = alb.id
WHERE alb.nombre LIKE '%Sgt. Pepper%'
GROUP BY alb.nombre

