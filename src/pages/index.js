import Head from "next/head";
import Image from "next/image";
import Button from "@/components/Button";
import wavy from "../../public/images/wavy.jpg";
import { Tesimonial, Partner, Backer, Programs } from "@/components/Slider";
import Sparks from "../../public/images/sparks.svg";
import ExtLink from "../../public/images/external-link.svg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <Head>
        <title>Cyborg Network - Hyperlocal Infrastructure Powering Real-Time AI</title>
        <meta
          name="description"
          content="A scalable, privacy-first platform for developers and enterprises to run AI workloads seamlessly. Deploy, compute, and scale AI inferencing on a distributed network of Cyborg Miners-faster, cost-effective, and secure."
        />
        <link rel="canonical" href="https://www.cyborgnetwork.io/" />
      </Head>

      <section className="common-section home-hero-section flow-hidden">
        <div className="container">
          <div className="home-wrap d-flex hero-wrap">
            <motion.div
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.25, duration: 1.5 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <h1 className="hero-heading">
                <span className="break">Hyperlocal Infrastructure</span>{" "}
                <span className="text-gradient">Powering Real-Time AI</span></h1>
              <motion.div
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 1.5,
                  delay: 0.25,
                }}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                <p className="home-desc">
                  A scalable, privacy-first platform for developers and
                  enterprises to run AI workloads seamlessly. Deploy, compute,
                  and scale AI inferencing on a distributed network of Cyborg
                  Miners—faster, cost-effective, and secure.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 0.25,
                duration: 1.5,
                delay: 0.5,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Button
                title="Join Now"
                link="https://tally.so/r/mVN4qg"
                size="btn-md"
                icon={Sparks}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="common-section home-animation-section flow-hidden">
        <motion.div
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.25, duration: 2 }}
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          <Image src={wavy} alt="wavy" className="wavy-image" />
        </motion.div>
      </section>

      <section className="common-section home-video-section flow-hidden">
        <div className="container">
          <motion.div
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.25, duration: 2 }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            <div className="video-wrapper">
              <video
                ref={videoRef}
                poster="/images/poster.png"
                className="introVideo"
                playsInline
                onClick={togglePlay}
              >
                <source src="https://firebasestorage.googleapis.com/v0/b/website-61898.firebasestorage.app/o/intro%20optimized.mp4?alt=media&token=fe4f6c73-6284-4f55-840a-a118b3fb8a88" type="video/mp4" />
              </video>

              <div
                className={`controls-overlay ${isPlaying ? "hide" : ""}`}
                onClick={togglePlay}
              >
                <button
                  className="play-button"
                  aria-label="Play video"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  <svg width="22" height="26" viewBox="0 0 19 22" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.15734 0.559058C1.8884 -0.226473 0.25 0.686213 0.25 2.17861V20.1018C0.25 21.5942 1.88841 22.5069 3.15734 21.7214L17.6338 12.7598C18.8367 12.0151 18.8367 10.2653 17.6338 9.52068L3.15734 0.559058Z"
                      fill="#173337ff"
                    />
                  </svg>
                </button>

                <p className="video-label">Introducing Cyborg</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="common-section start-section flow-hidden">
        <div className="container">
          <div className="start-wrap d-flex">
            <motion.div
              className="d-left"
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.25, duration: 2 }}
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              <div className="st-left">
                <div className="st-box">
                  <h2>
                    <span className="text-gradient light">Provide</span>{" "}
                    inference nodes Earn rewards
                  </h2>
                  <Button
                    title="Start"
                    link="https://tally.so/r/wazvG9"
                    size="btn-md"
                    theme="light outline"
                    icon={ExtLink}
                  />
                </div>
                <div className="step-wrap">
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2 }}
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <div className="st-steps">
                      <div className="st-pipe"></div>
                      <div className="st-content">
                        <h3>1. Register</h3>
                        <p>Sign up today to get access to the Cyborg Miner.</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2 }}
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <div className="st-steps">
                      <div className="st-pipe"></div>
                      <div className="st-content">
                        <h3>2. Mine</h3>
                        <p>
                          Simply connect to power and the internet to start
                          mining.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2 }}
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <div className="st-steps">
                      <div className="st-pipe"></div>
                      <div className="st-content">
                        <h3>3. Earn</h3>
                        <p>
                          Receive uptime rewards and rental income effortlessly.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="d-right"
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.25, duration: 2 }}
              initial={{ opacity: 0, translateX: 200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              <div className="st-right">
                <div className="st-box">
                  <h2>
                    <span className="text-gradient light">Launch</span> your AI
                    apps at scale
                  </h2>
                  <Button
                    title="Start"
                    link="https://tally.so/r/nGb5Ep"
                    size="btn-md"
                    theme="light outline"
                    icon={ExtLink}
                  />
                </div>
                <div className="step-wrap">
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2 }}
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <div className="st-steps">
                      <div className="st-pipe"></div>
                      <div className="st-content">
                        <h3>1. Get Started</h3>
                        <p>
                          Sign up today or request a demo to see how we can
                          accelerate your AI goals.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2 }}
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <div className="st-steps">
                      <div className="st-pipe"></div>
                      <div className="st-content">
                        <h3>2. Upload With Ease</h3>
                        <p>
                          Easily upload any ONNX model to our platform and
                          deploy it in your preferred global location.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2 }}
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <div className="st-steps">
                      <div className="st-pipe"></div>
                      <div className="st-content">
                        <h3>3. Launch</h3>
                        <p>Congratulations! Your AI application is now live.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="common-section pill-section">
        <div className="container">
          <motion.h2
            className="section-heading"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            The Power To Deploy{" "}
            <span className="text-gradient">AI Anywhere</span>
          </motion.h2>
          <motion.p
            className="section-desc"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            Infrastructure to support AI inferencing locally. Build, optimize,
            and run models on a decentralized network with ease.
          </motion.p>
          <motion.div
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="pill-wrap">
              <ul>
                <li>AI Chatbots</li>
                <li>Computer Vision</li>
                <li>Wearable Devices</li>
                <li>Predictive Models</li>
                <li>Autonomous Mobility</li>
                <li>Industrial IoT</li>
                <li>AI Agents</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="common-section programs-section">
        <div className="container">
          <motion.h2
            className="section-heading heading-sm"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            Growing with visionary partners, ecosystems, and clients shaping the
            future of AI.
          </motion.h2>
        </div>
        <motion.div
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Programs />
        </motion.div>
      </section>

      <section className="common-section newsletter-section">
        <div className="container">
          <div className="ns-wrap">
            <div className="ns-content">
              <motion.h2
                className="section-heading"
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                Stay up to date{" "}
                <span className="break">with Cyborg Network</span>
              </motion.h2>
              <motion.p
                className="section-desc"
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                Join innovators who trust Cyborg Network for secure and
                efficient AI inferencing. Subscribe to our newsletter!
              </motion.p>
              <motion.div
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <form>
                  <div className="fw-field">
                    <input
                      type="email"
                      name="fw-email"
                      aria-label="Email Address"
                      placeholder="Enter you email"
                    />
                    <button type="submit" className="fw-send">
                      Send
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
