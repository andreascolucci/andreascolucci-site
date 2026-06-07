export type Language = "en" | "it" | "es";

export const translations = {
  // Navigation
  nav: {
    home: { en: "Home", it: "Home", es: "Inicio" },
    work: { en: "Work", it: "Lavori", es: "Trabajos" },
    about: { en: "About", it: "Chi sono", es: "Sobre mí" },
    contact: { en: "Contact", it: "Contatto", es: "Contacto" },
    faq: { en: "FAQ", it: "FAQ", es: "FAQ" },
  },

  // Hero
  hero: {
    name: { en: "Andreas Colucci · Event Operations Consultant", it: "Andreas Colucci · Consulente Operativo Eventi", es: "Andreas Colucci · Consultor de Operaciones de Eventos" },
    headline1: { en: "When operations break,", it: "Quando le operazioni saltano,", es: "Cuando las operaciones fallan," },
    headline2: { en: "I take control.", it: "prendo il controllo.", es: "tomo el control." },
    subtitle: {
      en: "Large-scale events. Real-time execution. Critical problem solving.",
      it: "Eventi su larga scala. Esecuzione in tempo reale. Problem solving critico.",
      es: "Eventos a gran escala. Ejecución en tiempo real. Resolución de problemas críticos.",
    },
    cta_line: {
      en: "If you're working on a complex event, let's talk.",
      it: "Se stai lavorando a un evento complesso, parliamone.",
      es: "Si estás trabajando en un evento complejo, hablemos.",
    },
    cta_primary: { en: "Work with me", it: "Lavoriamo insieme", es: "Trabajemos juntos" },
    cta_secondary: { en: "LinkedIn", it: "LinkedIn", es: "LinkedIn" },
    availability: {
      en: "Available for selected projects — currently open to new conversations.",
      it: "Disponibile per progetti selezionati — aperto a nuove conversazioni.",
      es: "Disponible para proyectos seleccionados — abierto a nuevas conversaciones.",
    },
    status: {
      en: "Available — selected projects · 2026",
      it: "Disponibile — progetti selezionati · 2026",
      es: "Disponible — proyectos seleccionados · 2026",
    },
    stats: [
      { value: 300, suffix: "+", label: { en: "events delivered", it: "eventi gestiti", es: "eventos gestionados" } },
      { value: 110, suffix: "K", label: { en: "peak attendance", it: "picco di pubblico", es: "pico de público" } },
      { value: 20, suffix: "+", label: { en: "countries", it: "paesi", es: "países" } },
    ],
  },

  // Impact
  impact: {
    label: { en: "Impact", it: "Impatto", es: "Impacto" },
    title: { en: "By the numbers", it: "I numeri", es: "En cifras" },
    stats: [
      {
        value: "110,000",
        label: {
          en: "attendees managed in a single event",
          it: "partecipanti gestiti in un singolo evento",
          es: "asistentes gestionados en un solo evento",
        },
      },
      {
        value: "95",
        label: {
          en: "team members managed",
          it: "membri del team gestiti",
          es: "miembros del equipo gestionados",
        },
      },
      {
        value: "24h",
        label: {
          en: "near-continuous execution cycles",
          it: "cicli operativi quasi continui",
          es: "ciclos de ejecución casi continuos",
        },
      },
      {
        value: "300+",
        label: {
          en: "large-scale events delivered",
          it: "eventi su larga scala completati",
          es: "eventos a gran escala realizados",
        },
      },
    ],
    statement1: {
      en: "Most operational failures are predictable.",
      it: "La maggior parte dei problemi operativi è prevedibile.",
      es: "La mayoría de los fallos operativos son predecibles.",
    },
    statement2: {
      en: "The problem is they're usually noticed too late.",
      it: "Il problema è che di solito vengono notati troppo tardi.",
      es: "El problema es que suelen detectarse demasiado tarde.",
    },
  },

  // Logo Strip
  logoStrip: {
    label: { en: "Operational Contexts", it: "Contesti Operativi", es: "Contextos Operativos" },
    title: { en: "Where I've Operated", it: "Dove ho operato", es: "Donde he operado" },
  },

  // Positioning
  positioning: {
    line1: {
      en: "Events run smoothly until something breaks.",
      it: "Gli eventi funzionano finché qualcosa si rompe.",
      es: "Los eventos funcionan hasta que algo falla.",
    },
    line2: {
      en: "That's when I step in.",
      it: "È lì che intervengo.",
      es: "Ahí es cuando intervengo.",
    },
  },

  // Services
  services: {
    label: { en: "Services", it: "Servizi", es: "Servicios" },
    title: { en: "What I do", it: "Cosa faccio", es: "Lo que hago" },
    items: [
      {
        title: {
          en: "Critical Event Operations",
          it: "Operazioni critiche per eventi",
          es: "Operaciones críticas para eventos",
        },
        description: {
          en: "Operational leadership for large-scale events where reliability, coordination, and control are non-negotiable.",
          it: "Leadership operativa per eventi su larga scala dove affidabilità, coordinamento e controllo non sono negoziabili.",
          es: "Liderazgo operativo para eventos a gran escala donde la fiabilidad, la coordinación y el control no son negociables.",
        },
        closing: {
          en: "I take responsibility for operations when reliability is non-negotiable.",
          it: "Mi assumo la responsabilità delle operazioni quando l'affidabilità non è negoziabile.",
          es: "Asumo la responsabilidad de las operaciones cuando la fiabilidad no es negociable.",
        },
      },
      {
        title: {
          en: "Onsite Control & Decision Making",
          it: "Controllo sul campo e decisioni in tempo reale",
          es: "Control en sitio y toma de decisiones",
        },
        description: {
          en: "Real-time operational presence during events. I manage issues as they happen, take decisions under pressure, and maintain stability when things move fast.",
          it: "Presenza operativa in tempo reale durante gli eventi. Gestisco i problemi nel momento in cui si verificano, prendo decisioni sotto pressione e mantengo la stabilità quando tutto si muove velocemente.",
          es: "Presencia operativa en tiempo real durante eventos. Gestiono problemas en el momento, tomo decisiones bajo presión y mantengo la estabilidad cuando todo se mueve rápido.",
        },
        closing: {
          en: "I make decisions in real time to keep operations under control.",
          it: "Prendo decisioni in tempo reale per mantenere le operazioni sotto controllo.",
          es: "Tomo decisiones en tiempo real para mantener las operaciones bajo control.",
        },
      },
      {
        title: {
          en: "Systems & Flow Management",
          it: "Gestione sistemi e flussi",
          es: "Gestión de sistemas y flujos",
        },
        items: {
          en: ["Cashless payment systems", "Ticketing systems", "Access control and crowd flow", "Vendor and F&B operations"],
          it: ["Sistemi di pagamento cashless", "Sistemi di biglietteria", "Controllo accessi e flussi", "Operazioni vendor e F&B"],
          es: ["Sistemas de pago cashless", "Sistemas de ticketing", "Control de accesos y flujos", "Operaciones de vendors y F&B"],
        },
        closing: {
          en: "I work on systems that must perform in real time under pressure.",
          it: "Lavoro su sistemi che devono funzionare in tempo reale sotto pressione.",
          es: "Trabajo en sistemas que deben funcionar en tiempo real bajo presión.",
        },
      },
    ],
    cta_text: {
      en: "If you're dealing with operational complexity, feel free to reach out.",
      it: "Se stai gestendo complessità operativa, contattami.",
      es: "Si estás gestionando complejidad operativa, contáctame.",
    },
    cta_button: { en: "Let's talk", it: "Parliamone", es: "Hablemos" },
  },

  // Global Experience
  globalExperience: {
    label: { en: "Reach", it: "Raggio d'azione", es: "Alcance" },
    title: { en: "Global Experience", it: "Esperienza globale", es: "Experiencia global" },
    stat1: {
      en: "300+ events across 20+ countries.",
      it: "300+ eventi in oltre 20 paesi.",
      es: "300+ eventos en más de 20 países.",
    },
    stat2: {
      en: "10 years operating in high-complexity environments.",
      it: "10 anni di operatività in ambienti ad alta complessità.",
      es: "10 años operando en entornos de alta complejidad.",
    },
    description: {
      en: "Repeated exposure to high-pressure environments across different countries and systems.",
      it: "Esposizione ripetuta ad ambienti ad alta pressione in diversi paesi e sistemi.",
      es: "Exposición repetida a entornos de alta presión en diferentes países y sistemas.",
    },
  },

  // Case Studies
  caseStudies: {
    label: { en: "Selected work", it: "Lavori selezionati", es: "Trabajos seleccionados" },
    title: { en: "Case Studies", it: "Case studies", es: "Casos de estudio" },
    cta_text: {
      en: "Working on something similar? Let's talk.",
      it: "Stai lavorando a qualcosa di simile? Parliamone.",
      es: "¿Trabajas en algo similar? Hablemos.",
    },
    cta_button: { en: "Start a conversation", it: "Inizia una conversazione", es: "Iniciar una conversación" },
    role_label: { en: "Role", it: "Ruolo", es: "Rol" },
    outcome_label: { en: "Outcome", it: "Risultato", es: "Resultado" },
    cases: [
      {
        number: "01",
        title: {
          en: "Campovolo — Ligabue 'La Notte di Certe Notti'",
          it: "Campovolo — Ligabue 'La Notte di Certe Notti'",
          es: "Campovolo — Ligabue 'La Notte di Certe Notti'",
        },
        highlight: { en: "110,000 attendees", it: "110.000 partecipanti", es: "110.000 asistentes" },
        context: {
          en: "One of the largest concerts in Italy, with zero margin for error.",
          it: "Uno dei più grandi concerti in Italia, senza margine di errore.",
          es: "Uno de los conciertos más grandes de Italia, sin margen de error.",
        },
        details: {
          en: ["110,000 attendees", "Stadium-scale concert", "Zero margin for error"],
          it: ["110.000 partecipanti", "Concerto a scala stadio", "Zero margine di errore"],
          es: ["110.000 asistentes", "Concierto a escala de estadio", "Sin margen de error"],
        },
        role: {
          en: "Operational systems oversight — payment systems, access control, and crowd flow management at maximum capacity.",
          it: "Supervisione dei sistemi operativi — sistemi di pagamento, controllo accessi e gestione flussi a massima capienza.",
          es: "Supervisión de sistemas operativos — sistemas de pago, control de acceso y gestión de flujos a máxima capacidad.",
        },
        outcome: {
          en: "Seamless execution at full capacity. All systems performed without interruption across the entire event cycle. No operational failures recorded.",
          it: "Esecuzione impeccabile a piena capienza. Tutti i sistemi hanno funzionato senza interruzioni durante l'intero ciclo dell'evento. Nessun guasto operativo registrato.",
          es: "Ejecución impecable a máxima capacidad. Todos los sistemas funcionaron sin interrupciones durante todo el ciclo del evento. Sin fallos operativos registrados.",
        },
      },
      {
        number: "02",
        title: {
          en: "Kappa FuturFestival — Turin",
          it: "Kappa FuturFestival — Torino",
          es: "Kappa FuturFestival — Turín",
        },
        highlight: {
          en: "10 editions — 3 days — 100,000+ attendees",
          it: "10 edizioni — 3 giorni — oltre 100.000 partecipanti",
          es: "10 ediciones — 3 días — más de 100.000 asistentes",
        },
        context: {
          en: "A decade-long partnership with one of Europe's most respected electronic music festivals, ranked 7th best in the world.",
          it: "Una collaborazione decennale con uno dei festival di musica elettronica più rispettati d'Europa, votato 7° migliore al mondo.",
          es: "Una colaboración de una década con uno de los festivales de música electrónica más respetados de Europa, votado 7° mejor del mundo.",
        },
        details: {
          en: ["10 consecutive editions", "Scaled from 50K to 100K+ attendees", "3-day festival format", "Voted 7th best festival in the world"],
          it: ["10 edizioni consecutive", "Cresciuto da 50K a oltre 100K partecipanti", "Formato festival di 3 giorni", "Votato 7° miglior festival al mondo"],
          es: ["10 ediciones consecutivas", "Crecimiento de 50K a más de 100K asistentes", "Formato festival de 3 días", "Votado 7° mejor festival del mundo"],
        },
        role: {
          en: "End-to-end operational management across all editions. Scaled systems, teams, and processes alongside the festival's growth from a mid-size event to a world-class production.",
          it: "Gestione operativa end-to-end in tutte le edizioni. Scalato sistemi, team e processi insieme alla crescita del festival da evento medio a produzione di livello mondiale.",
          es: "Gestión operativa end-to-end en todas las ediciones. Escalado de sistemas, equipos y procesos junto al crecimiento del festival de evento mediano a producción de clase mundial.",
        },
        outcome: {
          en: "Sustained operational excellence across a decade of growth. Systems and processes evolved with the festival, maintaining reliability at every scale. Revenue and capacity scaled dramatically with zero degradation in operational quality.",
          it: "Eccellenza operativa sostenuta in un decennio di crescita. Sistemi e processi si sono evoluti con il festival, mantenendo affidabilità a ogni scala. Ricavi e capienza cresciuti in modo significativo senza alcun calo nella qualità operativa.",
          es: "Excelencia operativa sostenida a lo largo de una década de crecimiento. Sistemas y procesos evolucionaron con el festival, manteniendo fiabilidad a cada escala. Ingresos y capacidad crecieron significativamente sin degradación en la calidad operativa.",
        },
      },
      {
        number: "03",
        title: {
          en: "Monegros Desert Festival",
          it: "Monegros Desert Festival",
          es: "Monegros Desert Festival",
        },
        highlight: {
          en: "70,000 attendees — 22 hours",
          it: "70.000 partecipanti — 22 ore",
          es: "70.000 asistentes — 22 horas",
        },
        context: {
          en: "A 22-hour continuous event in a remote, high-complexity environment.",
          it: "Un evento continuo di 22 ore in un ambiente remoto e ad alta complessità.",
          es: "Un evento continuo de 22 horas en un entorno remoto y de alta complejidad.",
        },
        details: {
          en: ["70,000 attendees", "22-hour continuous event", "Distributed logistics across desert terrain"],
          it: ["70.000 partecipanti", "Evento continuo di 22 ore", "Logistica distribuita in ambiente desertico"],
          es: ["70.000 asistentes", "Evento continuo de 22 horas", "Logística distribuida en terreno desértico"],
        },
        role: {
          en: "End-to-end operational coordination across distributed stages, services, and vendor systems. Full control over logistics in an environment where infrastructure is temporary and conditions are extreme.",
          it: "Coordinamento operativo end-to-end tra palchi distribuiti, servizi e sistemi vendor. Controllo totale sulla logistica in un ambiente con infrastrutture temporanee e condizioni estreme.",
          es: "Coordinación operativa end-to-end entre escenarios distribuidos, servicios y sistemas de vendors. Control total sobre la logística en un entorno con infraestructura temporal y condiciones extremas.",
        },
        outcome: {
          en: "Operations remained stable throughout the full 22-hour cycle with no critical disruptions. Coordination held under extreme environmental and logistical pressure.",
          it: "Le operazioni sono rimaste stabili per l'intero ciclo di 22 ore senza interruzioni critiche. Il coordinamento ha tenuto sotto pressione ambientale e logistica estrema.",
          es: "Las operaciones se mantuvieron estables durante todo el ciclo de 22 horas sin interrupciones críticas. La coordinación se mantuvo bajo presión ambiental y logística extrema.",
        },
      },
      {
        number: "04",
        title: {
          en: "Sónar Festival Barcelona",
          it: "Sónar Festival Barcelona",
          es: "Sónar Festival Barcelona",
        },
        highlight: {
          en: "4 days — multi-venue — near 24h — 160,000 total",
          it: "4 giorni — multi-venue — quasi 24h — 160.000 totali",
          es: "4 días — multi-venue — casi 24h — 160.000 total",
        },
        context: {
          en: "Four days of near-continuous operations across multiple venues with 160,000 total attendees.",
          it: "Quattro giorni di operazioni quasi continue su più sedi con 160.000 partecipanti totali.",
          es: "Cuatro días de operaciones casi continuas en múltiples sedes con 160.000 asistentes totales.",
        },
        details: {
          en: ["4 days", "Multiple venues", "Near 24-hour operations", "160,000 attendees total"],
          it: ["4 giorni", "Sedi multiple", "Operazioni quasi 24 ore", "160.000 partecipanti totali"],
          es: ["4 días", "Múltiples sedes", "Operaciones casi 24 horas", "160.000 asistentes totales"],
        },
        role: {
          en: "Operational coordination across multiple venues and near-continuous scheduling. Systems management, crowd flow, and real-time issue resolution at scale.",
          it: "Coordinamento operativo su più sedi e programmazione quasi continua. Gestione sistemi, flussi e risoluzione problemi in tempo reale su larga scala.",
          es: "Coordinación operativa en múltiples sedes y programación casi continua. Gestión de sistemas, flujos y resolución de problemas en tiempo real a gran escala.",
        },
        outcome: {
          en: "Uninterrupted operations across four days and multiple venues. All critical systems maintained full performance. No operational disruptions despite scale and complexity.",
          it: "Operazioni ininterrotte per quattro giorni su più sedi. Tutti i sistemi critici hanno mantenuto le prestazioni. Nessuna interruzione operativa nonostante scala e complessità.",
          es: "Operaciones ininterrumpidas durante cuatro días en múltiples sedes. Todos los sistemas críticos mantuvieron rendimiento total. Sin interrupciones operativas a pesar de la escala y complejidad.",
        },
      },
      {
        number: "05",
        title: {
          en: "elrow Town Madrid",
          it: "elrow Town Madrid",
          es: "elrow Town Madrid",
        },
        highlight: {
          en: "33,000 attendees/day — 2 days",
          it: "33.000 partecipanti/giorno — 2 giorni",
          es: "33.000 asistentes/día — 2 días",
        },
        context: {
          en: "Two consecutive days of high-density operations with 33,000 attendees per day.",
          it: "Due giorni consecutivi di operazioni ad alta densità con 33.000 partecipanti al giorno.",
          es: "Dos días consecutivos de operaciones de alta densidad con 33.000 asistentes por día.",
        },
        details: {
          en: ["33,000 attendees per day", "2 consecutive days", "High-density festival environment"],
          it: ["33.000 partecipanti al giorno", "2 giorni consecutivi", "Ambiente festival ad alta densità"],
          es: ["33.000 asistentes por día", "2 días consecutivos", "Entorno de festival de alta densidad"],
        },
        role: {
          en: "Onsite operations lead. Real-time decision-making across high-density zones, vendor coordination, and crowd flow control under sustained pressure.",
          it: "Responsabile operazioni sul campo. Decisioni in tempo reale in zone ad alta densità, coordinamento vendor e controllo flussi sotto pressione continua.",
          es: "Responsable de operaciones en sitio. Toma de decisiones en tiempo real en zonas de alta densidad, coordinación de vendors y control de flujos bajo presión continua.",
        },
        outcome: {
          en: "Controlled, stable environment maintained across both days despite extreme density conditions. No escalations or critical incidents.",
          it: "Ambiente controllato e stabile mantenuto per entrambi i giorni nonostante le condizioni di densità estrema. Nessuna escalation o incidenti critici.",
          es: "Entorno controlado y estable mantenido durante ambos días a pesar de las condiciones de densidad extrema. Sin escalaciones ni incidentes críticos.",
        },
      },
      {
        number: "06",
        title: {
          en: "MotoGP Catalunya — Hospitality & F&B Area",
          it: "MotoGP Catalunya — Area Hospitality & F&B",
          es: "MotoGP Catalunya — Área Hospitality y F&B",
        },
        highlight: {
          en: "High-volume F&B — premium hospitality",
          it: "F&B ad alto volume — hospitality premium",
          es: "F&B de alto volumen — hospitality premium",
        },
        context: {
          en: "Premium hospitality operations under high-volume conditions at the Montmeló circuit.",
          it: "Operazioni hospitality premium in condizioni di alto volume al circuito di Montmeló.",
          es: "Operaciones de hospitality premium en condiciones de alto volumen en el circuito de Montmeló.",
        },
        details: {
          en: ["High-volume F&B operations", "Premium hospitality environment", "Montmeló circuit"],
          it: ["Operazioni F&B ad alto volume", "Ambiente hospitality premium", "Circuito di Montmeló"],
          es: ["Operaciones F&B de alto volumen", "Entorno hospitality premium", "Circuito de Montmeló"],
        },
        role: {
          en: "Operational management of hospitality and food & beverage areas. Payment system deployment and vendor coordination under premium service expectations.",
          it: "Gestione operativa delle aree hospitality e food & beverage. Implementazione sistemi di pagamento e coordinamento vendor con standard di servizio premium.",
          es: "Gestión operativa de áreas de hospitality y food & beverage. Implementación de sistemas de pago y coordinación de vendors con estándares de servicio premium.",
        },
        outcome: {
          en: "Premium service standards maintained under high-volume conditions. Payment and service flow operated without interruption.",
          it: "Standard di servizio premium mantenuti in condizioni di alto volume. Flussi di pagamento e servizio senza interruzioni.",
          es: "Estándares de servicio premium mantenidos en condiciones de alto volumen. Flujos de pago y servicio sin interrupciones.",
        },
      },
      {
        number: "07",
        title: {
          en: "Stadio Olimpico — Football Season",
          it: "Stadio Olimpico — Stagione calcistica",
          es: "Stadio Olimpico — Temporada de fútbol",
        },
        highlight: {
          en: "Full season — recurring operations",
          it: "Intera stagione — operazioni ricorrenti",
          es: "Temporada completa — operaciones recurrentes",
        },
        context: {
          en: "Recurring high-volume operations across an entire football season.",
          it: "Operazioni ricorrenti ad alto volume per un'intera stagione calcistica.",
          es: "Operaciones recurrentes de alto volumen durante una temporada de fútbol completa.",
        },
        details: {
          en: ["Recurring high-volume operations", "Payment system implementation", "F&B vendor integration"],
          it: ["Operazioni ricorrenti ad alto volume", "Implementazione sistema di pagamento", "Integrazione vendor F&B"],
          es: ["Operaciones recurrentes de alto volumen", "Implementación de sistema de pago", "Integración de vendors F&B"],
        },
        role: {
          en: "Implementation and management of cashless payment systems integrated with F&B vendor operations. Built a repeatable operational framework for match days.",
          it: "Implementazione e gestione di sistemi di pagamento cashless integrati con le operazioni vendor F&B. Creazione di un framework operativo ripetibile per le giornate di gara.",
          es: "Implementación y gestión de sistemas de pago cashless integrados con operaciones de vendors F&B. Creación de un framework operativo repetible para los días de partido.",
        },
        outcome: {
          en: "Reliable, consistent operational framework delivering stable results across the full season. Systems held under recurring high-pressure conditions.",
          it: "Framework operativo affidabile e consistente con risultati stabili per tutta la stagione. I sistemi hanno retto sotto condizioni di alta pressione ricorrenti.",
          es: "Framework operativo fiable y consistente con resultados estables durante toda la temporada. Los sistemas se mantuvieron bajo condiciones de alta presión recurrentes.",
        },
      },
    ],
  },

  // References
  references: {
    label: { en: "Social Proof", it: "Referenze", es: "Referencias" },
    title: { en: "References", it: "Referenze", es: "Referencias" },
    items: [
      {
        quote: {
          en: "Andreas has been a consistent presence in large-scale event operations at Kappa FuturFestival since 2015. His reliability, technical competence, and ability to operate effectively in high-pressure environments make a tangible difference on the ground.",
          it: "Andreas è una presenza costante nelle operazioni di grande scala di Kappa FuturFestival dal 2015. La sua affidabilità, competenza tecnica e capacità di operare efficacemente in contesti ad alta pressione fanno concretamente la differenza sul campo.",
          es: "Andreas ha sido una presencia constante en las operaciones de grandes eventos de Kappa FuturFestival desde 2015. Su fiabilidad, competencia técnica y capacidad para operar eficazmente en entornos de alta presión marcan una diferencia tangible sobre el terreno.",
        },
        name: "Gian Luca Brignone",
        role: { en: "Co Founder, Kappa Futur Festival", it: "Co Founder, Kappa Futur Festival", es: "Co Founder, Kappa Futur Festival" },
      },
      {
        quote: {
          en: "Andreas is one of those rare operators who understands both the system and the room. At elrow, operational complexity is part of the concept — and he handles it without making it anyone else's problem. I trust him on the ground.",
          it: "Andreas è uno di quegli operatori rari che comprendono sia il sistema che l'ambiente. In elrow, la complessità operativa fa parte del concept — e lui la gestisce senza farne il problema di nessun altro. Mi fido di lui sul campo.",
          es: "Andreas es uno de esos operadores excepcionales que entienden tanto el sistema como la sala. En elrow, la complejidad operativa es parte del concepto — y él la maneja sin convertirla en el problema de nadie más. Confío en él sobre el terreno.",
        },
        name: "Juan Arnau",
        role: { en: "Founder, elrow", it: "Founder, elrow", es: "Founder, elrow" },
      },
      {
        quote: {
          en: "Andreas has always demonstrated great operational capability, managing tasks with organisation, speed, and attention to detail during Monegros Desert Festival operations. He stood out for his reliability and commitment: when something was in his hands, you knew it would be resolved correctly and on time, even during the most demanding moments.",
          it: "Andreas ha sempre dimostrato una grande capacità operativa, gestendo le attività con organizzazione, rapidità e attenzione al dettaglio durante le operazioni del Monegros Desert Festival. Si è distinto per la sua affidabilità e il suo impegno: quando qualcosa era nelle sue mani, sapevi che sarebbe stato risolto correttamente e in tempo, anche nei momenti di maggior carico di lavoro.",
          es: "Andreas ha siempre demostrado una gran capacidad operativa, gestionando las tareas con organización, rapidez y atención al detalle durante las operaciones del Monegros Desert Festival. Destacó por su fiabilidad y compromiso: cuando algo quedaba en sus manos, sabía que se iba a resolver correctamente y a tiempo, incluso en momentos de mayor carga de trabajo.",
        },
        name: "Joaquín Cabos",
        role: { en: "Director, Monegros Desert Festival", it: "Director, Monegros Desert Festival", es: "Director, Monegros Desert Festival" },
      },
    ],
  },

  // When Involved
  whenInvolved: {
    label: { en: "When to call", it: "Quando chiamarmi", es: "Cuándo llamarme" },
    title: { en: "When I get involved", it: "Quando intervengo", es: "Cuándo intervengo" },
    triggers: {
      en: [
        "When an event scales beyond the original plan",
        "When operational complexity increases and control is at risk",
        "When systems — payments, access, flows — must work seamlessly under pressure",
        "When issues arise during execution and decisions can't wait",
        "When control needs to be re-established quickly",
      ],
      it: [
        "Quando un evento supera il piano originale",
        "Quando la complessità operativa aumenta e il controllo è a rischio",
        "Quando i sistemi — pagamenti, accessi, flussi — devono funzionare sotto pressione",
        "Quando emergono problemi durante l'esecuzione e le decisioni non possono aspettare",
        "Quando il controllo deve essere ristabilito rapidamente",
      ],
      es: [
        "Cuando un evento supera el plan original",
        "Cuando la complejidad operativa aumenta y el control está en riesgo",
        "Cuando los sistemas — pagos, accesos, flujos — deben funcionar bajo presión",
        "Cuando surgen problemas durante la ejecución y las decisiones no pueden esperar",
        "Cuando el control necesita restablecerse rápidamente",
      ],
    },
  },

  // About Section (homepage)
  aboutSection: {
    label: { en: "About", it: "Chi sono", es: "Sobre mí" },
    title: { en: "Andreas Colucci", it: "Andreas Colucci", es: "Andreas Colucci" },
    intro: {
      en: "I focus on execution, not theory.",
      it: "Mi concentro sull'esecuzione, non sulla teoria.",
      es: "Me concentro en la ejecución, no en la teoría.",
    },
    body1: {
      en: "Years of work in high-pressure, large-scale event environments — from festivals to stadiums, from 8,000 to 160,000 people. The common thread is making decisions under pressure, in real time, when the cost of inaction is higher than the cost of being wrong.",
      it: "Anni di lavoro in ambienti ad alta pressione ed eventi su larga scala — dai festival agli stadi, da 8.000 a 160.000 persone. Il filo conduttore è prendere decisioni sotto pressione, in tempo reale, quando il costo dell'inazione è più alto del costo di sbagliare.",
      es: "Años de trabajo en entornos de alta presión y eventos a gran escala — de festivales a estadios, de 8.000 a 160.000 personas. El hilo conductor es tomar decisiones bajo presión, en tiempo real, cuando el coste de no actuar es mayor que el coste de equivocarse.",
    },
    body2: {
      en: "I anticipate failures before they happen and build operational systems that hold when everything else is moving. The work is not about planning on paper — it's about control on the ground.",
      it: "Anticipo i problemi prima che si verifichino e costruisco sistemi operativi che reggono quando tutto il resto si muove. Il lavoro non riguarda la pianificazione su carta — riguarda il controllo sul campo.",
      es: "Anticipo los problemas antes de que ocurran y construyo sistemas operativos que se mantienen cuando todo lo demás se mueve. El trabajo no es planificar sobre el papel — es controlar sobre el terreno.",
    },
  },

  // Availability
  availability: {
    label: { en: "Availability", it: "Disponibilità", es: "Disponibilidad" },
    title: {
      en: "Available for selected projects in 2026",
      it: "Disponibile per progetti selezionati nel 2026",
      es: "Disponible para proyectos seleccionados en 2026",
    },
    subtitle: { en: "Limited availability", it: "Disponibilità limitata", es: "Disponibilidad limitada" },
  },

  // Work With Me
  workWithMe: {
    label: { en: "Engagement", it: "Collaborazione", es: "Colaboración" },
    title: { en: "Work with me", it: "Lavoriamo insieme", es: "Trabajemos juntos" },
    intro: {
      en: "I typically get involved in projects where:",
      it: "Di solito intervengo in progetti dove:",
      es: "Normalmente intervengo en proyectos donde:",
    },
    engagements: {
      en: ["Scale is high", "Operations are critical", "Execution cannot fail"],
      it: ["La scala è elevata", "Le operazioni sono critiche", "L'esecuzione non può fallire"],
      es: ["La escala es alta", "Las operaciones son críticas", "La ejecución no puede fallar"],
    },
    body: {
      en: "If you're facing a complex setup or want a second opinion on your operations, feel free to reach out.",
      it: "Se stai affrontando un setup complesso o vuoi un secondo parere sulle tue operazioni, contattami.",
      es: "Si estás enfrentando un setup complejo o quieres una segunda opinión sobre tus operaciones, contáctame.",
    },
    cta: { en: "Start a conversation", it: "Inizia una conversazione", es: "Iniciar una conversación" },
  },

  // Contact Section
  contactSection: {
    label: { en: "Contact", it: "Contatto", es: "Contacto" },
    title: { en: "Let's talk", it: "Parliamone", es: "Hablemos" },
    description: {
      en: "If you're working on an event and want to make sure operations stay under control, I'm happy to have a quick conversation.",
      it: "Se stai lavorando a un evento e vuoi assicurarti che le operazioni restino sotto controllo, sono disponibile per una conversazione.",
      es: "Si estás trabajando en un evento y quieres asegurarte de que las operaciones se mantengan bajo control, estoy disponible para una conversación.",
    },
    email_label: { en: "Email", it: "Email", es: "Email" },
    linkedin_label: { en: "LinkedIn", it: "LinkedIn", es: "LinkedIn" },
    linkedin_text: { en: "View Profile", it: "Vedi profilo", es: "Ver perfil" },
  },

  // Contact Form
  contactForm: {
    intro: { en: "Tell me about your event. I'll get back to you within 48 hours.", it: "Raccontami del tuo evento. Ti rispondo entro 48 ore.", es: "Cuéntame sobre tu evento. Te respondo en menos de 48 horas." },
    name_label: { en: "Name", it: "Nome", es: "Nombre" },
    name_placeholder: { en: "Your name", it: "Il tuo nome", es: "Tu nombre" },
    email_label: { en: "Email", it: "Email", es: "Email" },
    email_placeholder: { en: "your@email.com", it: "tua@email.com", es: "tu@email.com" },
    message_label: { en: "Message", it: "Messaggio", es: "Mensaje" },
    message_placeholder: {
      en: "Tell me about your event...",
      it: "Raccontami del tuo evento...",
      es: "Cuéntame sobre tu evento...",
    },
    submit: { en: "Send Message", it: "Invia messaggio", es: "Enviar mensaje" },
    sending: { en: "Sending...", it: "Invio in corso...", es: "Enviando..." },
    toast_title: { en: "Message sent.", it: "Messaggio inviato.", es: "Mensaje enviado." },
    toast_description: {
      en: "I'll get back to you shortly.",
      it: "Ti risponderò a breve.",
      es: "Te responderé pronto.",
    },
  },

  // Footer
  footer: {
    navigation: { en: "Navigation", it: "Navigazione", es: "Navegación" },
    contact: { en: "Contact", it: "Contatto", es: "Contacto" },
    connect: { en: "Connect", it: "Seguimi", es: "Sigueme" },
    work_with_me: { en: "Work\nwith me", it: "Lavoriamo\ninsieme", es: "Trabajemos\njuntos" },
    copyright: { en: "All rights reserved.", it: "Tutti i diritti riservati.", es: "Todos los derechos reservados." },
    tagline: { en: "Senior Event Operations", it: "Senior Event Operations", es: "Senior Event Operations" },
  },

  // About Page
  aboutPage: {
    title: { en: "About", it: "Chi sono", es: "Sobre mí" },
    kicker: { en: "Event Operations Consultant", it: "Consulente Operativo Eventi", es: "Consultor de Operaciones de Eventos" },
    specs_label: { en: "Profile", it: "Profilo", es: "Perfil" },
    specs: [
      { label: { en: "Role", it: "Ruolo", es: "Rol" }, value: { en: "Event Operations Consultant", it: "Consulente operativo eventi", es: "Consultor de operaciones" } },
      { label: { en: "Experience", it: "Esperienza", es: "Experiencia" }, value: { en: "10+ years", it: "10+ anni", es: "10+ años" } },
      { label: { en: "Events", it: "Eventi", es: "Eventos" }, value: { en: "300+", it: "300+", es: "300+" } },
      { label: { en: "Countries", it: "Paesi", es: "Países" }, value: { en: "20+", it: "20+", es: "20+" } },
      { label: { en: "Peak / event", it: "Picco / evento", es: "Pico / evento" }, value: { en: "110,000", it: "110.000", es: "110.000" } },
      { label: { en: "Education", it: "Formazione", es: "Formación" }, value: { en: "IE University, Madrid", it: "IE University, Madrid", es: "IE University, Madrid" } },
      { label: { en: "Languages", it: "Lingue", es: "Idiomas" }, value: { en: "EN · IT · ES", it: "EN · IT · ES", es: "EN · IT · ES" } },
    ],
    intro: {
      en: "Years of work in high-pressure, large-scale event environments — from festivals to stadiums, from 8,000 to 160,000 people.",
      it: "Anni di lavoro in ambienti ad alta pressione ed eventi su larga scala — dai festival agli stadi, da 8.000 a 160.000 persone.",
      es: "Años de trabajo en entornos de alta presión y eventos a gran escala — de festivales a estadios, de 8.000 a 160.000 personas.",
    },
    bodyParagraphs: {
      en: [
        "I didn't choose this work. I stumbled into it the way most things worth doing happen — by accident, at a festival.",
        "I grew up in Rome, spent years organizing events there, then started crossing Europe as an attendee — festival to festival, country to country. That's when I first encountered cashless payment systems. I was a customer. I didn't understand the technology. I just knew it felt different, and it stuck with me.",
        "I kept the wristband.",
        "For months I'd pull it out whenever I could and explain to whoever would listen why this was going to change how large-scale events worked. Then one day, working as a hospitality intern at Kappa FuturFestival — managing artists and drivers — I found myself making that pitch again. The two people listening turned out to be the ones who had introduced the technology to Europe.",
        "That conversation changed everything. I never left that world.",
        "Since then I've worked across 300+ events in 20+ countries — festivals, stadiums, motorsport, multi-venue formats. Italian, English, and Spanish. A BBA from IE University in Madrid. Years in environments where theory ends and execution begins.",
        "The details change. The pressure doesn't.",
      ],
      it: [
        "Non ho scelto questo lavoro. Ci sono finito dentro come succede con le cose che valgono — per caso, a un festival.",
        "Sono cresciuto a Roma, ho passato anni a organizzare eventi lì, poi ho cominciato a girare l'Europa da partecipante — festival dopo festival, paese dopo paese. È stato allora che ho incontrato per la prima volta i sistemi di pagamento cashless. Ero un cliente. Non capivo la tecnologia. Sapevo solo che era diversa, e mi è rimasta in testa.",
        "Ho tenuto il braccialetto.",
        "Per mesi lo tiravo fuori ogni volta che potevo e spiegavo a chiunque volesse ascoltare perché quella tecnologia avrebbe cambiato il modo in cui funzionano gli eventi su larga scala. Poi un giorno, mentre lavoravo come stagista nell'hospitality al Kappa FuturFestival — gestendo artisti e autisti — mi sono ritrovato a fare lo stesso discorso. Le due persone che ascoltavano erano quelle che avevano introdotto la tecnologia in Europa.",
        "Quella conversazione ha cambiato tutto. Non ho più lasciato quel mondo.",
        "Da allora ho lavorato in oltre 300 eventi in più di 20 paesi — festival, stadi, motorsport, format multi-venue. Italiano, inglese e spagnolo. Una laurea BBA alla IE University di Madrid. Anni in ambienti dove la teoria finisce e l'esecuzione comincia.",
        "I dettagli cambiano. La pressione no.",
      ],
      es: [
        "No elegí este trabajo. Me topé con él como pasan las cosas que valen la pena — por accidente, en un festival.",
        "Crecí en Roma, pasé años organizando eventos allí, y luego empecé a cruzar Europa como asistente — de festival en festival, de país en país. Fue entonces cuando encontré por primera vez los sistemas de pago cashless. Era un cliente. No entendía la tecnología. Solo sabía que era diferente, y se me quedó grabada.",
        "Me quedé con la pulsera.",
        "Durante meses la sacaba cada vez que podía y le explicaba a quien quisiera escuchar por qué esa tecnología iba a cambiar cómo funcionan los eventos a gran escala. Un día, trabajando como becario de hospitalidad en Kappa FuturFestival — gestionando artistas y conductores — me encontré haciendo el mismo discurso. Las dos personas que escuchaban resultaron ser quienes habían introducido la tecnología en Europa.",
        "Esa conversación lo cambió todo. Nunca dejé ese mundo.",
        "Desde entonces he trabajado en más de 300 eventos en más de 20 países — festivales, estadios, motor, formatos multi-venue. Italiano, inglés y español. Un BBA de IE University en Madrid. Años en entornos donde la teoría termina y la ejecución empieza.",
        "Los detalles cambian. La presión no.",
      ],
    },
    principles_label: { en: "Principles", it: "Principi", es: "Principios" },
    principles_title: { en: "How I operate", it: "Come opero", es: "Cómo opero" },
    principles: {
      en: [
        { title: "Execution over theory", text: "Plans are only as good as their execution.\nI focus on what happens on the ground." },
        { title: "Decisions under pressure", text: "When things change — and they always do — I make clear decisions quickly." },
        { title: "Anticipation", text: "The best problem is the one that never happens. I identify risks before they become failures." },
        { title: "Systems that hold", text: "I build operational frameworks designed to perform reliably at scale." },
      ],
      it: [
        { title: "Esecuzione, non teoria", text: "I piani valgono quanto la loro esecuzione. Mi concentro su quello che succede sul campo." },
        { title: "Decisioni sotto pressione", text: "Quando le cose cambiano — e cambiano sempre — prendo decisioni chiare e rapide." },
        { title: "Anticipazione", text: "Il problema migliore è quello che non si verifica mai. Identifico i rischi prima che diventino guasti." },
        { title: "Sistemi che reggono", text: "Costruisco framework operativi progettati per funzionare in modo affidabile su larga scala." },
      ],
      es: [
        { title: "Ejecución, no teoría", text: "Los planes solo valen tanto como su ejecución. Me concentro en lo que pasa sobre el terreno." },
        { title: "Decisiones bajo presión", text: "Cuando las cosas cambian — y siempre cambian — tomo decisiones claras y rápidas." },
        { title: "Anticipación", text: "El mejor problema es el que nunca ocurre. Identifico riesgos antes de que se conviertan en fallos." },
        { title: "Sistemas que se mantienen", text: "Construyo frameworks operativos diseñados para funcionar de forma fiable a escala." },
      ],
    },
  },

  // Work Page
  workPage: {
    title: { en: "Selected Work", it: "Lavori selezionati", es: "Trabajos seleccionados" },
    kicker: { en: "Event Operations Case Studies", it: "Case Study di Event Operations", es: "Casos de Event Operations" },
    subtitle: {
      en: "Large-scale events where operational control was critical. No fake metrics — just reliability, execution, and results.",
      it: "Eventi su larga scala dove il controllo operativo era critico. Nessuna metrica inventata — solo affidabilità, esecuzione e risultati.",
      es: "Eventos a gran escala donde el control operativo fue crítico. Sin métricas inventadas — solo fiabilidad, ejecución y resultados.",
    },
  },

  // Contact Page
  contactPage: {
    title: { en: "Contact", it: "Contatto", es: "Contacto" },
    kicker: { en: "Event Operations Consulting", it: "Consulenza Operativa Eventi", es: "Consultoría de Operaciones de Eventos" },
    subtitle: {
      en: "For high-complexity events and critical operational environments. Let's discuss your project.",
      it: "Per eventi ad alta complessità e ambienti operativi critici. Parliamo del tuo progetto.",
      es: "Para eventos de alta complejidad y entornos operativos críticos. Hablemos de tu proyecto.",
    },
    availability_label: { en: "Availability", it: "Disponibilità", es: "Disponibilidad" },
    availability_text: {
      en: "Selected projects in 2026",
      it: "Progetti selezionati nel 2026",
      es: "Proyectos seleccionados en 2026",
    },
    availability_note: {
      en: "High-complexity events / critical environments",
      it: "Eventi ad alta complessità / ambienti critici",
      es: "Eventos de alta complejidad / entornos críticos",
    },
  },

  // FAQ Page
  faqPage: {
    title: { en: "FAQ", it: "FAQ", es: "FAQ" },
    kicker: { en: "Event Operations Consultant", it: "Consulente Operativo Eventi", es: "Consultor de Operaciones de Eventos" },
    subtitle: {
      en: "Answers about Andreas Colucci and his work in event operations.",
      it: "Risposte su Andreas Colucci e il suo lavoro nelle operazioni per eventi.",
      es: "Respuestas sobre Andreas Colucci y su trabajo en operaciones de eventos.",
    },
    items: [
      {
        q: { en: "Who is Andreas Colucci?", it: "Chi è Andreas Colucci?", es: "¿Quién es Andreas Colucci?" },
        a: {
          en: "Andreas Colucci is an event operations consultant specializing in large-scale, high-pressure events such as music festivals and stadium shows. Over more than 10 years he has worked on 300+ events across 20+ countries, leading on-site operations, cashless systems, and access control.",
          it: "Andreas Colucci è un consulente operativo per eventi specializzato in grandi eventi ad alta complessità, come festival musicali e spettacoli negli stadi. In oltre 10 anni ha lavorato a più di 300 eventi in oltre 20 paesi, gestendo operazioni on-site, sistemi cashless e controllo accessi.",
          es: "Andreas Colucci es un consultor de operaciones de eventos especializado en eventos de gran escala y alta presión, como festivales de música y espectáculos en estadios. En más de 10 años ha trabajado en más de 300 eventos en más de 20 países, dirigiendo operaciones in situ, sistemas cashless y control de accesos.",
        },
      },
      {
        q: { en: "What does an event operations consultant do?", it: "Cosa fa un consulente operativo per eventi?", es: "¿Qué hace un consultor de operaciones de eventos?" },
        a: {
          en: "An event operations consultant plans and runs the operational backbone of an event: cashless payments, access control and ticketing, staff coordination, and real-time problem solving on site. Andreas Colucci focuses on the most complex, high-pressure environments where execution cannot fail.",
          it: "Un consulente operativo per eventi pianifica e gestisce la struttura operativa di un evento: pagamenti cashless, controllo accessi e ticketing, coordinamento dello staff e problem solving in tempo reale sul campo. Andreas Colucci si concentra sugli ambienti più complessi e ad alta pressione, dove l'esecuzione non può fallire.",
          es: "Un consultor de operaciones de eventos planifica y gestiona la estructura operativa de un evento: pagos cashless, control de accesos y ticketing, coordinación del personal y resolución de problemas en tiempo real sobre el terreno. Andreas Colucci se centra en los entornos más complejos y de alta presión, donde la ejecución no puede fallar.",
        },
      },
      {
        q: { en: "What events has Andreas Colucci worked on?", it: "A quali eventi ha lavorato Andreas Colucci?", es: "¿En qué eventos ha trabajado Andreas Colucci?" },
        a: {
          en: "Andreas Colucci has worked on major international events including Sónar, MotoGP, Campovolo, Kappa FuturFestival, Monegros Desert Festival, elrow, and Stadio Olimpico — festivals and stadium events with audiences of over 110,000 attendees.",
          it: "Andreas Colucci ha lavorato a grandi eventi internazionali tra cui Sónar, MotoGP, Campovolo, Kappa FuturFestival, Monegros Desert Festival, elrow e Stadio Olimpico — festival ed eventi negli stadi con pubblici di oltre 110.000 persone.",
          es: "Andreas Colucci ha trabajado en grandes eventos internacionales como Sónar, MotoGP, Campovolo, Kappa FuturFestival, Monegros Desert Festival, elrow y Stadio Olimpico — festivales y eventos en estadios con públicos de más de 110.000 personas.",
        },
      },
      {
        q: { en: "What does Andreas Colucci specialize in?", it: "In cosa è specializzato Andreas Colucci?", es: "¿En qué está especializado Andreas Colucci?" },
        a: {
          en: "He specializes in event operations for large-scale environments: cashless payment systems, access control and RFID technology, ticketing, crowd flow, and real-time operations management.",
          it: "È specializzato in operazioni per eventi su larga scala: sistemi di pagamento cashless, controllo accessi e tecnologia RFID, ticketing, gestione dei flussi di pubblico e operazioni in tempo reale.",
          es: "Está especializado en operaciones para eventos a gran escala: sistemas de pago cashless, control de accesos y tecnología RFID, ticketing, gestión del flujo de público y operaciones en tiempo real.",
        },
      },
      {
        q: { en: "What is Andreas Colucci's background?", it: "Qual è il percorso di Andreas Colucci?", es: "¿Cuál es la trayectoria de Andreas Colucci?" },
        a: {
          en: "Andreas Colucci holds a BBA from IE University in Madrid and has more than 10 years of experience in event operations across festivals and stadiums in 20+ countries.",
          it: "Andreas Colucci ha conseguito un BBA alla IE University di Madrid e ha oltre 10 anni di esperienza nelle operazioni per eventi, tra festival e stadi, in oltre 20 paesi.",
          es: "Andreas Colucci tiene un BBA por la IE University de Madrid y cuenta con más de 10 años de experiencia en operaciones de eventos, en festivales y estadios, en más de 20 países.",
        },
      },
      {
        q: { en: "What languages does Andreas Colucci work in?", it: "In che lingue lavora Andreas Colucci?", es: "¿En qué idiomas trabaja Andreas Colucci?" },
        a: {
          en: "Andreas Colucci works internationally and operates in English, Italian, and Spanish.",
          it: "Andreas Colucci lavora a livello internazionale e opera in inglese, italiano e spagnolo.",
          es: "Andreas Colucci trabaja a nivel internacional y opera en inglés, italiano y español.",
        },
      },
      {
        q: { en: "How can I contact Andreas Colucci?", it: "Come posso contattare Andreas Colucci?", es: "¿Cómo puedo contactar con Andreas Colucci?" },
        a: {
          en: "You can reach Andreas Colucci by email at hello@andreascolucci.com, via LinkedIn, or through the contact page on this site.",
          it: "Puoi contattare Andreas Colucci via email a hello@andreascolucci.com, su LinkedIn o tramite la pagina contatti di questo sito.",
          es: "Puedes contactar con Andreas Colucci por email en hello@andreascolucci.com, en LinkedIn o a través de la página de contacto de este sitio.",
        },
      },
      {
        q: { en: "Is Andreas Colucci available for new projects?", it: "Andreas Colucci è disponibile per nuovi progetti?", es: "¿Está Andreas Colucci disponible para nuevos proyectos?" },
        a: {
          en: "Andreas Colucci is available for selected projects and open to new conversations about complex events that need operational expertise.",
          it: "Andreas Colucci è disponibile per progetti selezionati ed è aperto a nuove conversazioni su eventi complessi che richiedono competenza operativa.",
          es: "Andreas Colucci está disponible para proyectos seleccionados y abierto a nuevas conversaciones sobre eventos complejos que requieren experiencia operativa.",
        },
      },
    ],
  },

  // Case Study Card labels
  caseStudyCard: {
    context: { en: "Context", it: "Contesto", es: "Contexto" },
    role: { en: "Role", it: "Ruolo", es: "Rol" },
    outcome: { en: "Outcome", it: "Risultato", es: "Resultado" },
  },
} as const;

export type TranslationKey = keyof typeof translations;
