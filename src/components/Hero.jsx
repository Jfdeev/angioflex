import React from "react";


export default function Hero() {
    return (
        <section 
        className="pt-28 lg:pt-36"
        id="home"
        >
            <div className="container lg:grid lg:grid-cols-2
            items-center lg:gap-10">

                <div>
                    <div className="">
                        <figure className="">
                            <img 
                            src="https://media.licdn.com/dms/image/v2/D5603AQE6HsQNBgwvEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679249908766?e=2147483647&v=beta&t=RLhNa12qaiLH6mIdy68hdIcgJjsEGzUBpKnUIRnEv7g" 
                            width={40}
                            height={40}

                            alt="imagem-empresa"
                            className="img-cover rounded-lg"
                            />
                        </figure>

                        <div className="">
                            <span className="">
                                <span className=""></span>
                            </span>

                            Sempre Atendendo o Mercado
                        </div>
                    </div>
                    <h2 className="">
                        A Angioflex é uma empresa especializada em distribuição de Produtos para cirurgias.
                    </h2>

                    <div className="">
                        Button Primary

                        Buttom Outline
                    </div>
                </div>

                <div className="">
                    <figure className="">
                        <img 
                        src="https://www.homac.com.br/templates/yootheme/cache/84/vitrine-homac-1-8483ae1e.jpeg" 
                        alt="service"
                        width={800}
                        height={800} 
                        className="w-11/12 rounded-md p-4"
                        />
                    </figure>
                </div>

            </div>
        </section>
    );
}