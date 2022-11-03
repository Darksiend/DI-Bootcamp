//Daily Challenge

class Video {
  title;
  uploader;
  time;
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all  ${this.time} of ${this.title}!`);
  }
}

let first = new Video("Javascript in 2 hours", "Anton", 45);
let second = new Video("Python in 5 hours", "Bob", "50");
first.watch();
second.watch();
