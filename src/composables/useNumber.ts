/**
 * Mengubah angka menjadi string dengan format yang sesuai dengan locale Indonesia.
 * @param {number} num Angka yang ingin diubah.
 * @returns {string} String hasil konversi.
 */
export const formatNumber = (num: number): string => num.toLocaleString('id-ID');
