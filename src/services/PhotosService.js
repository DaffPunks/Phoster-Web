import MainService from "./MainService";

export default class PhotosService {

  static getPhotos() {
    return MainService.sendGET('private/photos');

    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            url: 'https://i-h2.pinimg.com/564x/f8/07/e7/f807e7620632aa2401e07231f4a4546e.jpg',
            lat: 40.712776,
            long: -74.005974
          },
          {
            url: 'https://i-h2.pinimg.com/564x/c9/98/c1/c998c1b4b47593c2dae9058cd072dddc.jpg',
            lat: 41.902782,
            long: 12.496365
          },
          {
            url: 'https://i.pinimg.com/564x/fd/0a/cf/fd0acfb6c7dab2440475b964f74a85ab.jpg',
            lat: 41.079580,
            long: 141.256870
          },
          {
            url: 'https://i.pinimg.com/564x/9a/8c/f5/9a8cf5d9adedd451dafe58722fca6e53.jpg',
            lat: 38.802608,
            long: -116.419388
          },
          {
            url: 'https://lh3.googleusercontent.com/NvpirCWc-BJTGhBkCi5vlAQxDmWfvoAmGQxUZjGzB13IIwKPW5BlrnwVkiLt-yw_5XZZR6giufQ=w1519-h1139-no',
            lat: 55.354641,
            long: 86.087883
          },
        ]);
      }, 2000);
    });*/
  }

 /* static getPhotos() {
    MainService.sendGET('/private/photos')
      .then(data => console.log('JSON', data));
  }*/

}
