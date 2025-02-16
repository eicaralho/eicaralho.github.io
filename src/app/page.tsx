"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, TerminalIcon, Twitter, Youtube, ExternalLink, Music } from "lucide-react";
import { Code, Database, Cpu, LayoutTemplate, Palette, Server, Cloud, TerminalSquare, GitBranch, TestTube2, Package, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  interface LanyardData {
    listening_to_spotify: boolean,
    user: {
      id: string;
      username: string;
      globalName: string;
      avatar: string;
      status: string;
      activeOn: {
        web: boolean;
        desktop: boolean;
        mobile: boolean;
      };
    };
    activities: {
      name: string;
      type: number;
      details: string;
      state: string;
      timestamps: {
        start: number;
        end?: number;
      };
      assets: {
        largeImage: string;
        largeText: string;
        smallImage?: string;
        smallText?: string;
      };
    }[];
    spotify?: {
      song: string;
      artist: string;
      album: string;
      albumArt: string;
      timestamps: {
        start: number;
        end: number;
      };
    };
  }

  const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/lanyard');
        const data = await response.json();
        setLanyardData(data);
      } catch (error) {
        console.error('Error fetching Lanyard data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const frontendSkills = [
    { name: "Next.js", icon: <LayoutTemplate className="w-6 h-6" /> },
    { name: "React", icon: <LayoutTemplate className="w-6 h-6" /> },
    { name: "HTML5", icon: <LayoutTemplate className="w-6 h-6" /> },
    { name: "CSS3", icon: <Palette className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Express.js", icon: <Server className="w-6 h-6" /> },
    { name: "Discord.js", icon: <MessageCircle className="w-6 h-6" /> },
    { name: "Jest", icon: <TestTube2 className="w-6 h-6" /> },
    { name: "Nginx", icon: <TerminalSquare className="w-6 h-6" /> },
    { name: "Docker", icon: <Package className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
    { name: "SQLite", icon: <Database className="w-6 h-6" /> },
    { name: "Prisma ORM", icon: <Database className="w-6 h-6" /> },
    { name: "Supabase", icon: <Database className="w-6 h-6" /> },
    { name: "NeonDB", icon: <Database className="w-6 h-6" /> },
    { name: "Redis", icon: <Database className="w-6 h-6" /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
    { name: "Postman", icon: <Cloud className="w-6 h-6" /> },
    { name: "Insomnia", icon: <Cloud className="w-6 h-6" /> },
    { name: "Cloudflare", icon: <Cloud className="w-6 h-6" /> },
    { name: "Windows 11", icon: <Cpu className="w-6 h-6" /> },
    { name: "Visual Studio Code", icon: <TerminalIcon className="w-6 h-6" /> },
  ];

  const projects = [
    {
      name: "Portfólio Pessoal",
      description: "Meu portfólio pessoal desenvolvido com Next.js e Tailwind CSS.",
      image: "https://cdn.discordapp.com/attachments/1308109367924625459/1340469114753519636/image.png?ex=67b278a5&is=67b12725&hm=bf3bd1e55f2ed63d3477009aa35e36be547fe9625714963e5f2192c31ec0e7f7&",
      repo: "https://github.com/seu-usuario/portfolio",
      deploy: "https://seusite.com",
    },
    {
      name: "E-commerce API",
      description: "API de e-commerce desenvolvida com Node.js, Express e MongoDB.",
      image: "https://cdn.discordapp.com/attachments/1308109367924625459/1340469114753519636/image.png?ex=67b278a5&is=67b12725&hm=bf3bd1e55f2ed63d3477009aa35e36be547fe9625714963e5f2192c31ec0e7f7&",
      repo: "https://github.com/seu-usuario/ecommerce-api",
      deploy: null,
    },
    {
      name: "Chatbot com Discord.js",
      description: "Um chatbot para Discord desenvolvido com Discord.js e TypeScript.",
      image: "https://cdn.discordapp.com/attachments/1308109367924625459/1340469114753519636/image.png?ex=67b278a5&is=67b12725&hm=bf3bd1e55f2ed63d3477009aa35e36be547fe9625714963e5f2192c31ec0e7f7&",
      repo: "https://github.com/seu-usuario/discord-bot",
      deploy: null,
    },
    {
      name: "Blog Pessoal",
      description: "Um blog pessoal desenvolvido com Next.js e Markdown.",
      image: "https://cdn.discordapp.com/attachments/1308109367924625459/1340469114753519636/image.png?ex=67b278a5&is=67b12725&hm=bf3bd1e55f2ed63d3477009aa35e36be547fe9625714963e5f2192c31ec0e7f7&",
      repo: "https://github.com/seu-usuario/blog",
      deploy: "https://blog.seusite.com",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <div className="fixed inset-y-0 right-0 w-1/2 h-full z-0 ">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "h-full w-full skew-y-12"
          )}
        />
      </div>

      <section className="min-h-screen flex items-center pt-20 relative z-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-1 bg-accent" />
            <h1 className="text-5xl md:text-6xl font-bold">
              I'm {lanyardData?.user.globalName},<br />a Fullstack Developer
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
            </p>
            <div className="pt-4">
              <div className="flex gap-6">
                <a href="#" className="social-link" aria-label="Github">
                  <Github size={24} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>

            <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            >
            <img
              src={lanyardData?.user.avatar}
              alt="Developer portrait"
              className={`w-full max-w-lg mx-auto rounded-full border-4 ${
              lanyardData?.user.status === "online"
                ? "border-green-600"
                : lanyardData?.user.status === "idle"
                ? "border-yellow-600"
                : lanyardData?.user.status === "dnd"
                ? "border-red-600"
                : "border-gray-600"
              }`}
            />
            </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">No que estou trabalhando?</h2>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <img className="w-[100px] rounded-lg" src={lanyardData?.activities[0]?.assets.largeImage.replace(/^mp:external\/[^/]+\//, '').replace("https/raw", "https://raw")} alt={lanyardData?.spotify?.song} />
              </div>
              <div>
                <p className="text-lg font-medium">{lanyardData?.activities[0]?.name}</p>
                <p className="text-gray-400">{lanyardData?.activities[0]?.details}</p>
                <p className="text-gray-400">{lanyardData?.activities[0]?.state}</p>
                <p className="text-gray-400">
                  {lanyardData?.spotify
                    ? `${formatTime(Date.now() - lanyardData.activities[0].timestamps.start)}`
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">O que estou ouvindo?</h2>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-700/50 rounded-lg">
                <img className="w-[100px] rounded-lg" src={lanyardData?.spotify?.albumArt} alt={lanyardData?.spotify?.song} />
              </div>
              <div>
                <p className="text-lg font-medium">
                  {lanyardData?.listening_to_spotify ? lanyardData.spotify?.song : "Nada no momento"}
                </p>
                <p className="text-gray-400">
                  {lanyardData?.listening_to_spotify ? lanyardData.spotify?.artist : ""}
                </p>
                <p className="text-gray-400">
                  {lanyardData?.spotify
                    ? `${formatTime(Date.now() - lanyardData.spotify.timestamps.start)} / ${formatTime(lanyardData.spotify.timestamps.end - lanyardData.spotify.timestamps.start)}`
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center">Front-End</h3>
            <div className="grid grid-cols-1 gap-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon}
                  <span className="text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center">Back-End</h3>
            <div className="grid grid-cols-1 gap-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon}
                  <span className="text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 z-[999]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center">Databases</h3>
            <div className="grid grid-cols-1 gap-4">
              {databaseSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon}
                  <span className="text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 z-[999]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center">Tools & Techs</h3>
            <div className="grid grid-cols-1 gap-4">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon}
                  <span className="text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="z-[999] bg-gray-800/50 rounded-lg  hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Repo</span>
                  </a>
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Deploy</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const formatTime = (durationInMs: number) => {
  const totalSeconds = Math.floor(durationInMs / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};