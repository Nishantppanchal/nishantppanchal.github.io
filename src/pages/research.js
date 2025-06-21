import * as React from "react";
import PageTemplate from "../components/pageTemplate";
import Page from "../enums/pages";
import Project from "../components/project";

const research = [
  {
    projectName: "CryptOpt ARM",
    date: "March 2024",
    tags: ["Cryptography", "Optimization", "ARM64", "Assembly"],
    shortDes: "Optimizing cryptographic algorithms for ARM64 architecture",
    longDes: (
      <p>
        CryptOpt is an optimiser that is able to generate x86 64 Assembly for
        field arithmetic while ensuring the formally verified using Fiat
        Cryptography. This project involves extending CryptOpt to support ARM64
        architecture, allowing for the generation of optimised ARM64 Assembly
        code for cryptographic algorithms. I worked on porting the existing
        x86_64 optimiser to ARM64.
      </p>
    ),
    links: [
      {
        name: "CryptOpt GitHub",
        href: "https://github.com/0xADE1A1DE/CryptOpt",
      },
      {
        name: "CryptOpt Paper",
        href: "https://arxiv.org/abs/2211.10665",
      }
    ],
  },
  {
    projectName: "Segmentation of Perivascular Spaces in Brain MRI",
    date: "Feb 2023",
    tags: [
      "Artificial Intelligence",
      "Deep Learning",
      "Machine Learning",
      "Radiology",
      "Segmentation",
      "PyTorch",
    ],
    shortDes: "Deep learning algorithm to segment perivascular spaces",
    longDes: (
      <p>
        Developing a deep learning algorithm with PyTorch to segment
        perivascular spaces in patients based on brain MRI scans. This project
        is in collaboration with the iBrain research lab at monash university
        and aims to improve the understanding of perivascular spaces in the
        brain.
      </p>
    ),
    links: [],
  },
  {
    projectName: "Screening of Osteoporosis in Brain CT Scans",
    date: "August 2022",
    tags: [
      "Artificial Intelligence",
      "Deep Learning",
      "Machine Learning",
      "Radiology",
      "Classification",
      "PyTorch",
    ],
    shortDes: "Deep learning algorithm to screen for Osteoporosis",
    longDes: (
      <p>
        Developing a deep learning algorithm with PyTorch to screen for
        Osteoporosis in patients based on head CT scans. For this research
        project, I'm working on a team that is collaborating with Austin
        Hospital to conduct the research.
      </p>
    ),
    links: [],
  },
];

function Research() {
  return (
    <PageTemplate page={Page.Research}>
      {research.map(({ projectName, date, tags, shortDes, longDes, links }) => (
        <Project
          projectName={projectName}
          date={date}
          tags={tags}
          shortDes={shortDes}
          longDes={longDes}
          links={links}
        />
      ))}
    </PageTemplate>
  );
}

export default Research;
