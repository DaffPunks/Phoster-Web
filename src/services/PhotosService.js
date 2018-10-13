import MainService from "./MainService";

export default class PhotosService {

  static getPhotos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            url: 'https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg',
            lat: 1,
            long: 1
          },
          {
            url: 'https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg',
            lat: 1,
            long: 1
          },
          {
            url: 'https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg',
            lat: 1,
            long: 1
          },
          {
            url: 'https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg',
            lat: 1,
            long: 1
          },
          {
            url: 'https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg',
            lat: 1,
            long: 1
          },
        ]);
      }, 2000);
    });
  }

}
