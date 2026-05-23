const css = `
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap');

.d4{--paper:#ffffff;--ink:#15120e;--muted:#7a7268;--line:#e7e3dc;--bronze:#9a6a3c;--coffee:#5e4631;
  background:var(--paper);color:var(--ink);min-height:100vh;
  font-family:'Hanken Grotesk',sans-serif;-webkit-font-smoothing:antialiased;padding-bottom:70px;
  font-feature-settings:"ss01";}
.d4 *{box-sizing:border-box;}
.d4 .wrap{max-width:1080px;margin:0 auto;padding:0 44px;}
.d4 .small{font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);}
.d4 .br{color:var(--bronze);}

.d4 header{display:flex;justify-content:space-between;align-items:center;padding:30px 0;border-bottom:1px solid var(--ink);}
.d4 header .name{font-weight:600;font-size:17px;letter-spacing:-0.01em;}
.d4 header .socials{display:flex;gap:20px;}
.d4 header .socials a{font-size:13px;font-weight:600;color:var(--muted);text-decoration:none;transition:.18s;}
.d4 header .socials a:hover{color:var(--bronze);}

.d4 .hero{padding:90px 0 0;display:grid;grid-template-columns:1.15fr 0.85fr;gap:56px;align-items:end;border-bottom:1px solid var(--line);padding-bottom:60px;}
.d4 .hero h1{font-weight:600;font-size:clamp(44px,7.5vw,96px);line-height:0.98;letter-spacing:-0.04em;margin:14px 0 0;}
.d4 .hero h1 .accent{color:var(--bronze);}
.d4 .hero .lede{font-size:19px;line-height:1.55;color:var(--muted);font-weight:400;}
.d4 .hero .lede strong{color:var(--ink);font-weight:600;}

.d4 .ticker{display:flex;gap:0;border-bottom:1px solid var(--line);}
.d4 .ticker div{flex:1;padding:26px 0;border-right:1px solid var(--line);}
.d4 .ticker div:last-child{border-right:none;}
.d4 .ticker .v{font-size:38px;font-weight:600;letter-spacing:-0.03em;color:var(--coffee);line-height:1;}
.d4 .ticker .k{margin-top:8px;}

.d4 .secline{display:flex;align-items:baseline;justify-content:space-between;padding:66px 0 6px;}
.d4 .secline h2{font-weight:600;font-size:clamp(22px,2.8vw,30px);letter-spacing:-0.02em;margin:0;}

.d4 .sys{display:grid;grid-template-columns:52px 1fr;gap:30px;padding:34px 0;border-top:1px solid var(--line);transition:.2s;}
.d4 .sys:last-of-type{border-bottom:1px solid var(--line);}
.d4 .sys:hover{padding-left:14px;margin-left:-14px;}
.d4 .sys .num{font-size:14px;font-weight:600;color:var(--bronze);padding-top:7px;letter-spacing:0.04em;}
.d4 .sys h3{font-weight:600;font-size:25px;letter-spacing:-0.02em;margin:0;display:flex;align-items:center;gap:13px;}
.d4 .badge{font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--bronze);border:1px solid var(--bronze);padding:3px 8px;border-radius:2px;display:inline-flex;align-items:center;gap:6px;}
.d4 .badge .dot{width:6px;height:6px;border-radius:50%;background:var(--bronze);animation:p4 2s infinite;}
.d4 .badge.wip{color:var(--coffee);border-color:var(--coffee);}
.d4 .badge.wip .dot{background:var(--coffee);}
@keyframes p4{0%,100%{opacity:1}50%{opacity:.3}}
.d4 .sys p{font-size:16px;line-height:1.6;color:var(--muted);max-width:62ch;margin:12px 0 0;}
.d4 .sys .meta{margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;}
.d4 .tag{font-size:12px;font-weight:500;color:var(--coffee);border:1px solid var(--line);padding:4px 11px;border-radius:999px;}

.d4 .exp{display:grid;grid-template-columns:84px 1fr auto;gap:24px;padding:16px 0;border-top:1px solid var(--line);align-items:baseline;}
.d4 .exp .r{font-weight:600;font-size:17px;}
.d4 .exp .o{color:var(--muted);font-size:15px;}

.d4 footer{padding:88px 0 30px;border-top:1px solid var(--ink);margin-top:64px;}
.d4 footer h3{font-weight:600;font-size:clamp(32px,5vw,60px);letter-spacing:-0.035em;line-height:1;max-width:15ch;}
.d4 footer a.cta{color:var(--bronze);text-decoration:none;border-bottom:2px solid var(--bronze);}
.d4 footer .socials{margin-top:40px;display:flex;gap:24px;}
.d4 footer .socials a{font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:3px;transition:.18s;}
.d4 footer .socials a:hover{color:var(--bronze);border-color:var(--bronze);}
@media(max-width:760px){.d4 .hero{grid-template-columns:1fr;gap:30px;}.d4 .ticker{flex-direction:column;}.d4 .ticker div{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:18px 0;border-right:none;border-bottom:1px solid var(--line);}.d4 .ticker div:last-child{border-bottom:none;}.d4 .ticker .v{font-size:32px;}.d4 .ticker .k{margin-top:0;}.d4 header .socials{display:none;}}
`;

const socials = [
  { label: "GitHub", href: "https://github.com/raven-zamora" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raven-zamora" },
  { label: "Facebook", href: "https://www.facebook.com/raven.zamora" },
];

const systems = [
  { num: "00", n: "Marvs CarRental — Booking Calendar", d: "Currently building a calendar-based booking tracker for a car rental business — visualizing rental schedules, vehicle availability, and pickup/return windows to prevent double-bookings and keep the fleet calendar in sync.", t: ["Booking", "Next.js", "Supabase"], status: "wip" },
  { num: "01", n: "Desstea Cafe — POS, Ticketing & Sales Management", d: "Built and deployed a full suite of systems for a multi-branch cafe — Point of Sales, Thermal Ticketing, and a Sales Management System used across 5+ locations. Includes a Sales Management Website that gives owners a centralized view of sales performance across all branches, with real-time tracking, order processing, and daily operational reporting.", t: ["Live · 5+ locations", "Point of Sales", "Ticketing System", "Sales Management System", "Next.js", "Expo / React Native", "Supabase", "SQLite"] },
  { num: "02", n: "JMD Bakery — Distribution & Sales", d: "A distribution and sales management system for agent-based operations, with multi-level tracking for inventory, sales, and agent performance — plus predictive insights to improve sales visibility and decision-making.", t: ["Live", "Gemini AI", "Next.js", "Expo / React Native", "Supabase", "SQLite"] },
  { num: "03", n: "GetAroundAuto — Car Rental Platform", d: "Landing and booking experience for a US-based car rental business, with Google Maps integration for location-aware vehicle pickup.", t: ["Live · US", "Landing Page", "Google Maps", "Next.js"] },
  { num: "04", n: "ISU Campus Event Attendance — QR Attendance & Management", d: "Built an attendance management system for Isabela State University events — Students Week and the campus Roadshow. A web platform handled student registration and mass-generated QR codes in one click, distributed across the whole CCSICT campus. Mobile scanners ran offline-first for reliable check-ins under live event load. Handled 700+ student registrations and hundreds of time-ins within minutes.", t: ["Live · 700+ students", "QR Attendance", "Offline-first Architecture", "Next.js", "Expo / React Native", "Supabase", "SQLite"] },
];

const more = [
  { y: "2026", r: "Freelance Fullstack Developer", o: "Self-employed · multiple business clients" },
  { y: "2025", r: "Full-Stack Dev — BLE Attendance System", o: "Isabela State University · BLE + QR validation" },
  { y: "2025–26", r: "Co-Founder — Standup AI", o: "Led technical direction & MVP architecture · Remote" },
];

export default function Home() {
  return (
    <div className="d4">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="wrap">
        <header>
          <span className="name">Raven Zamora</span>
          <nav className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </nav>
        </header>

        <section className="hero">
          <div>
            <div className="small">Student · Builder · Shipping in production</div>
            <h1>Real systems, <span className="accent">really</span> in use.</h1>
          </div>
          <p className="lede">
            An information technology student who builds for production, not the
            demo reel. <strong>Three live business systems</strong> — designed,
            deployed, and depended on every day.
          </p>
        </section>

        <div className="ticker">
          <div><div className="v">4</div><div className="small k">Live systems</div></div>
          <div><div className="v">4</div><div className="small k">Orgs served</div></div>
          <div><div className="v">700+</div><div className="small k">Users handled live</div></div>
        </div>

        <div className="secline">
          <h2>The Live Work</h2>
          <span className="small">In production now</span>
        </div>
        {systems.map((s) => (
          <article className="sys" key={s.num}>
            <span className="num">{s.num}</span>
            <div>
              <h3>{s.n}<span className={s.status === "wip" ? "badge wip" : "badge"}><span className="dot" />{s.status === "wip" ? "Building" : "Live"}</span></h3>
              <p>{s.d}</p>
              <div className="meta">{s.t.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          </article>
        ))}

        <div className="secline">
          <h2>Background</h2>
          <span className="small">Also on the record</span>
        </div>
        {more.map((m) => (
          <div className="exp" key={m.r}>
            <span className="small" style={{ paddingTop: 3 }}>{m.y}</span>
            <span className="r">{m.r}</span>
            <span className="o">{m.o}</span>
          </div>
        ))}

        <footer>
          <h3>Let’s build the next one. <a className="cta" href="#">Get in touch →</a></h3>
          <nav className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
}
