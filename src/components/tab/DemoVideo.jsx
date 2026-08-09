import SectionReveal from './SectionReveal';

const VIDEO_URL = 'https://media.base44.com/videos/public/6a6ed39f0305566485de08b3/224214e08_TAB_Work_Demo_EN.mp4';

export default function DemoVideo() {
  return (
    <section id="demo" className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">SEE IT IN ACTION</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-6">
            From friction event to recovered handoff — in thirty seconds.
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed text-tab-muted mb-12">
            A closed loop, not a dashboard. Watch TAB detect a stalled cross-tool handoff, route the smallest action that unblocks it, and return work with continuity — anonymous by design.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative border border-tab-ghost bg-tab-ink overflow-hidden">
            <video
              src={VIDEO_URL}
              controls
              playsInline
              preload="metadata"
              className="block w-full aspect-video bg-tab-ink"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}