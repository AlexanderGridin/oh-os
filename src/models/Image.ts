export class Image {
  public url: string;
  public id: string;

  constructor(url: string) {
    this.url = url;
    this.id = new Date().getTime().toString();
  }
}
