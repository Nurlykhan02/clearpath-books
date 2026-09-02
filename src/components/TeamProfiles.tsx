import Image from "next/image";
import Reveal from "./Reveal";
import { TEAM_MEMBERS } from "@/lib/team";

export default function TeamProfiles() {
  return (
    <section className="section team" aria-labelledby="team-heading">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow">Our team</span>
            <h2 id="team-heading" className="heading h-m">
              Experience you can trust
            </h2>
            <p className="lede">
              International accounting backgrounds, now focused on U.S. small
              business bookkeeping and financial clarity.
            </p>
          </div>
        </Reveal>

        <div className="team__list">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.06}>
              <article className="team-card" aria-labelledby={`${member.id}-name`}>
                <div className="team-card__photo">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    width={640}
                    height={760}
                    sizes="(max-width: 720px) 100vw, 640px"
                  />
                </div>

                <div className="team-card__body">
                  <h3 id={`${member.id}-name`} className="team-card__name">
                    {member.name}
                    <span className="team-card__title"> — {member.title}</span>
                  </h3>

                  {member.intro && <p className="team-card__intro">{member.intro}</p>}

                  {member.experiences && (
                    <ul className="team-card__experiences">
                      {member.experiences.map((item) => (
                        <li key={`${member.id}-${item.company}`}>
                          <p className="team-card__company">
                            {item.company}
                            {item.location ? ` — ${item.location}` : ""}
                          </p>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {member.summary && <p className="team-card__summary">{member.summary}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
