import { useState, useEffect } from 'react'

import './styles/App.css'
import './styles/reset.css'
import { Avatar } from './assets/Avatar'

import { prompt, getIngredients } from './api/api'
import { SideMenu } from './components/SideMenu/SideMenu'
import { ChatMessage } from './components/ChatMessage/ChatMessage'


function App() {

  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState({ data: {} })
  const [chatLog, setChatlog] = useState([
    {
      user: "gtp",
      message: ""
    }
  ])


  useEffect(() => {

    getIngredients()
      .then(response => setIngredients(response))

  }, [])


  async function handleSubimit(e) {

    if (recipe.length == 0) return

    const input = `Quero que crie uma receita culinária de fácil preparo utilizando somente os ingredientes ${recipe.join(',')}. Utilize emojis com um ar de comida gostosa para deixar a receita apetitosa e formate um card bootstrap.

    {REGRAS}
    - Coloque o titulo da receita no card
    - Retorne apenas o a div card e elemine outros elements como HTML e Body
    
    `

    setChatlog([
      {
        user: 'gpt',
        message: `
        <div class="card"> <div class="card-body"><h5 class="card-title text-center">Aguarde enquanto penso em uma excelente receita para você...</h5></div></div>`
      }
    ])
    let response = await prompt({ prompt: input })


    setChatlog([
      {
        user: 'gpt',
        message: response.data
      }
    ])
  }

  return (
    <div className="App">

      <SideMenu menu={ingredients} recipe={recipe} setRecipe={setRecipe}></SideMenu>
      <section className='chatbox'>
        <div className='chat-log'>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} ></ChatMessage>
          ))}

        </div>


        <div className='chat-input-holder'>
          <div className="card">
            <div>
              <Avatar></Avatar>
            </div>
            <div className="card-body">
              <h5 className="card-title">Selecione os ingredientes disponíveis e depois clique em solicitar receita</h5>
              <p className="card-text"> {recipe.map((item, index) => (<span className="badge bg-secondary" index={index}>{item}</span>))}</p>
              <button disabled={recipe.length == 0} className="btn btn-primary" onClick={handleSubimit}>Solicitar receita 😋</button>
            </div>
          </div>

        </div>
      </section >
    </div>
  );
}

export default App;
