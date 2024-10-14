import Image from "next/image"
import photo1 from "../../../public/photo1.png"
import photo4 from "../../../public/photo4.png"


export default function Home() {
  return (
    <div>
        <div>
            <div className="flex justify-between mt-8 flex-wrap h-auto">
                <Image 
                    src={photo1} 
                    alt="grupo de mulheres reunidas sobre mulheres no meio industrial"
                    className="rounded-xl w-1/4 ml-72 drop-shadow-2xl border-white"
                />
                <div className="flex flex-col text-center justify-center rounded-md mr-72">
                    <h1 className="text-pink-500 font-bold text-transform: uppercase">
                        O que é #FIRSTLikeAGirl?
                    </h1>
                    <p className="font-semibold text-base flex-wrap">
                        Um movimento nas redes sociais para encorajar meninas e mulheres em STEM e FIRST. <br />
                        Ao apresentar as muitas mulheres incríveis da FIRST e suas histórias, as meninas podem <br />
                        encontrar modelos com quem se identificam e que as inspiram. 
                    </p>
                    <h1 className="text-pink-500 font-bold text-transform: uppercase mt-8">
                        Por que isso é importante?
                    </h1>
                    <p className="font-semibold text-base flex-wrap w-auto">
                        Por meio dessa campanha nas redes sociais, capacitamos meninas com a confiança necessária <br />
                        para superar pressões culturais, seguir seus sonhos no STEM e se <br />
                        tornarem membros ativas da comunidade FIRST. 
                    </p>
                </div>
            </div>
            <div className="flex justify-between mt-8 h-auto">
                <div className="flex flex-col text-center justify-center rounded-md ml-72">
                    <h1 className="text-pink-500 font-bold text-transform: uppercase">
                        Nosso Time
                    </h1>
                    <p className="font-semibold text-base flex-wrap">
                        Um movimento nas redes sociais para encorajar meninas e mulheres em STEM e FIRST. <br />
                        Ao apresentar as muitas mulheres incríveis da FIRST e suas histórias, as meninas podem <br />
                        encontrar modelos com quem se identificam e que as inspiram. 
                    </p>
                    <h1 className="text-pink-500 font-bold text-transform: uppercase mt-8">
                        Por que isso é importante?
                    </h1>
                    <p className="font-semibold text-base flex-wrap w-auto">
                        Por meio dessa campanha nas redes sociais, capacitamos meninas com a confiança necessária <br />
                        para superar pressões culturais, seguir seus sonhos no STEM e se <br />
                        tornarem membros ativas da comunidade FIRST. 
                    </p>
                </div>
                <Image 
                    src={photo4} 
                    alt="grupo de mulheres reunidas sobre mulheres no meio industrial"
                    className="rounded-xl w-1/4 mr-72 drop-shadow-2xl border-white"
                />
            </div>
        </div>
    </div>
  )
}
