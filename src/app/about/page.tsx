import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { category: "Backend", items: ["Node.js", "WebSockets", "gRPC", "RabbitMQ", "AWS Lambda"] },
  { category: "Data & Storage", items: ["MongoDB", "DynamoDB", "Redis", "Minio"] },
  { category: "Infrastructure", items: ["Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"] },
  { category: "AI & LLM", items: ["Ollama", "Claude", "Opencode", "LLM API", "Prompt Engineering"] }
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        About
      </h1>

      <section className="mt-12 space-y-6">
        <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">
          I&apos;m a backend engineer with 5 years of commercial experience, who builds real-time communication systems and
          developer tools. 
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Experience
        </h2>
        <div className="mt-8 space-y-8">
          <div className="border-l-2 border-amber-500 pl-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">
              Middle+ Software Engineer — Backend Developer
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              MyOffice (New Cloud Technologies LLC) &middot; 2022 &ndash; 2026
            </p>
            <p className="mt-2 text-sm font-medium text-stone-500 dark:text-stone-400">
              Stack: Node.js, Nest.js, MongoDB, RabbitMQ, WebRTC, Matrix, Docker
            </p>
            <div className="mt-4 space-y-3 text-stone-600 dark:text-stone-400">
              <p>
                Developed <strong className="text-stone-900 dark:text-stone-50">Squadus</strong>{" "}
                — a Rocket.Chat-derived corporate messenger and digital workspace for the
                Russian market, serving government and enterprise clients.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Built real-time messaging backend (1:1/group chats, channels, threads) on
                  Node.js/Meteor; optimized MongoDB aggregation pipelines and replica set
                  sharding for high-throughput message history at scale.
                </li>
                <li>
                  Developed WebRTC-based video conferencing (VKS) backend  — signaling server,
                  SFU/media relay integration, and AI transcription/summarization pipeline for
                  meeting recordings.
                </li>
                <li>
                  Architected Telegram integration via the Matrix protocol — first Russian
                  corporate messenger with bidirectional Telegram bridging, enabling secure
                  cross-platform communication while preserving DLP and encryption controls.
                </li>
                <li>
                  Designed ICAP-based DLP integration layer for InfoWatch Traffic Monitor and
                  SearchInform CIB, enabling real-time message/file content inspection and
                  policy enforcement.
                </li>
                <li>
                  Built scalable file/media service with chunked upload, thumbnail generation,
                  PDF preview, and progressive image loading optimized for low-bandwidth mobile
                  environments.
                </li>
                <li>
                  Improved application performance: reduced mobile cold start by 24% (Android)
                  / 9% (iOS), halved Squadus 1.9 launch time, and stabilized WebRTC under mass
                  concurrent load via connection pooling and MongoDB index optimization.
                </li>
                <li>
                  Maintained Rocket.Chat upstream fork — rebased 384+ upstream changes in v1.1,
                  ported security patches, and contributed back Matrix federation components.
                </li>
                <li>
                  Managed infrastructure: Docker Compose, CI/CD
                  pipelines, MongoDB replica set failover, Prometheus/Grafana monitoring.
                </li>
              </ul>
              <p>
                Proficient with AI/LLM tools — self-host local LLMs (ollama/LM Studio) and local code assistants for daily development — code generation, debugging, test writing, refactoring; integrated LLM APIs into production VKS features for transcription and summarization.
              </p>
            </div>
          </div>
          <div className="border-l-2 border-stone-300 pl-4 dark:border-stone-700">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">
              Junior Software Engineer — Backend Developer
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              EPAM Systems &middot; 2021 &ndash; 2022
            </p>
            <p className="mt-2 text-sm font-medium text-stone-500 dark:text-stone-400">
              Stack: Node.js, AWS Lambda, DynamoDB, API Gateway, GitHub
            </p>
            <div className="mt-4 space-y-3 text-stone-600 dark:text-stone-400">
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Developed Node.js microservices on AWS Lambda for an e-commerce platform
                  serving the American Seeds Store (Syngenta).
                </li>
                <li>
                  Implemented authentication/authorization flows using JWT-based token
                  validation across services.
                </li>
                <li>
                  Built error-handling middleware with structured logging, retry logic, and
                  DynamoDB transaction error recovery.
                </li>
                <li>
                  Integrated DynamoDB for product catalog, order, and user data — designed
                  single-table schema and optimized query patterns.
                </li>
                <li>
                  Contributed to CI/CD pipeline (AWS SAM / Serverless Framework) for automated
                  deployments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Skills
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
