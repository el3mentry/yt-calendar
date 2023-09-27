export default class Data {
  thumbnailSource = "";
  videoTitle = "";
  videoLink = "";
  key = "";

  constructor(imageSrc, videoTitle, videoId) {
    this.thumbnailSource = imageSrc;
    this.videoTitle = videoTitle;
    this.videoLink = "https://www.youtube.com/watch?v=" + videoId;
    this.key = Math.floor(Math.random() * 6969696969696);
  }
}
