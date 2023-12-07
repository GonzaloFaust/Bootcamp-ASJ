const products=[
      {
        "id": 1,
        "name": "Producto 1",
        "price": 19.99,
        "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg",
        "description": "Descripción del Producto 1",
        "category": "Electrónicos",
        "stock": 50
      },
      {
        "id": 2,
        "name": "Producto 2",
        "price": 29.99,
        "image": "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
        "description": "Descripción del Producto 2",
        "category": "Ropa",
        "stock": 30
      },
      {
        "id": 3,
        "name": "Producto 3",
        "price": 9.99,
        "image": "https://images.squarespace-cdn.com/content/v1/5bf4bf814611a019a7c475f0/1562038085083-DLUD125WWPOUTGYD8Q60/ke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ/product%2Bphotography",
        "description": "Descripción del Producto 3",
        "category": "Hogar",
        "stock": 100
      },
      {
        "id": 4,
        "name": "Producto 4",
        "price": 49.99,
        "image": "https://www.seoclerk.com/pics/407226-2eWiCl1471372939.jpg",
        "description": "Descripción del Producto 4",
        "category": "Electrónicos",
        "stock": 20
      },
      {
        "id": 5,
        "name": "Producto 5",
        "price": 39.99,
        "image": "https://s3.us-east-1.wasabisys.com/grid50/2017/12/Vz7Cmma2-props-product-photography-example-001.jpg",
        "description": "Descripción del Producto 5",
        "category": "Ropa",
        "stock": 15
      },
      {
        "id": 6,
        "name": "Producto 6",
        "price": 14.99,
        "image": "https://www.datocms-assets.com/101859/1697487314-gx-stainless-steel-bottles_black_product-tile_2680x3344.png",
        "description": "Descripción del Producto 6",
        "category": "Hogar",
        "stock": 80
      },
      {
        "id": 7,
        "name": "Producto 7",
        "price": 69.99,
        "image": "https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-3.jpg",
        "description": "Descripción del Producto 7",
        "category": "Electrónicos",
        "stock": 25
      },
      {
        "id": 8,
        "name": "Producto 8",
        "price": 24.99,
        "image": "https://cdn.baymard.com/blog/ux-product-image-categories-1-compatibility.jpg",
        "description": "Descripción del Producto 8",
        "category": "Ropa",
        "stock": 40
      },
      {
        "id": 9,
        "name": "Producto 9",
        "price": 19.99,
        "image": "https://cdn.create.vista.com/api/media/small/606071034/stock-photo-blue-green-metallic-electronic-vape-scene-illustration-isolated-white-background",
        "description": "Descripción del Producto 9",
        "category": "Hogar",
        "stock": 60
      },
      {
        "id": 10,
        "name": "Producto 10",
        "price": 54.99,
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90",
        "description": "Descripción del Producto 10",
        "category": "Electrónicos",
        "stock": 18
      },
      {
        "id": 11,
        "name": "Producto 11",
        "price": 34.99,
        "image": "https://c8.alamy.com/comp/H769T5/big-black-headphone-isolated-on-the-white-background-H769T5.jpg",
        "description": "Descripción del Producto 11",
        "category": "Ropa",
        "stock": 22
      },
      {
        "id": 12,
        "name": "Producto 12",
        "price": 9.99,
        "image": "https://static-data2.manualslib.com/product-images/140/13912/1391104/raw.jpg",
        "description": "Descripción del Producto 12",
        "category": "Hogar",
        "stock": 75
      },
      {
        "id": 13,
        "name": "Producto 13",
        "price": 44.99,
        "image": "https://www.datocms-assets.com/101859/1696890698-00052000055771_nfl_new2023_bottles_cincinnatibengals_producttile_2680x3344.png",
        "description": "Descripción del Producto 13",
        "category": "Electrónicos",
        "stock": 30
      },
      {
        "id": 14,
        "name": "Producto 14",
        "price": 29.99,
        "image": "https://cdn.britannica.com/33/166933-050-1475B953/Stick-butter.jpg",
        "description": "Descripción del Producto 14",
        "category": "Electrónicos",
        "stock": 35
      },
      {
        "id": 15,
        "name": "Producto 15",
        "price": 19.99,
        "image": "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/overtime-group-plp.png",
        "description": "Descripción del Producto 15",
        "category": "Ropa",
        "stock": 45
      },
      {
        "id": 16,
        "name": "Producto 16",
        "price": 39.99,
        "image": "https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg",
        "description": "Descripción del Producto 16",
        "category": "Hogar",
        "stock": 28
      },
      {
        "id": 17,
        "name": "Producto 17",
        "price": 49.99,
        "image": "https://jureursicphotography.com/wp-content/uploads/2020/02/2020_01_28_Studio-Product-Photgoraphy3211.jpg",
        "description": "Descripción del Producto 17",
        "category": "Electrónicos",
        "stock": 15
      },
      {
        "id": 18,
        "name": "Producto 18",
        "price": 14.99,
        "image": "https://static.independent.co.uk/2023/08/18/17/Fitbits.png",
        "description": "Descripción del Producto 18",
        "category": "Ropa",
        "stock": 50
      },
      {
        "id": 19,
        "name": "Producto 19",
        "price": 24.99,
        "image": "https://img.freepik.com/premium-psd/bottle-product-mockup-psd-beauty-packaging_53876-130082.jpg",
        "description": "Descripción del Producto 19",
        "category": "Hogar",
        "stock": 20
      },
      {
        "id": 20,
        "name": "Producto 20",
        "price": 59.99,
        "image": "https://cdn.elgrupoinformatico.com/Noticias/2018/10/productos-raros-comprar-amazon-489x471.png",
        "description": "Descripción del Producto 20",
        "category": "Electrónicos",
        "stock": 10
      },
      {
        "id": 21,
        "name": "Producto 21",
        "price": 34.99,
        "image": "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg",
        "description": "Descripción del Producto 21",
        "category": "Ropa",
        "stock": 32
      },
      {
        "id": 22,
        "name": "Producto 22",
        "price": 9.99,
        "image": "https://media.thebodyshop.in/media/catalog/product/1/0/1097528_shower_gel_strawberry_250ml_brnz_nw_inabcps067_-_copy.jpg",
        "description": "Descripción del Producto 22",
        "category": "Hogar",
        "stock": 42
      },
      {
        "id": 23,
        "name": "Producto 23",
        "price": 44.99,
        "image": "https://media.thebodyshop.com/i/thebodyshop/AVOCADO_SHOWER_CREAM_250ml_1_INAAUPS073",
        "description": "Descripción del Producto 23",
        "category": "Electrónicos",
        "stock": 25
      }
    ];
export {products}
  