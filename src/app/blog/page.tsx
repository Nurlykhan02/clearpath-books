import Link from "next/link";
import Reveal from "@/components/Reveal";
import Blob, { BLOB_PATHS } from "@/components/Blob";

const posts = [
  {
    slug: "nalogi-ip-2026",
    title: "Налоги для ИП в 2026: что изменилось",
    excerpt: "Разбираем ключевые изменения в налоговом законодательстве для ИП.",
    date: "15 марта 2026",
    readTime: "5 мин",
    tag: "Налоги",
    artClass: "a1",
  },
  {
    slug: "optimizatsiya-rashodov",
    title: "5 легальных способов оптимизировать расходы",
    excerpt: "Как уменьшить налоговую нагрузку, не нарушая закон.",
    date: "3 марта 2026",
    readTime: "7 мин",
    tag: "Финансы",
    artClass: "a2",
  },
  {
    slug: "buhgalteriya-dlya-startapa",
    title: "Бухгалтерия для стартапа: с чего начать",
    excerpt: "Пошаговое руководство для новых предпринимателей.",
    date: "20 февраля 2026",
    readTime: "6 мин",
    tag: "Стартап",
    artClass: "a3",
  },
  {
    slug: "perehod-na-tov",
    title: "Переход с ИП на ТОО: когда это имеет смысл",
    excerpt: "Сравниваем два формата бизнеса по налогам и удобству.",
    date: "8 февраля 2026",
    readTime: "8 мин",
    tag: "Бизнес",
    artClass: "a4",
  },
];

export default function BlogPage() {
  return (
    <div lang="ru">
      <section className="page-hero">
        <Blob
          variant="warm"
          path={BLOB_PATHS.clayAlt}
          style={{ top: -60, right: -100, width: 340, height: 340, opacity: 0.35 }}
        />
        <div className="wrap">
          <Reveal>
            <div className="page-hero__inner">
              <span className="eyebrow">Блог</span>
              <h1 className="heading h-l">Полезные статьи</h1>
              <p>
                Советы по налогам, учёту и финансам — простым языком, без
                бухгалтерского жаргона.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Articles">
        <div className="wrap">
          <h2 className="sr-only">Latest articles</h2>
          <div className="article-grid">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="article"
                  aria-label={`${post.title}. ${post.date}, ${post.readTime}`}
                >
                  <div className={`article__art ${post.artClass}`} aria-hidden="true">
                    <span className="tag">{post.tag}</span>
                  </div>
                  <div className="article__body">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="article__meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
