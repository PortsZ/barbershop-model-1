import React from 'react'

const handleBotao = () => {
    return console.log("CLICASTE NO BOTAO");
  };

const BookNow = () => {
  return (
    <div>
        <a className="drop-shadow-[-7px_12px_3px_rgba(170,29,78,0.35)] active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center">
              <button
                className="bg-primary p-4 rounded-br-3xl rounded-tl-3xl md:rounded-tl-none md:rounded-br-3xl hover:bg-secondary transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-zilla active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(170,29,78,1)] drop-shadow-[0_12px_0px_rgba(138,23,63,1)] hover:drop-shadow-[0_12px_0px_rgba(170,29,78,1)]">
                BOOK NOW
              </button>
            </a>
    </div>
  )
}

export default BookNow