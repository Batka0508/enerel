import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Heart, Sparkles } from "lucide-react";

const gallery = [
  {
    src: "/assets/bvc.png",
    title: "Memory I",
    text: "A soft little moment held inside the night.",
  },
  {
    src: "/assets/cxz.png",
    title: "Memory II",
    text: "A frame that feels warm even in the dark.",
  },
  {
    src: "/assets/fsa.png",
    title: "Memory III",
    text: "The kind of picture that makes time slow down.",
  },
  {
    src: "/assets/hgf.png",
    title: "Memory IV",
    text: "A quiet spark, glowing like it belongs here.",
  },
  {
    src: "/assets/iuy.png",
    title: "Memory V",
    text: "A dreamy pause between two heartbeats.",
  },
  {
    src: "/assets/kjh.png",
    title: "Memory VI",
    text: "Something tender, bright, and impossible to ignore.",
  },
  {
    src: "/assets/mnb.png",
    title: "Memory VII",
    text: "A little universe captured in one image.",
  },
  {
    src: "/assets/nbv.png",
    title: "Memory VIII",
    text: "A feeling that stays after the screen changes.",
  },
  {
    src: "/assets/qwe.png",
    title: "Memory IX",
    text: "Soft light, deep love, and a cinematic hush.",
  },
  {
    src: "/assets/vcx.png",
    title: "Memory X",
    text: "The final frame, waiting to begin again.",
  },
];

const loveSongsUrl = "https://open.spotify.com/track/6Gg0pECLwfs5mrHQBqerKY";
const loveSongsEmbed =
  "https://open.spotify.com/embed/track/6Gg0pECLwfs5mrHQBqerKY?utm_source=generator&theme=0&autoplay=1&t=0";

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, index) => ({
        id: index,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 8,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-petal/70 shadow-[0_0_18px_rgba(255,214,232,.6)]"
          style={{ left: particle.x, top: particle.y, width: particle.size, height: particle.size }}
          animate={{ y: [-18, -76, -18], opacity: [0.18, 0.82, 0.18], scale: [1, 1.8, 1] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav
      className="absolute left-1/2 top-4 z-30 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/12 bg-white/[0.07] px-4 py-3 shadow-glass backdrop-blur-2xl md:px-6"
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-blush/15 text-blush shadow-glow">
          <Heart size={18} fill="currentColor" />
        </span>
        Amour Nocturne
      </div>
      <div className="hidden rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs uppercase text-white/52 md:block">
        One page love experience
      </div>
      <a
        href={loveSongsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white transition hover:border-blush/60 hover:bg-blush/15 hover:shadow-glow"
      >
        <ExternalLink size={16} />
        <span className="hidden sm:inline">Spotify</span>
      </a>
    </motion.nav>
  );
}

function GalleryCard() {
  const [active, setActive] = useState(0);
  const direction = active % 2 === 0 ? 1 : -1;

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % gallery.length), 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative h-full min-h-0 rounded-[2rem] border border-white/12 bg-white/[0.065] p-3 shadow-glass backdrop-blur-2xl"
      initial={{ opacity: 0, x: 46, filter: "blur(18px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-8 -z-10 rounded-full bg-blush/20 blur-3xl" />
      <div className="relative h-full overflow-hidden rounded-[1.55rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={gallery[active].src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08, x: 34 * direction, filter: "blur(24px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, x: -26 * direction, filter: "blur(18px)" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={gallery[active].src}
              alt={gallery[active].title}
              className="h-full w-full object-cover"
              initial={{ scale: 1.12, rotate: 1.4 * direction }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(255,214,232,.34),transparent_18%),radial-gradient(circle_at_50%_56%,rgba(255,143,189,.30),transparent_20%)] mix-blend-screen"
              initial={{ opacity: 0, scale: 0.2, clipPath: "polygon(50% 82%, 18% 50%, 18% 26%, 34% 14%, 50% 24%, 66% 14%, 82% 26%, 82% 50%)" }}
              animate={{ opacity: [0, 0.9, 0], scale: [0.25, 1.55, 2.25] }}
              transition={{ duration: 1.05, ease: "easeOut" }}
            />
            {[0, 1, 2, 3, 4].map((heart) => (
              <motion.span
                key={heart}
                className="pointer-events-none absolute left-1/2 top-1/2 text-petal drop-shadow-[0_0_18px_rgba(255,143,189,.85)]"
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.35, rotate: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  x: [-54, -22, 18, 48, 74][heart],
                  y: [-64, -108, -86, -126, -72][heart],
                  scale: [0.35, 1, 0.65],
                  rotate: [-18, 12, -8, 18, -12][heart],
                }}
                transition={{ duration: 1.25, delay: heart * 0.06, ease: "easeOut" }}
              >
                <Heart size={18 + heart * 2} fill="currentColor" />
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/22 px-3 py-2 backdrop-blur-xl">
          {gallery.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${item.title}`}
              className={`h-2 rounded-full transition-all ${
                active === index ? "w-8 bg-blush shadow-glow" : "w-2 bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MusicPlayer() {
  const playerSrc = `${loveSongsEmbed}&reload=${Date.now()}`;

  return (
    <motion.div
      className="w-full overflow-hidden rounded-[1.2rem] border border-white/12 bg-white/[0.075] p-2 shadow-glass backdrop-blur-2xl"
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.05, duration: 0.75 }}
    >
      <iframe
        key={playerSrc}
        title="Love Songs by Kaash Paige on Spotify"
        src={playerSrc}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block rounded-xl bg-black/20"
      />
    </motion.div>
  );
}

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 28 });
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const onMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  const openPage = () => {
    setOpened(true);
  };

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-ink text-white md:h-dvh md:overflow-hidden">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/18 blur-3xl"
        style={{ x: smoothX, y: smoothY }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(155,92,255,.30),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,143,189,.25),transparent_30%),linear-gradient(135deg,#08060d_0%,#21091b_45%,#05040a_100%)]" />
      <motion.img
        src="/assets/fsa.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 blur-[1px]"
        animate={{ scale: [1, 1.06, 1], x: [0, -12, 0], y: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,13,.25),#08060d_96%)]" />
      <Particles />

      <Navbar />

      <section className="relative z-10 grid min-h-dvh px-4 pb-8 pt-24 md:h-full md:min-h-0 md:px-8 md:pb-8 md:pt-24">
        <div className="mx-auto grid h-full min-h-0 w-full max-w-6xl content-start gap-5 md:grid-cols-[1.05fr_.95fr] md:content-center md:items-center lg:gap-8">
          <div className="min-w-0">
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs uppercase text-petal/80 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.15 }}
            >
              <Sparkles size={14} />
              A cinematic love letter
            </motion.div>

            <motion.h1
              className="max-w-3xl font-serif text-[clamp(3rem,16vw,10rem)] leading-[0.82] tracking-normal text-white md:leading-[0.78]"
              initial={{ opacity: 0, y: 58, filter: "blur(22px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Forever
              <span className="block bg-gradient-to-r from-petal via-blush to-violet bg-clip-text text-transparent">
                Starts Here
              </span>
            </motion.h1>

            <motion.div
              className="mt-6 max-w-lg md:mt-7"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.92 }}
            >
              <p className="mb-3 font-serif text-[1.45rem] leading-tight text-white/88 md:text-3xl">
                Намайг тоглуулаарай хөөрхнөө
              </p>
              {opened && <MusicPlayer />}
            </motion.div>
          </div>

          <div className="h-[34vh] min-h-64 min-w-0 md:hidden">
            <GalleryCard />
          </div>

          <div className="hidden h-[min(66vh,620px)] min-h-0 md:block">
            <GalleryCard />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {!opened && (
          <motion.section
            className="absolute inset-0 z-40 grid place-items-center overflow-hidden bg-ink/72 px-5 text-center backdrop-blur-2xl"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(18px)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,143,189,.28),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(155,92,255,.24),transparent_30%)]" />
            <Particles />

            <motion.div
              className="relative w-full max-w-lg rounded-[2rem] border border-white/14 bg-white/[0.075] px-6 py-10 shadow-glass backdrop-blur-2xl"
              initial={{ opacity: 0, y: 34, scale: 0.96, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-10 -z-10 rounded-full bg-blush/20 blur-3xl" />
              <p className="mb-4 text-xs font-bold uppercase text-petal/75">Нууцхан хуудас</p>
              <h2 className="font-serif text-5xl leading-none text-white md:text-7xl">Ready?</h2>
              <p className="mx-auto mt-5 max-w-sm text-base leading-7 text-white/62">
                Энэ товчлуур дээр дараарай.
              </p>

              <motion.button
                type="button"
                onClick={openPage}
                className="mx-auto mt-8 grid h-24 w-24 place-items-center rounded-full border border-blush/45 bg-blush/18 text-petal shadow-glow backdrop-blur-xl transition hover:bg-blush/28 focus:outline-none focus:ring-2 focus:ring-blush/70"
                aria-label="Хуудсыг нээх"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                animate={{
                  boxShadow: [
                    "0 0 28px rgba(255,143,189,.28)",
                    "0 0 58px rgba(255,143,189,.55)",
                    "0 0 28px rgba(255,143,189,.28)",
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={42} fill="currentColor" />
              </motion.button>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
