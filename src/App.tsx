import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Cpu,
  Menu,
  MessageCircle,
  Plug,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import Logo from './components/Logo'

const services = [
  {
    number: '01',
    icon: Workflow,
    title: 'Digitalisering og automatisering',
    description:
      'Vi finner tidstyvene i arbeidsdagen og kobler sammen verktøyene dere allerede bruker. Mindre manuelt arbeid, bedre flyt.',
    tags: ['Arbeidsflyt', 'API-integrasjoner', 'Automatisering'],
  },
  {
    number: '02',
    icon: Bot,
    title: 'AI som løser faktiske oppgaver',
    description:
      'Fra intelligente assistenter til strukturering av dokumenter og kundehenvendelser. Praktisk AI, tilpasset bedriften.',
    tags: ['AI-assistenter', 'Dokumentbehandling', 'Kundeservice'],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Skreddersydd programvare',
    description:
      'Vi utvikler webapplikasjoner, kundeportaler og interne verktøy som passer måten virksomheten deres jobber på.',
    tags: ['Webapplikasjoner', 'Portaler', 'Systemutvikling'],
  },
  {
    number: '04',
    icon: Plug,
    title: 'Integrasjoner og rådgivning',
    description:
      'Få systemene til å snakke sammen. Vi hjelper med tekniske veivalg, integrasjoner og en realistisk digitaliseringsplan.',
    tags: ['Systemintegrasjon', 'API', 'IT-rådgivning'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-midnight text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-midnight/85 backdrop-blur-xl">
        <div className="section-wrap flex h-[76px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Hovedmeny">
            <a className="nav-link" href="#tjenester">Tjenester</a>
            <a className="nav-link" href="#bransjer">Hvem vi hjelper</a>
            <a className="nav-link" href="#produkt">ElektroFlow</a>
            <a className="nav-link" href="#om-oss">Om Nordvanta</a>
          </nav>
          <a href="#kontakt" className="button-primary hidden md:inline-flex">Ta kontakt <ArrowUpRight size={16} /></a>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0D1728] px-6 py-5 md:hidden" aria-label="Mobilmeny">
            {[
              ['Tjenester', '#tjenester'],
              ['Hvem vi hjelper', '#bransjer'],
              ['ElektroFlow', '#produkt'],
              ['Om Nordvanta', '#om-oss'],
              ['Kontakt', '#kontakt'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="block border-b border-white/[0.06] py-3 text-sm text-slate-300">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="hjem" className="hero-grid relative flex min-h-[760px] items-center pt-28 sm:min-h-[820px]">
          <div className="pointer-events-none absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="section-wrap relative grid items-center gap-14 pb-24 pt-20 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-3xl">
              <div className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-sky" /> DIGITALISERING · AUTOMATISERING · PROGRAMVARE</div>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
                Smartere arbeidsflyt. <span className="text-gradient">Bedre business.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Vi hjelper bedrifter med å jobbe smartere gjennom digitalisering, automatisering og moderne programvareløsninger – utviklet for reelle behov.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#tjenester" className="button-primary">Utforsk tjenestene <ArrowRight size={17} /></a>
                <a href="#kontakt" className="button-secondary">La oss ta en prat <MessageCircle size={17} /></a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-2"><Check size={14} className="text-sky" /> Praktiske løsninger</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-sky" /> Tilpasset din bedrift</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-sky" /> Bergen · Hele Norge</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -inset-8 rounded-full bg-blue-600/15 blur-[90px]" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#172943] to-[#0D1728] p-5 shadow-glow sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">NORDVANTA / DIGITAL</p>
                    <p className="mt-1 text-sm font-semibold text-white">Teknologi i arbeid</p>
                  </div>
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-blue-300">SMARTER BY DESIGN</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-5">
                  {[
                    { icon: Workflow, label: 'Arbeidsflyt', value: 'Automatisert' },
                    { icon: Bot, label: 'AI-assistanse', value: 'Tilpasset' },
                    { icon: Code2, label: 'Programvare', value: 'Skreddersydd' },
                    { icon: Plug, label: 'Integrasjoner', value: 'Sammenkoblet' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                      <item.icon size={19} className="text-sky" />
                      <p className="mt-5 text-xs text-slate-400">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.08] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300"><Cpu size={18} /></div>
                    <div><p className="text-sm font-semibold text-white">Fra manuelle oppgaver til bedre flyt</p><p className="mt-1 text-xs text-slate-400">Teknologi med et tydelig formål.</p></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-white/10 bg-[#142238] px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Bygget rundt dine behov</div>
              </div>
            </div>
          </div>
        </section>

        <section id="tjenester" className="section-pad border-t border-white/[0.06] bg-[#0D1728]">
          <div className="section-wrap">
            <div className="max-w-2xl">
              <p className="section-kicker">HVA VI GJØR</p>
              <h2 className="section-title">Teknologi som gjør en forskjell.</h2>
              <p className="section-copy">Fra den første ideen til en løsning som fungerer i hverdagen. Vi hjelper deg å finne riktig teknologi for riktig problem.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.number} className="service-card group">
                  <div className="flex items-start justify-between">
                    <div className="icon-tile"><service.icon size={22} /></div>
                    <span className="text-xs font-semibold tracking-widest text-slate-600">{service.number}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bransjer" className="section-pad">
          <div className="section-wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#142238] p-7 sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="relative">
                <span className="eyebrow">BRANSJEFORSTÅELSE</span>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">Teknologi skal passe måten dere jobber på.</h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">Vi har et særlig fokus på elektro- og håndverksbransjen. Med forståelse for arbeidshverdagen ute på oppdrag og behovene på kontoret kan vi utvikle løsninger som treffer bedre.</p>
                <div className="mt-8 space-y-4">
                  {['Mindre tid på manuell administrasjon', 'Bedre oversikt over kunder og oppdrag', 'Enklere dokumentasjon og oppfølging'].map((text) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-slate-300"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-sky"><Check size={14} /></span>{text}</div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="section-kicker">HVEM VI HJELPER</p>
              <h2 className="section-title">Løsninger for bedrifter med praktiske behov.</h2>
              <p className="section-copy">Vi starter med elektro- og håndverksbedrifter, men prinsippet er det samme på tvers av bransjer: forstå arbeidsflyten, finn forbedringsmulighetene og bygg noe som faktisk blir brukt.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Elektrikerbedrifter', 'Rørleggere', 'Entreprenører', 'Servicebedrifter'].map((name) => (
                  <div key={name} className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 text-sm font-medium text-slate-300">{name}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="produkt" className="section-pad border-y border-white/[0.06] bg-[#0D1728]">
          <div className="section-wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">VÅRT FØRSTE PRODUKT</p>
              <div className="mt-4 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white"><Zap size={23} /></span><span className="text-2xl font-bold tracking-tight text-white">ElektroFlow</span></div>
              <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl">En smartere arbeidsflyt for elektrikere.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">Vi utforsker en digital plattform som skal gjøre det enklere for elektrikerbedrifter å holde oversikt over kunder, oppdrag og dokumentasjon. Produktet utvikles med utgangspunkt i reelle behov fra bransjen.</p>
              <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white">Snakk med oss om ElektroFlow <ArrowRight size={16} /></a>
              <p className="mt-4 text-xs text-slate-600">ElektroFlow er under utvikling. Funksjoner og tilgjengelighet er ikke endelig fastsatt.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111E32] p-5 shadow-glow sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div><p className="text-sm font-bold text-white">ElektroFlow</p><p className="mt-1 text-xs text-slate-500">Eksempel på produktvisning</p></div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-semibold text-blue-300">KONSEPT</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[['128','Kunder'],['24','Aktive oppdrag'],['08','Oppdrag i dag'],['17','Rapporter til kontroll']].map(([value,label]) => (
                  <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"><p className="text-2xl font-semibold text-white">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                <p className="text-xs font-semibold text-slate-300">Siste oppdrag</p>
                <div className="mt-4 flex items-center justify-between gap-3"><div><p className="text-sm font-medium text-white">Montering av belysning</p><p className="mt-1 text-xs text-slate-500">Serviceoppdrag · Kunde 1042</p></div><span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[10px] text-amber-300">Pågår</span></div>
                <div className="my-4 border-t border-white/[0.06]" />
                <div className="flex items-center justify-between gap-3"><div><p className="text-sm font-medium text-white">Feilsøking</p><p className="mt-1 text-xs text-slate-500">Kontroll · Kunde 1038</p></div><span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">Til kontroll</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="om-oss" className="section-pad">
          <div className="section-wrap grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div><p className="section-kicker">OM NORDVANTA</p><h2 className="section-title">Teknisk kompetanse. Praktisk forståelse.</h2></div>
            <div className="max-w-2xl"><p className="text-lg leading-8 text-slate-300">Nordvanta er et teknologiselskap med mål om å gjøre digitalisering mer tilgjengelig og nyttig for norske bedrifter.</p><p className="mt-5 text-sm leading-7 text-slate-400">Med bakgrunn fra både elektrobransjen og dataingeniørfaget kombinerer vi praktisk bransjeforståelse med moderne programvareutvikling. Vi tror de beste løsningene starter med å forstå menneskene som skal bruke dem.</p><div className="mt-8 flex flex-wrap gap-3"><span className="tag">Bergen, Norge</span><span className="tag">Teknologi</span><span className="tag">Digital utvikling</span></div></div>
          </div>
        </section>

        <section id="kontakt" className="section-pad border-t border-white/[0.06] bg-[#0D1728]">
          <div className="section-wrap grid gap-12 lg:grid-cols-2">
            <div><p className="section-kicker">TA KONTAKT</p><h2 className="section-title">Har du en idé eller en utfordring?</h2><p className="section-copy">Fortell oss litt om hva du ønsker å forbedre. Vi tar gjerne en uforpliktende prat om mulighetene.</p><div className="mt-8 flex items-center gap-3 text-sm text-slate-400"><MessageCircle size={18} className="text-sky" /> Vi svarer så snart vi kan.</div></div>
            <form className="rounded-2xl border border-white/10 bg-[#111C2E] p-6 sm:p-8" onSubmit={(event) => { event.preventDefault(); setFormSent(true) }}>
              {formSent ? (
                <div className="py-10 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300"><Check size={23} /></span><h3 className="mt-5 text-xl font-semibold text-white">Takk for interessen!</h3><p className="mt-2 text-sm text-slate-400">Kontaktskjemaet er foreløpig en demonstrasjon. Koble det til e-post eller et backend-endepunkt før publisering.</p><button type="button" className="mt-6 text-sm font-semibold text-blue-300" onClick={() => setFormSent(false)}>Tilbake til skjema</button></div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="form-label">Navn<input required name="name" autoComplete="name" placeholder="Ditt navn" className="form-input" /></label>
                    <label className="form-label">Bedrift<input name="company" autoComplete="organization" placeholder="Bedriftsnavn" className="form-input" /></label>
                  </div>
                  <label className="form-label mt-4">E-post<input required type="email" name="email" autoComplete="email" placeholder="navn@bedrift.no" className="form-input" /></label>
                  <label className="form-label mt-4">Hva kan vi hjelpe med?<select name="subject" className="form-input"><option>Digitalisering og automatisering</option><option>AI-løsninger</option><option>Programvareutvikling</option><option>ElektroFlow</option><option>Annet</option></select></label>
                  <label className="form-label mt-4">Melding<textarea required name="message" rows={4} placeholder="Fortell litt om behovet ditt ..." className="form-input resize-y" /></label>
                  <button type="submit" className="button-primary mt-6 w-full justify-center">Send henvendelse <ArrowRight size={17} /></button>
                  <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">Ved å sende inn skjemaet samtykker du til at vi bruker opplysningene for å følge opp henvendelsen. Personvernerklæring må publiseres før skjemaet tas i bruk.</p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] bg-midnight py-9">
        <div className="section-wrap flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div><Logo /><p className="mt-4 text-xs text-slate-600">© {new Date().getFullYear()} Nordvanta. Alle rettigheter forbeholdt.</p></div>
          <div className="flex flex-wrap gap-5 text-xs text-slate-500"><a href="#tjenester" className="hover:text-white">Tjenester</a><a href="#produkt" className="hover:text-white">ElektroFlow</a><a href="#kontakt" className="hover:text-white">Kontakt</a><span>Bergen, Norge</span></div>
        </div>
      </footer>
    </div>
  )
}

export default App
