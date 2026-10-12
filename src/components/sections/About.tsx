import ImageSlot from "../ImageSlot";
import Reveal from "../Reveal";

const polaroid = "absolute bg-white p-2.5 rounded-[14px]";
const inner = "relative h-full w-full overflow-hidden rounded-lg bg-ph";

export default function About() {
  return (
    <section id="casa" className="mx-auto max-w-[1320px] px-6 py-[clamp(80px,10vw,144px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(48px,7vw,112px)]">
        <Reveal className="flex max-w-[520px] flex-col gap-[22px]">
          <h2 className="m-0 font-display text-[clamp(40px,5vw,72px)] leading-[.95] font-extrabold tracking-[-.04em]">
            E aí, Paulínia.
          </h2>
          <p className="m-0 text-[17px] leading-[1.7] text-pretty text-body">
            A Torrinco&apos;s começou com uma chapa, uma receita de blend e a vontade de fazer o burger que a gente queria comer na cidade. A carne é moída aqui, a bola vai pra chapa no momento do pedido e é prensada até criar aquela casquinha. O queijo derrete por cima, o pão vai na manteiga.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-pretty text-body">
            Nada pronto, nada congelado. Se quiser trocar alguma coisa no lanche, é só falar com a gente no WhatsApp.
          </p>
          <span className="mt-1.5 font-display text-base font-bold">— Equipe Torrinco&apos;s</span>
        </Reveal>
        <Reveal className="relative h-[clamp(420px,46vw,620px)]">
          <div className={`${polaroid} top-0 left-0 h-[68%] w-[58%] -rotate-3 shadow-polaroid`}>
            <div className={inner}><ImageSlot placeholder="Foto — chapa / smash" src="/images/batata-cheddar-bacon.jpg" alt="Batata com cheddar e bacon" /></div>
          </div>
          <div className={`${polaroid} top-[12%] right-0 h-[54%] w-[46%] rotate-[2.5deg] shadow-polaroid`}>
            <div className={inner}><ImageSlot placeholder="Foto — equipe" src="/images/brownie.jpg" alt="Brownie com sorvete e calda de chocolate" /></div>
          </div>
          <div className={`${polaroid} bottom-0 left-[24%] h-[40%] w-[48%] -rotate-1 shadow-polaroid-lg`}>
            <div className={inner}><ImageSlot placeholder="Foto — cliente comendo" src="/images/burger-pao-escuro.jpg" alt="Burger no pão escuro com cheddar e batata" /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
