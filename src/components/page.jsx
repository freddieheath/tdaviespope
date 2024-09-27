"use client";

import { ThemeContext } from "./ThemeContext";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import { useContext } from "react";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  const { darkMode } = useContext(ThemeContext);

  if (!project) {
    return <div>This project could not be found</div>;
  }

  return (
    <section>
      <div
        className={`z-10 flex h-auto w-full flex-col gap-y-8 border-gray-800 px-5 py-20 text-xl xl:px-40 ${
          darkMode ? `bg-gray-800` : `bg-off-white`
        }`}
      >
        <div className="sm:pb-10">
          <h1
            className={`title-font pb-4 text-center text-5xl font-medium ${
              darkMode ? `text-white` : `text-slate-800`
            } `}
          >
            {project.title}
          </h1>
          <h1
            className={`py-4 text-center text-sm font-medium  ${
              darkMode ? `text-white` : `text-slate-700`
            }`}
          >
            {project.date}
          </h1>
          <h1
            className={`py-4 text-center text-sm font-medium ${
              darkMode ? `text-white` : `text-slate-700`
            }`}
          >
            {project.tags}
          </h1>
        </div>
        <div className="flex justify-center xl:pb-10">
          <p
            className={`font-poppins whitespace-pre-line leading-relaxed lg:px-60 ${
              darkMode ? `text-white` : `text-slate-600`
            }`}
          >
            {project.textcontent}
          </p>
        </div>
        <div className="grid-col-1 grid gap-y-2 lg:px-60 pb-10">
          {project.coverage &&
            project.coverage.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  className={`text-sm transition-all  ${
                    darkMode
                      ? `text-white hover:text-gray-400`
                      : `text-slate-700 hover:text-slate-900`
                  }`}
                >
                  {link}
                </p>
              </a>
            ))}
        </div>
        {project.video && (
          <div>
            {project.video && (
              <video controls width="100%">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 align-middle">
          {project.images.map((image, index) => (
            <div className="sm:h-5/6" key={index}>
              <img
                alt={`Project Image ${index + 1}`}
                src={image}
                className="w-full h-auto sm:h-128"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
