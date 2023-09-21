

export default function Home() {
  const data = [
    { id: 1, content: "comer sushi" },
    { id: 2, content: "comer no manaeesh" },
    { id: 3, content: "comer no la campesina" },
    { id: 4, content: "comer no pierogarnia" },
    { id: 5, content: "ir pra floripa" },
    { id: 6, content: "ir pra polônia" },
    { id: 7, content: "ir pra bélgica" },
    { id: 8, content: "ir pra frança" },
    { id: 9, content: "ir pro camboja" },
    { id: 10, content: "ir pra inglaterra" },
    { id: 11, content: "passar a lua de mel num igloo de vidro na finlândia vendo a aurora boreal" },
    { id: 12, content: "elaborar um software decente para profissionais da saúde" },
    { id: 13, content: "casar" },
    { id: 14, content: "ter filhos" },
    { id: 15, content: "ter um gato e um cachorro" },
    { id: 16, content: "comprar uma casa" },
    { id: 17, content: "assistir e o vento levou" },
    { id: 18, content: "assistir todos os episódios de one piece" },
    { id: 19, content: "terminar de assistir naruto" },
    { id: 20, content: "jogar um jogo juntos" },
    { id: 21, content: "jogar banco imobiliário com os nossos netos" },
    { id: 22, content: "passar o dia na cama" },
    { id: 23, content: "fazer panquecas menos gordurosas" },
    { id: 24, content: "fazer pierogi" },
    { id: 25, content: "transar muito" },
    { id: 26, content: "book de casal normal" },
    { id: 27, content: "book de casal em chernobyl" },
    { id: 28, content: "ir pra disney" },
    { id: 29, content: "ir pra rússia" },
    { id: 30, content: "ir para um resort no nordeste" },
    { id: 31, content: "fazer um cruzeiro" },
    { id: 32, content: "ir no blood" },
    { id: 33, content: "ir para o marrocos" },
    { id: 34, content: "ir para a mongólia" },
    { id: 35, content: "dormir de conchinha" },
    { id: 36, content: "churrasco" },
    { id: 37, content: "pescar" },
    { id: 38, content: "passeio de gondola em veneza" },
    { id: 39, content: "escrever uma carta para julieta" },
    { id: 40, content: "conhecer trieste" },
    { id: 41, content: "degustação de vinho na toscana" },
    { id: 42, content: "aguas termais na toscana" },
    { id: 43, content: "termas de jurema" },
    { id: 44, content: "ficar bêbados juntos" },
    { id: 45, content: "ir pra termas de jurema" },
    { id: 46, content: "cozinhar juntos" },
    { id: 47, content: "viajar de trem" },
    { id: 48, content: "construir um quebra cabeça" },
    { id: 49, content: "construir um lego" },
    { id: 50, content: "maratonar velozes e furiosos" },
    { id: 51, content: "maratonar harry potter" },
    { id: 52, content: "ficar chapados" },
    { id: 53, content: "ir na festa do trator" },
    { id: 54, content: "ir pra carambeí" },
    { id: 55, content: "dominar o mundo" },
    { id: 56, content: "parar de fumar" }
];
  return (
    <main className="flex min-h-screen flex-col items-center p-24">


      <div className="relative flex place-items-center my-16 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        O que fazer com o meu amorzinho?
      </div>
      <div className='my-16'>
        <input className="bg-blue-950 px-2 py-2 rounded text-center" type="text" placeholder="O que faremos? " />

        <button className='bg-blue-500 px-2 py-2 rounded ml-2'>Enviar</button>
      </div>

      <div className='flex gap-2 max-h-96 bg-green-950 max-w-2xl rounded-lg flex-col overflow-y-auto scroll-smooth bg-scroll snap-both snap-proximity'>
      {data.map(item => ( <>
        <div key={item.id} className='text-center m-2 py-2 px-7 snap-end bg-stone-700 rounded-lg  flex justify-between items-center'>{item.content}
        <button type="button" className='bg-blue-500 px-2 py-2 rounded ml-2'>x</button>
        </div>
        </>
      ))}
        </div>
    </main>
  )
}
