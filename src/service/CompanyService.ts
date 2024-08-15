export const CompanyService = {
  getData() {
    return {
      about: [
        '<span class="text-emerald-600 font-semibold">MAHAMERU LANDSCAPE</span> <span class="text-slate-500">sebagai perusahaan nasional yang bergerak di bidang agrochemicals, agricultural equipment supplies dan juga sebagai salah satu pelaku pembangunan pertanian, melihat potensi yang besar di bidang agribisnis, ingin turut serta memberikan kontribusi terhadap pertumbuhan perekonomian Indonesia utamanya di sektor pertanian dan perkebunan. Selain itu, bersama-sama dengan para petani, pengguna dan pemerintah, kami ingin turut serta membantu meningkatkan produktivitas pertanian di Indonesia.</span>',
        '<span class="text-slate-500">Profil perusahaan</span> <span class="text-emerald-600 font-semibold">MAHAMERU LANDSCAPE</span> <span class="text-slate-500">ini disusun dengan tujuan untuk memperkenalkan perusahaan kami kepada para pelanggan yang terdiri dari perkebunan, dealer, kios dan pengguna langsung untuk lebih mengenal kami dan produk-produk yang kami distribusikan saat ini.</span>',
        '<span class="text-slate-500">Harapan kami, bahwa dengan profil perusahaan ini masyarakat pertanian dan perkebunan dapat memperoleh informasi dan menambah wawasan yang pada akhirnya dapat memberikan kontribusi yang besar bagi pertumbuhan ekonomi Indonesia khususnya di sektor agricultural.</span>',
        '<span class="text-emerald-600 font-semibold">MAHAMERU LANDSCAPE</span> <span class="text-slate-500">telah berdiri sejak April 2000. Sekarang, perusahaan memiliki 14 cabang dan 106 Karyawan.</span>'
      ],
      vision: [
        'To be the most competitive and efficient distributor.',
        'To have some Professional and Reliable Human Resources by providing continuous training.',
        'To have Nationally Exclusive Products given by the trust of the Principals.',
        'To value Human Resources based on responsibility, dedication and loyalty.'
      ],
      mission: [
        'To be a leading Agrochemicals Company in Indonesia and is trusted by World Class Principals.'
      ]
    };
  },

  getCompany() {
    return Promise.resolve(this.getData());
  }
};
