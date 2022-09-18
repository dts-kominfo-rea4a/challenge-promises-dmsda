const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const bioskopIXX = await promiseTheaterIXX()
  const bioskopVGC = await promiseTheaterVGC()
  const jumlahCinema = [...bioskopIXX, ...bioskopVGC]

  return new Promise ((resolve, reject) => {
     if (jumlahCinema.length) {
        var jumlahEmosi = 0;

        for (cinema of jumlahCinema) {
           if (cinema.hasil === emosi) {
              jumlahEmosi += 1;
           }
        }

        resolve(jumlahEmosi);
     } else {
        reject('Maaf tidak ada yang ditampilkan');
     }
  })
};

module.exports = {
  promiseOutput,
};