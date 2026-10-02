import Image from "next/image";
import type { TeamMember } from "@/types/common";
import { initials } from "@/lib/utils";

function Portrait({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo.src}
        alt={member.photo.alt}
        fill
        sizes="180px"
        className="object-cover object-top"
      />
    );
  }

  return (
    <div aria-hidden="true" className="grid size-full place-items-center bg-linear-to-br from-brand-100 to-violet-100">
      <span className="font-display text-5xl font-extrabold text-brand-600/90">{initials(member.name)}</span>
    </div>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="surface-card group flex h-full flex-row gap-4 p-3 transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-card sm:gap-6 sm:p-[1.1rem]">
      <div className="relative aspect-[180/205] w-[36%] max-w-[11.25rem] shrink-0 self-start overflow-hidden rounded-2xl bg-[#dfe6f8] sm:w-[10.5rem] xl:w-[38%]">
        <Portrait member={member} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col py-1 sm:py-2.5">
        <h3 className="text-[1.1rem] leading-tight font-bold tracking-[-0.02em] sm:text-[1.3rem]">{member.name}</h3>
        <p className="mt-1.5 text-[0.95rem] leading-snug font-medium text-body">{member.role}</p>
        <p className="mt-3 text-[0.9rem] leading-normal text-muted">{member.bio}</p>
        <ul aria-label={`${member.name} texnologiyalari`} className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {member.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[#e3e8f7] bg-[#f6f8fe] px-3 py-1.5 text-[0.8rem] font-medium text-brand-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
