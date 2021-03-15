export type LandingPageAlbumsProps = {
  artistName: string;
  albumName: string;
  url: string;
  imgUrl: string;
};

export const LandingPageAlbums: LandingPageAlbumsProps[] = [
  {
    artistName: "Eminem",
    albumName: "Relapse",
    url: "/player/album/Relapse?limit=23&artist=Eminem",
    imgUrl: "https://i.imgur.com/7orpIql.jpg",
  },
  {
    artistName: "Metallica",
    albumName: "...And Justice for All",
    url:
      "/player/album/...And%20Justice%20for%20All%20(Remastered)?limit=10&artist=Metallica",
    imgUrl:
      "https://www.besteveralbums.com/albumart/album_large_982_5bdfb78010bbe.jpg",
  },
  {
    artistName: "Green Day",
    albumName: "American Idiot (Deluxe Edition)",
    url:
      "/player/album/American%20Idiot%20(Deluxe%20Edition)?limit=13&artist=Green%20Day",
    imgUrl:
      "https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2021-01/GREEN%20DAY%20AMERICAN%20IDIOTSSSSS%20.jpg?itok=gc0jlXRR",
  },
  {
    artistName: "Dua Lipa",
    albumName: "Dua Lipa (Deluxe)",
    url: "/player/album/Dua%20Lipa%20(Deluxe)?limit=17&artist=Dua%20Lipa",
    imgUrl:
      "https://image.ceneostatic.pl/data/products/59157149/i-dua-lipa-dua-lipa-deluxe-cd.jpg",
  },
  {
    artistName: "AC/DC",
    albumName: "Back In Black",
    url: "/player/album/Back%20In%20Black?limit=11&artist=AC/DC",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Acdc_backinblack_cover.jpg",
  },
  {
    artistName: "Alan Walker",
    albumName: "Faded - EP",
    url: "/player/album/Faded%20-%20EP?limit=4&artist=Alan%20Walker",
    imgUrl:
      "https://amp-cdn.net/images/links/1787746032ac9f5b541b5b2712077874719afbf6ea1333",
  },
];
