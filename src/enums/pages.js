class Page {
  static Home = new Page('Home');
  static Projects = new Page('Projects');
  static Research = new Page('Research');
  static Resume = new Page('Resume');

  constructor(name) {
    this.name = name;
  }
}

export default Page;
