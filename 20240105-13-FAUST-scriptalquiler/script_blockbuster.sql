CREATE TABLE "penalizacion"(
    "pen_id" INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "cli_id" INT NOT NULL,
    "pedido_id" BIGINT NOT NULL
);
ALTER TABLE "penalizacion" ADD "pen_porc" float not null;
CREATE TABLE "operacion_pedido"(
    "op_ped_id" BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "prod_id" INT NOT NULL,
    "oper_id" TINYINT NOT NULL,
    "pedido_id" BIGINT NOT NULL,
    "prod_cantidad" TINYINT NOT NULL
);
CREATE TABLE "sucursales"(
    "sucu_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "sucu_pais" TINYINT NOT NULL,
    "sucu_estado" TINYINT NOT NULL,
    "sucu_ciudad" INT NOT NULL,
    "direccion" VARCHAR(30) NOT NULL
);

CREATE TABLE "descuento"(
    "desc_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "desc_porcentaje" FLOAT NOT NULL,
    "desc_concepto" VARCHAR(255) NOT NULL
);

CREATE TABLE "empleados"(
    "empl_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "sucu_id" TINYINT NOT NULL,
    "empl_nombre" VARCHAR(255) NOT NULL,
    "empl_apellido" VARCHAR(255) NOT NULL,
    "empl_dni" BIGINT NOT NULL,
    "empl_turno" TINYINT NOT NULL
);

CREATE TABLE "categorias"(
    "cat_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "cat_titulo" VARCHAR(255) NOT NULL,
    "cat_descripcion" VARCHAR(255) NOT NULL
);

CREATE TABLE "clientes"(
    "cli_id" INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "cli_nombre" VARCHAR(255) NOT NULL,
    "cli_apellido" VARCHAR(255) NOT NULL,
    "cli_telefono" BIGINT NOT NULL,
    "cli_direccion" VARCHAR(255) NOT NULL
);

CREATE TABLE "pago_pedido"(
    "pago_ped_id" INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "pago_ped_monto" INT NOT NULL,
    "pago_id" TINYINT NOT NULL,
    "pedido_id" BIGINT NOT NULL
);

CREATE TABLE "medios_de_pago"(
    "pago_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "pago_descripcion" VARCHAR(255) NOT NULL
);

CREATE TABLE "productos"(
    "prod_id" INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "prod_titulo" VARCHAR(255) NOT NULL,
    "prod_descripcion" VARCHAR(255) NOT NULL,
    "prod_fecha_publicacion" DATE NOT NULL,
    "cat_id" TINYINT NOT NULL,
    "prod_precio_alq" FLOAT NOT NULL,
    "prod_precio_ven" FLOAT NOT NULL,
    "prod_stock" INT NOT NULL,
    "tipo_prod_id" TINYINT NOT NULL
);

CREATE TABLE "pedido"(
    "pedido_id" BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "pedido_fecha" DATE NOT NULL,
    "cli_id" INT NOT NULL,
    "empl_id" TINYINT NOT NULL,
    "desc_id" TINYINT NULL,
    "estado" TINYINT NOT NULL
);

CREATE TABLE "tipo_producto"(
    "tipo_prod_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "tipo_prod_titulo" VARCHAR(255) NOT NULL,
    "form_id" TINYINT NOT NULL,
    "oper_id" TINYINT NOT NULL
);
CREATE TABLE "operacion"(
    "oper_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "oper_descripcion" VARCHAR(255) NOT NULL
);

CREATE TABLE "socios"(
    "socio_id" INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "cli_id" INT NOT NULL,
    "fecha_alta" DATE NOT NULL,
    "estado" BIT NOT NULL,
    "fecha_nacimiento" DATE NOT NULL
);

CREATE TABLE "formato"(
    "form_id" TINYINT NOT NULL PRIMARY KEY IDENTITY(1,1),
    "form_descripcion" VARCHAR(255) NOT NULL,
    "form_porcentaje" FLOAT NOT NULL
);

ALTER TABLE
    "pago_pedido" ADD CONSTRAINT "pago_pedido_pago_id_foreign" FOREIGN KEY("pago_id") REFERENCES "medios_de_pago"("pago_id");
ALTER TABLE
    "pago_pedido" ADD CONSTRAINT "pago_pedido_pedido_id_foreign" FOREIGN KEY("pedido_id") REFERENCES "pedido"("pedido_id");
ALTER TABLE
    "socios" ADD CONSTRAINT "socios_cli_id_foreign" FOREIGN KEY("cli_id") REFERENCES "clientes"("cli_id");
ALTER TABLE
    "pedido" ADD CONSTRAINT "pedido_desc_id_foreign" FOREIGN KEY("desc_id") REFERENCES "descuento"("desc_id");
ALTER TABLE
    "productos" ADD CONSTRAINT "productos_cat_id_foreign" FOREIGN KEY("cat_id") REFERENCES "categorias"("cat_id");
ALTER TABLE
    "productos" ADD CONSTRAINT "productos_tipo_prod_id_foreign" FOREIGN KEY("tipo_prod_id") REFERENCES "tipo_producto"("tipo_prod_id");
ALTER TABLE
    "pedido" ADD CONSTRAINT "pedido_cli_id_foreign" FOREIGN KEY("cli_id") REFERENCES "clientes"("cli_id");
ALTER TABLE
    "operacion_pedido" ADD CONSTRAINT "operacion_pedido_pedido_id_foreign" FOREIGN KEY("pedido_id") REFERENCES "pedido"("pedido_id");
ALTER TABLE
    "penalizacion" ADD CONSTRAINT "penalizacion_cli_id_foreign" FOREIGN KEY("cli_id") REFERENCES "clientes"("cli_id");
ALTER TABLE
    "empleados" ADD CONSTRAINT "empleados_sucu_id_foreign" FOREIGN KEY("sucu_id") REFERENCES "sucursales"("sucu_id");
ALTER TABLE
    "penalizacion" ADD CONSTRAINT "penalizacion_ped_id_foreign" FOREIGN KEY("pedido_id") REFERENCES "pedido"("pedido_id");
ALTER TABLE
    "operacion_pedido" ADD CONSTRAINT "operacion_pedido_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "productos"("prod_id");
ALTER TABLE
    "pedido" ADD CONSTRAINT "pedido_empl_id_foreign" FOREIGN KEY("empl_id") REFERENCES "empleados"("empl_id");
ALTER TABLE
    "tipo_producto" ADD CONSTRAINT "tipo_producto_form_id_foreign" FOREIGN KEY("form_id") REFERENCES "formato"("form_id");
ALTER TABLE
    "operacion_pedido" ADD CONSTRAINT "operacion_pedido_oper_id_foreign" FOREIGN KEY("oper_id") REFERENCES "operacion"("oper_id");
ALTER TABLE
    "tipo_producto" ADD CONSTRAINT "tipo_producto_oper_id_foreign" FOREIGN KEY("oper_id") REFERENCES "operacion"("oper_id");
INSERT INTO "sucursales" ("sucu_pais", "sucu_estado", "sucu_ciudad", "direccion")
VALUES
(1, 101, 1001, 'Calle Principal 123'),
(2, 102, 1002, 'Avenida Secundaria 456'),
(3, 103, 1003, 'Plaza Central 789');


INSERT INTO "clientes" ("cli_nombre", "cli_apellido", "cli_telefono", "cli_direccion")
VALUES
('Juan', 'Perez', 123456789, 'Calle Alegre 456'),
('Maria', 'Gomez', 987654321, 'Avenida Feliz 789'),
('Carlos', 'Rodriguez', 555555555, 'Paseo del Sol 101');


INSERT INTO "formato" ("form_descripcion", "form_porcentaje")
VALUES
('DVD', 5.0),
('Blu-ray', 10.0),
('CD', 2.0);


INSERT INTO "descuento" ("desc_porcentaje", "desc_concepto")
VALUES
(5.0, 'Descuento de temporada'),
(10.0, 'Descuento especial para socios'),
(2.0, 'Descuento por compra frecuente');


INSERT INTO "categorias" ("cat_titulo", "cat_descripcion")
VALUES
('Acción', 'Películas llenas de emoción y aventura'),
('Drama', 'Historias cautivadoras y emocionales'),
('Música', 'Diversidad de géneros musicales para todos los gustos');


INSERT INTO "tipo_producto" ("tipo_prod_titulo", "form_id", "oper_id")
VALUES
('Película', 1, 1),
('Música', 3, 2),
('Serie', 2, 1);


INSERT INTO "operacion" ("oper_descripcion")
VALUES
('Alquiler'),
('Compra');


INSERT INTO "medios_de_pago" ("pago_descripcion")
VALUES
('Tarjeta de crédito'),
('Efectivo'),
('Transferencia bancaria');


INSERT INTO "productos" ("prod_titulo", "prod_descripcion", "prod_fecha_publicacion", "cat_id", "prod_precio_alq", "prod_precio_ven", "prod_stock", "tipo_prod_id")
VALUES
('Misión Imposible', 'Una emocionante película de acción', '2023-01-15', 1, 5.0, 15.0, 50, 1),
('La La Land', 'Romance y música en una película encantadora', '2022-05-20', 2, 4.0, 12.0, 30, 1),
('Greatest Hits', 'Álbum recopilatorio de éxitos musicales', '2021-12-01', 3, 2.0, 8.0, 20, 2);


INSERT INTO "empleados" ("sucu_id", "empl_nombre", "empl_apellido", "empl_dni", "empl_turno")
VALUES
(1, 'Ana', 'Martínez', 123456789, 1),
(2, 'Pedro', 'González', 987654321, 2),
(3, 'Laura', 'López', 555555555, 1);


INSERT INTO "socios" ("cli_id", "fecha_alta", "estado", "fecha_nacimiento")
VALUES
(1, '2022-01-10', 1, '1980-03-15'),
(2, '2023-05-22', 1, '1995-09-28'),
(3, '2021-11-05', 1, '1988-07-12');


INSERT INTO "pedido" ("pedido_fecha", "cli_id", "empl_id", "desc_id", "estado")
VALUES
('2023-02-01', 1, 1, 1, 1),
('2022-06-15', 2, 2, 2, 1),
('2021-12-10', 3, 3, 3, 1);


INSERT INTO "operacion_pedido" ("prod_id", "oper_id", "pedido_id", "prod_cantidad")
VALUES
(1, 1, 1, 2),
(2, 2, 1, 1),
(3, 1, 2, 3),
(1, 2, 3, 1);


INSERT INTO "pago_pedido" ("pago_ped_monto", "pago_id", "pedido_id")
VALUES
(25, 1, 1),
(30, 2, 2),
(15, 3, 3);