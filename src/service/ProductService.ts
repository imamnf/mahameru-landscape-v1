export const ProductService = {
  getData() {
    return [
      {
        id: 1,
        photo: 'fiesta-bouquet.jpg',
        name: 'Fiesta Bouquet',
        slug: 'fiesta-bouquet',
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
        slug: 'stargazing-bouquet',
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
        slug: 'kindhearted-bouquet',
        price: 500000,
        desc: 'Buket Kindhearted adalah pusaran lembut bunga-bunga berwarna pink pucat dan gading, cara sempurna untuk berbagi perasaan manis dengan orang-orang yang Anda sayangi.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 35 cm tinggi x 35 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.',
          'Perhatian Keamanan untuk Hewan Peliharaan: Buket atau tanaman ini mungkin mengandung bunga dan dedaunan yang diketahui beracun bagi hewan peliharaan. Untuk menjaga keamanan mereka, pastikan untuk menyimpan rangkaian bunga ini di luar jangkauan hewan peliharaan Anda.'
        ],
        bloom: ['Mawar', 'Alstroemeria', 'Lili']
      },
      {
        id: 4,
        photo: 'summer-soiree-bouquet.jpg',
        name: 'Summer Soiree Bouquet',
        slug: 'summer-soiree-bouquet',
        price: 700000,
        desc: 'Terlepas dari musimnya, Buket Summer Soiree membawa hanya getaran positif dan kenangan sehangat malam musim panas favorit Anda.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 25 cm tinggi x 30 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.'
        ],
        bloom: ['Mawar', 'Alstroemeria', 'Gerbera', 'Lili', 'Aster', 'Anyelir']
      },
      {
        id: 5,
        photo: 'in-full-swing-bouquet.jpg',
        name: 'In Full Swing Bouquet',
        slug: 'in-full-swing-bouquet',
        price: 300000,
        desc: 'Kombinasi warna dan tekstur yang ceria, buket ini akan mengisi rumah mereka dengan semangat dan kegembiraan.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 35 cm tinggi x 33 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.',
          'Perhatian Keamanan untuk Hewan Peliharaan: Buket atau tanaman ini mungkin mengandung bunga dan dedaunan yang diketahui beracun bagi hewan peliharaan. Untuk menjaga keamanan mereka, pastikan untuk menyimpan rangkaian bunga ini di luar jangkauan hewan peliharaan Anda.'
        ],
        bloom: ['Mawar', 'Anyelir', 'Alstroemeria', 'Bunga Matahari', 'Lili']
      },
      {
        id: 6,
        photo: 'sweet-n-pretty-bouquet.jpg',
        name: 'Sweet & Pretty Bouquet',
        slug: 'sweet-n-pretty-bouquet',
        price: 900000,
        desc: 'Keindahan sejati dari buket ini terletak pada warna-warna manis dari bunganya. Susunan mawar merah muda cerah, alstroemeria merah muda pucat, dan lainnya ditempatkan dalam vas silinder kaca, menjadikannya hadiah luar biasa untuk mencerahkan wajah penerimanya.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 38 cm tinggi x 38 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.'
        ],
        bloom: ['Mawar', 'Anyelir']
      },
      {
        id: 7,
        photo: 'one-and-only-bouquet.jpg',
        name: 'One and Only Bouquet',
        slug: 'one-and-only-bouquet',
        price: 750000,
        desc: 'Perpaduan mawar, daisy, dan lily yang dipilih dengan cermat menghasilkan hadiah yang benar-benar unik dan istimewa.',
        detail: [
          'Buket Deluxe memiliki ukuran sekitar 48 cm tinggi x 35 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.',
          'Perhatian Keamanan untuk Hewan Peliharaan: Buket atau tanaman ini mungkin mengandung bunga dan dedaunan yang diketahui beracun bagi hewan peliharaan. Untuk menjaga keamanan mereka, pastikan untuk menyimpan rangkaian bunga ini di luar jangkauan hewan peliharaan Anda.'
        ],
        bloom: ['Mawar', 'Lili', 'Daisy', 'Anyelir']
      },
      {
        id: 8,
        photo: 'basking-in-the-glow-bouquet.jpg',
        name: 'Basking in the Glow Bouquet',
        slug: 'basking-in-the-glow-bouquet',
        price: 500000,
        desc: 'Rasakan kehangatan dengan rangkaian bunga yang cerah ini, penuh dengan bunga matahari, lili, dan mawar yang ceria. Buket yang penuh karisma ini akan membuat penerima Anda bersinar dari dalam.',
        detail: [
          'Buket Premium memiliki ukuran sekitar 40 cm tinggi x 38 cm lebar.',
          'Didesain oleh ahli bunga, siap untuk dipajang.',
          'Untuk bunga yang tahan lama, ganti air setiap hari. Kami sarankan untuk memangkas batang setiap beberapa hari.',
          'Perhatian Keamanan untuk Hewan Peliharaan: Buket atau tanaman ini mungkin mengandung bunga dan dedaunan yang diketahui beracun bagi hewan peliharaan. Untuk menjaga keamanan mereka, pastikan untuk menyimpan rangkaian bunga ini di luar jangkauan hewan peliharaan Anda.'
        ],
        bloom: ['Alstroemeria', 'Bunga Matahari', 'Mawar', 'Aster', 'Lili']
      }
    ];
  },
  getProduct() {
    return Promise.resolve(this.getData());
  }
};
