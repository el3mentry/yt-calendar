export default class Data {
  thumbnailSource = "";
  videoTitle = "";
  key = ""

  constructor(imageSrc, videoTitle) {
    this.thumbnailSource = imageSrc;
    this.videoTitle = videoTitle;
    this.key = Math.floor(Math.random() * 6969696969696);
  }
}
