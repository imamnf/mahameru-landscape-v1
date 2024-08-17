export const ProductService = {
  getData() {
    return [
      {
        id: 1,
        photo: 'fiesta-bouquet.jpg',
        name: 'Fiesta Bouquet',
        price: 600000,
        desc: 'Buket Fiesta adalah campuran meriah yang cocok untuk merayakan momen apa pun. Dengan kombinasi bunga-bunga cerah, rangkaian bunga yang dirancang oleh ahli bunga ini menghadirkan semburat warna dan ledakan kegembiraan begitu tiba.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 35 cm tinggi x 35 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.'
        ],
        bloom: ['Mawar', 'Gerbera', 'Anyelir', 'Stok']
      },
      {
        id: 2,
        photo: 'stargazing-bouquet.jpg',
        name: 'Stargazing Bouquet',
        price: 400000,
        desc: 'Perpaduan warna putih, kuning, dan biru dalam buket ini menghadirkan keindahan dan ketenangan malam berbintang, menjadikannya hadiah sempurna untuk setiap kesempatan.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 38 cm tinggi x 35 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.',
          'Perhatian Keamanan untuk Hewan Peliharaan: Buket atau tanaman ini mungkin mengandung bunga dan dedaunan yang diketahui beracun bagi hewan peliharaan. Untuk menjaga keamanan mereka, pastikan untuk menyimpan rangkaian bunga ini di luar jangkauan hewan peliharaan Anda.'
        ],
        bloom: ['Delphinium', 'Mawar', 'Bunga Matahari', 'Solidago', 'Lili']
      },
      {
        id: 3,
        photo: 'kindhearted-bouquet.jpg',
        name: 'Kindhearted Bouquet',
        price: 500000,
        desc: 'Buket Kindhearted adalah pusaran lembut bunga-bunga berwarna pink pucat dan gading, cara sempurna untuk berbagi perasaan manis dengan orang-orang yang Anda sayangi.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 35 cm tinggi x 35 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.',
          'Perhatian Keamanan untuk Hewan Peliharaan: Buket atau tanaman ini mungkin mengandung bunga dan dedaunan yang diketahui beracun bagi hewan peliharaan. Untuk menjaga keamanan mereka, pastikan untuk menyimpan rangkaian bunga ini di luar jangkauan hewan peliharaan Anda.'
        ],
        bloom: ['Mawar', 'Alstroemeria', 'Lili']
      }
    ];
  },
  getProduct() {
    return Promise.resolve(this.getData());
  }
};
