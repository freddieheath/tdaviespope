import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="body-font bg-offwhite text-gray-400">
      <div className="container mx-auto py-4 text-center sm:px-4 sm:py-10">
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <div
              key={project.image}
              className="w-full px-4 py-2 sm:py-4 lg:w-3/6"
            >
              <Link to={`/project/${project.id}`}>
                <div className="relative h-96 sm:flex">
                  <img
                    alt="Project"
                    className="absolute w-full rounded-lg object-cover object-center sm:h-96 md:inset-0"
                    src={project.image}
                  />

                  <div className="sm:bg-offwhite absolute flex w-full flex-col justify-center rounded-t-lg bg-slate-700 opacity-100 transition-all sm:relative sm:h-96 sm:rounded-lg sm:border-4 sm:border-gray-500 sm:px-0 sm:opacity-0 xl:hover:opacity-90">
                    <motion.div
                      className="flex h-full w-full items-center rounded-t-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex flex-col justify-center rounded-t-lg px-8">
                        <h1 className="title-font hidden py-3 text-lg font-medium text-slate-200 sm:block sm:pt-0 sm:font-bold sm:text-slate-200">
                          {project.title}
                        </h1>
                        <p className="hidden py-5 font-medium leading-relaxed text-slate-200 sm:block">
                          {project.description}
                        </p>
                        <p className="hidden pb-5 text-sm font-medium text-slate-200 sm:block">
                          {project.tags}
                        </p>
                        <p className="hidden text-xs font-medium text-slate-200 sm:block">
                          {project.date}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
