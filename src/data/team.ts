import type { TeamMember } from "@/types/common";

/** Portraits live in /public/team. Replace the files to update photos. */
export const team: TeamMember[] = [
  {
    slug: "shaxriddin",
    name: "Shaxriddin",
    role: "Frontendchi, Mobile & Web",
    bio: "Zamonaviy va qulay foydalanuvchi interfeyslarga ixtisoslashgan.",
    skills: ["React", "Next.js", "Flutter"],
    photo: { src: "/team/shaxriddin.webp", alt: "Shaxriddin — frontend va mobil dasturchi", width: 340, height: 386 },
  },
  {
    slug: "shaxzod-turaqulov",
    name: "Shaxzod Turaqulov",
    role: "Backend, .NET",
    bio: "Barqaror, xavfsiz va kuchli backend yechimlarni quradi.",
    skills: [".NET", "PostgreSQL", "Docker"],
    photo: { src: "/team/shaxzod-turaqulov.webp", alt: "Shaxzod Turaqulov — .NET backend dasturchi", width: 332, height: 384 },
  },
  {
    slug: "sardor-goyibnazarov",
    name: "Sardor G‘oyibnazarov",
    role: "Fullstack, System Automation & Architecture",
    bio: "Murakkab tizimlarni soddalashtirib, avtomatlashtirishga ixtisoslashgan.",
    skills: ["Node.js", "Python", "AWS"],
    photo: {
      src: "/team/sardor-goyibnazarov.webp",
      alt: "Sardor G‘oyibnazarov — fullstack dasturchi va tizim arxitektori",
      width: 320,
      height: 384,
    },
  },
];
