export const WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP ?? "5519999999999").replace(/\D/g, "");
export const IFOOD_URL =
  process.env.NEXT_PUBLIC_IFOOD_URL ?? "https://www.ifood.com.br/delivery/paulinia-sp/";
export const INSTAGRAM_URL = "https://instagram.com/";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Torrinco%27s+Burger+Paul%C3%ADnia";

export const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const WA_HREF = wa("Olá, Torrinco's! Quero fazer um pedido.");

export const WA_DISPLAY =
  WHATSAPP.length >= 12
    ? `(${WHATSAPP.slice(2, 4)}) ${WHATSAPP.slice(4, WHATSAPP.length - 4)}-${WHATSAPP.slice(-4)}`
    : WHATSAPP;

type MenuItem = { name: string; price: string; desc: string; img?: string };

export const MENU: MenuItem[] = [
  { name: "Clássico", price: "R$ 29", desc: "Blend 150g, cheddar, alface, tomate, cebola roxa e maionese da casa.", img: "/images/classico.jpg" },
  { name: "Smash duplo", price: "R$ 34", desc: "Dois smash de 90g, cheddar duplo, cebola na chapa e molho Torrinco.", img: "/images/smash-duplo.jpg" },
  { name: "Bacon jam", price: "R$ 37", desc: "Blend 150g, geleia de bacon feita aqui, queijo prato e maionese defumada.", img: "/images/bacon-jam.jpg" },
  { name: "Cheddar melt", price: "R$ 38", desc: "Blend 180g coberto de cheddar cremoso, cebola crispy e picles.", img: "/images/cheddar-melt.jpg" },
  { name: "Pauliniense", price: "R$ 39", desc: "Blend 180g, queijo coalho na chapa, vinagrete de pimenta e mel.", img: "/images/pauliniense.jpg" },
  { name: "Veg", price: "R$ 32", desc: "Burger de grão-de-bico, muçarela, rúcula, tomate seco e maionese verde.", img: "/images/veg.jpg" },
];

export const REVIEWS = [
  { text: "Melhor smash de Paulínia. Chegou quente, pão macio e o molho é absurdo.", who: "Mariana, pelo iFood" },
  { text: "Peço toda sexta. O Bacon jam é o meu, mas o Clássico não erra nunca.", who: "Rafael, pelo WhatsApp" },
];
