// class Page {
//   static Home = new Page('Home');
//   static Projects = new Page('Projects');
//   static Research = new Page('Research');
//   static Resume = new Page('Resume');

//   constructor(name) {
//     this.name = name;
//   }
// }

const Page = Object.freeze({
  Home: 'Home',
  Projects: 'Projects',
  Research: 'Research',
  Resume: 'Resume',
});

export default Page;
