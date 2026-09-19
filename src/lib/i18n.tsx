import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "es";

export const WHATSAPP_URL = "https://wa.me/5522981216927";

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
    destinationCards: [
      {
        name: "Búzios",
        description: "Praias encantadoras, charme e conforto em um transfer privativo.",
        alt: "Vista panorâmica de praia entre formações rochosas, vegetação e mar azul em Búzios",
      },
      {
        name: "Arraial do Cabo",
        description: "Águas azul-turquesa e praias inesquecíveis em um trajeto confortável.",
        alt: "Praia de água azul-turquesa com barcos em Arraial do Cabo",
      },
      {
        name: "Cabo Frio",
        description: "Mar azul e praias de areia branca com uma viagem tranquila e segura.",
        alt: "Vista aérea da praia de areia branca e do mar azul em Cabo Frio",
      },
      {
        name: "Angra dos Reis",
        description: "Ilhas, baías e paisagens exuberantes em uma viagem privativa e segura.",
        alt: "Vista aérea da baía de Angra dos Reis com várias embarcações",
      },
      {
        name: "Paraty",
        description: "História, natureza e charme colonial em um transfer tranquilo pelo litoral.",
        alt: "Casas coloniais coloridas no centro histórico de Paraty",
      },
    ],
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
    instaTitle: "Nossos destinos em destaque",
    instaSub: "Conheça alguns dos lugares que você pode visitar com conforto, segurança e pontualidade.",
    instaBtn: "Ver mais no Instagram",
    viewPost: "Ver detalhes da viagem",
    tripCards: [
      { title: "Experiência em Búzios", caption: "Praias paradisíacas com um transfer confortável, seguro e pontual." },
      { title: "Encantos de Arraial do Cabo", caption: "Águas cristalinas e paisagens únicas em uma viagem tranquila." },
      { title: "Paisagens de Cabo Frio", caption: "Areia branca e mar azul com toda a comodidade que você merece." },
      { title: "Um dia especial em Angra dos Reis", caption: "Ilhas e baías deslumbrantes com motoristas profissionais." },
      { title: "Descobrindo a Costa Verde", caption: "Natureza exuberante em trajetos seguros e sem preocupações." },
      { title: "Viagens inesquecíveis pelo litoral do Rio", caption: "Conforto, segurança e pontualidade do embarque ao destino." },
    ],
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
    destinationCards: [
      {
        name: "Búzios",
        description: "Playas encantadoras, estilo y comodidad en un traslado privado.",
        alt: "Vista panorámica de una playa entre formaciones rocosas, vegetación y mar azul en Búzios",
      },
      {
        name: "Arraial do Cabo",
        description: "Aguas turquesas y playas inolvidables en un trayecto cómodo.",
        alt: "Playa de agua turquesa con barcos en Arraial do Cabo",
      },
      {
        name: "Cabo Frio",
        description: "Mar azul y playas de arena blanca con un viaje tranquilo y seguro.",
        alt: "Vista aérea de la playa de arena blanca y el mar azul en Cabo Frio",
      },
      {
        name: "Angra dos Reis",
        description: "Islas, bahías y paisajes exuberantes en un viaje privado y seguro.",
        alt: "Vista aérea de la bahía de Angra dos Reis con varias embarcaciones",
      },
      {
        name: "Paraty",
        description: "Historia, naturaleza y encanto colonial en un traslado tranquilo por la costa.",
        alt: "Casas coloniales coloridas en el centro histórico de Paraty",
      },
    ],
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
    instaTitle: "Nuestros destinos destacados",
    instaSub: "Conocé algunos de los lugares que podés visitar con comodidad, seguridad y puntualidad.",
    instaBtn: "Ver más en Instagram",
    viewPost: "Ver detalles del viaje",
    tripCards: [
      { title: "Experiencia en Búzios", caption: "Playas paradisíacas con un traslado cómodo, seguro y puntual." },
      { title: "Encantos de Arraial do Cabo", caption: "Aguas cristalinas y paisajes únicos en un viaje tranquilo." },
      { title: "Paisajes de Cabo Frío", caption: "Arena blanca y mar azul con toda la comodidad que merecés." },
      { title: "Un día especial en Angra dos Reis", caption: "Islas y bahías deslumbrantes con conductores profesionales." },
      { title: "Descubriendo la Costa Verde", caption: "Naturaleza exuberante en trayectos seguros y sin preocupaciones." },
      { title: "Viajes inolvidables por el litoral de Río", caption: "Comodidad, seguridad y puntualidad del embarque al destino." },
    ],
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
