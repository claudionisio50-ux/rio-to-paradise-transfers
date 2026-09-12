import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "es";

export const WHATSAPP_URL = "https://wa.me/FHWA7DGD7ZQFN1";

export const dict = {
  pt: {
    navDestinos: "Destinos",
    navFotos: "Fotos da viagem",
    navDepoimentos: "Depoimentos",
    heroTitle: "Do Rio de Janeiro para o paraíso",
    heroSubtitle: "com conforto, segurança e pontualidade.",
    heroLine: "Búzios · Arraial do Cabo · Cabo Frio · Angra dos Reis · Paraty",
    heroCta1: "Agendar pelo WhatsApp",
    heroCta2: "Ver Destinos",
    heroBadge: "+40 motoristas profissionais | Carros premium e vans",
    destinosTitle: "Para onde você quer ir?",
    destinosSub: "Translados privativos saindo do Rio de Janeiro para os destinos mais bonitos do litoral.",
    requestTransfer: "Solicitar Transfer",
    aeroportos: "Aeroportos do Rio",
    whyTitle: "Por que nos escolher",
    why: [
      { t: "+40 Motoristas Profissionais", d: "Equipe própria, credenciada e treinada para receber turistas." },
      { t: "Frota Premium e Vans", d: "Carros executivos e vans com ar-condicionado e espaço para bagagens." },
      { t: "Atendimento em PT e ES", d: "Falamos português e espanhol antes, durante e depois da viagem." },
      { t: "Pontualidade Garantida", d: "Monitoramos seu voo e esperamos você no desembarque." },
    ],
    testimonialsTitle: "O que dizem nossos passageiros",
    testimonials: [
      { n: "Mariana Alves", c: "São Paulo, Brasil", q: "Motorista pontual, carro impecável e viagem super tranquila até Búzios. Recomendo de olhos fechados." },
      { n: "Rafael Monteiro", c: "Belo Horizonte, Brasil", q: "Pegaram a gente no Galeão com placa e tudo. Chegamos em Arraial do Cabo com muito conforto e segurança." },
      { n: "Lucía Fernández", c: "Buenos Aires, Argentina", q: "Todo perfecto: nos hablaron en español, la van era amplia y llegamos a Cabo Frio muy seguros." },
      { n: "Diego Ramírez", c: "Rosario, Argentina", q: "Puntualidad total y un conductor muy amable. El viaje a Angra dos Reis fue cómodo y sin estrés." },
    ],
    instaTitle: "Conheça nossas viagens",
    instaSub: "Veja destinos, veículos e momentos reais dos nossos transfers.",
    instaBtn: "Ver mais no Instagram",
    viewPost: "Ver publicação",
    ctaTitle: "Pronto para sua próxima aventura?",
    ctaBtn: "Agendar agora pelo WhatsApp",
    footerAbout: "Translados turísticos privativos saindo do Rio de Janeiro para a Região dos Lagos, Costa Verde e aeroportos.",
    footerDestinos: "Destinos",
    footerLangs: "Idiomas",
    footerSocial: "Redes sociais",
    langsList: ["Português", "Espanhol"],
    rights: "Todos os direitos reservados.",
    waFloat: "Falar no WhatsApp",
    msgIntro: "Olá! Quero solicitar um transfer.",
    msgOrigin: "Origem",
    msgDest: "Destino",
    msgVehicle: "Veículo",
    msgPax: "Passageiros",
    msgDate: "Data",
    msgTime: "Horário",
    msgTotal: "Valor estimado",
  },
  es: {
    navDestinos: "Destinos",
    navFotos: "Fotos del viaje",
    navDepoimentos: "Testimonios",
    heroTitle: "De Río de Janeiro al paraíso",
    heroSubtitle: "con comodidad, seguridad y puntualidad.",
    heroLine: "Búzios · Arraial do Cabo · Cabo Frio · Angra dos Reis · Paraty",
    heroCta1: "Reservar por WhatsApp",
    heroCta2: "Ver Destinos",
    heroBadge: "+40 conductores profesionales | Autos premium y vans",
    destinosTitle: "¿A dónde querés ir?",
    destinosSub: "Traslados privados desde Río de Janeiro hacia los destinos más lindos de la costa.",
    requestTransfer: "Solicitar Traslado",
    aeroportos: "Aeropuertos de Río",
    whyTitle: "Por qué elegirnos",
    why: [
      { t: "+40 Conductores Profesionales", d: "Equipo propio, habilitado y capacitado para recibir turistas." },
      { t: "Flota Premium y Vans", d: "Autos ejecutivos y vans con aire acondicionado y espacio para equipaje." },
      { t: "Atención en PT y ES", d: "Hablamos portugués y español antes, durante y después del viaje." },
      { t: "Puntualidad Garantizada", d: "Monitoreamos tu vuelo y te esperamos en el arribo." },
    ],
    testimonialsTitle: "Lo que dicen nuestros pasajeros",
    testimonials: [
      { n: "Mariana Alves", c: "São Paulo, Brasil", q: "Conductor puntual, auto impecable y un viaje muy tranquilo hasta Búzios. Lo recomiendo totalmente." },
      { n: "Rafael Monteiro", c: "Belo Horizonte, Brasil", q: "Nos recibieron en Galeão con cartel y todo. Llegamos a Arraial do Cabo con mucha comodidad y seguridad." },
      { n: "Lucía Fernández", c: "Buenos Aires, Argentina", q: "Todo perfecto: nos hablaron en español, la van era amplia y llegamos a Cabo Frio muy seguros." },
      { n: "Diego Ramírez", c: "Rosario, Argentina", q: "Puntualidad total y un conductor muy amable. El viaje a Angra dos Reis fue cómodo y sin estrés." },
    ],
    instaTitle: "Conocé nuestros viajes",
    instaSub: "Mirá destinos, vehículos y momentos reales de nuestros traslados.",
    instaBtn: "Ver más en Instagram",
    viewPost: "Ver publicación",
    ctaTitle: "¿Listo para tu próxima aventura?",
    ctaBtn: "Reservar ahora por WhatsApp",
    footerAbout: "Traslados turísticos privados desde Río de Janeiro hacia la Región de los Lagos, Costa Verde y aeropuertos.",
    footerDestinos: "Destinos",
    footerLangs: "Idiomas",
    footerSocial: "Redes sociales",
    langsList: ["Portugués", "Español"],
    rights: "Todos los derechos reservados.",
    waFloat: "Hablar por WhatsApp",
    msgIntro: "¡Hola! Quiero solicitar un traslado.",
    msgOrigin: "Origen",
    msgDest: "Destino",
    msgVehicle: "Vehículo",
    msgPax: "Pasajeros",
    msgDate: "Fecha",
    msgTime: "Horario",
    msgTotal: "Valor estimado",
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["pt"] };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as (typeof dict)["pt"] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
