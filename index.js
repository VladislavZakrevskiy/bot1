const telegramApi = require('node-telegram-bot-api')
const fetch = (...args) => import('node-fetch').then(({
    default: fetch
}) => fetch(...args));

const token = '5935610411:AAFAY_EIGy6jVdVEL30uWD9AyXGuTofcMlA'

const bot = new telegramApi(token, {
    polling: true
})



 function start(){ 
     
    bot.setMyCommands([{
        command: '/start',
        description: "Начать работу с ботом"
    },
    {
        command: '/cardofday',
        description: "Получи карту дня"
    },
    {
        command: '/allcards',
        description: "Получи список всех карт"
    }
    ])

    bot.on('message', async (msg) => {
        let text = msg.text
        let chatId = msg.chat.id
        if (text === '/start') {
            return bot.sendMessage(chatId, 
`Start!
The List Of Commands: 
/start - list of commands
/cardofday - Your personal daily Card
/allcards - show all Taro Cards
Sorry, but the decriptions and names are English
My translater's API plan is finished(
Good Luck to using of this bot!🤩🤩🤩
P.S.: soon new feagures...(beta)`)
        }
        if (text === "/cardofday") {
            const card = await fetch('https://tarot-api.onrender.com/api/v1/cards/random?n=1')
            const res = await card.json()
            return bot.sendMessage(chatId,
                `Имя карты: ${res.cards[0].name}
            \n Краткое описание: ${res.cards[0].meaning_rev}    
            \n Описание: ${res.cards[0].desc}
            \n Толкование: ${res.cards[0].meaning_up}
            \n Тип: ${res.cards[0].type}
            \n Масть: ${res.cards[0].suit}`)
        }
        if( text === '/allcards') {
           
            let keyboard = {
                reply_markup: JSON.stringify({
                    inline_keyboard:[
                        [ { text: 'The Magician', callback_data: 0 },
                          { text: 'The High Priestess', callback_data: 1 },
                          { text: 'The Empress', callback_data: 2 } 
                        ],
                        [ { text: 'The Emperor', callback_data: 3 },
                          { text: 'The Hierophant', callback_data: 4 }, 
                          { text: 'The Lovers', callback_data: 5 }
                        ],
                        [ { text: 'The Chariot', callback_data: 6 },
                          { text: 'Fortitude', callback_data: 7 },
                          { text: 'The Hermit', callback_data: 8 } 
                        ],
                        [ { text: 'Wheel Of Fortune', callback_data: 9 },
                          { text: 'Justice', callback_data: 10 },
                          { text: 'The Hanged Man', callback_data: 11 }
                        ],
                        [ { text: 'Death', callback_data: 12 },
                          { text: 'Temperance', callback_data: 13 },
                          { text: 'The Devil', callback_data: 14 } 
                        ],
                        [ { text: 'The Tower', callback_data: 15 },
                          { text: 'The Star', callback_data: 16 } ,
                          { text: 'The Moon', callback_data: 17 } 
                        ],
                        
                        [ { text: 'The Sun', callback_data: 18 },
                          { text: 'Last Judgment', callback_data: 19 },
                          { text: 'The Fool', callback_data: 20 } 
                        ],
                        [ { text: 'The World', callback_data: 21 },
                          { text: 'Page of Wands', callback_data: 22 } ,
                          { text: 'Knight of Wands', callback_data: 23 }
                        ],
                        [ { text: 'Queen of Wands', callback_data: 24 },
                          { text: 'King of Wands', callback_data: 25 } ,
                          { text: 'Ace of Wands', callback_data: 26 }
                        ],
                        [ { text: 'Two of Wands', callback_data: 27 },
                          { text: 'Three of Wands', callback_data: 28 } ,
                          { text: 'Four of Wands', callback_data: 29 } 
                        ],
                        [ { text: 'Three of Wands', callback_data: 28 },
                          { text: 'Four of Wands', callback_data: 29 } ,
                          { text: 'Five of Wands', callback_data: 30 } 
                        ],
                        [ { text: 'Six of Wands', callback_data: 31 },
                          { text: 'Seven of Wands', callback_data: 32 } ,
                          { text: 'Eight of Wands', callback_data: 33 } 
                        ],
                        [ { text: 'Nine of Wands', callback_data: 34 },
                          { text: 'Ten of Wands', callback_data: 35 } ,
                          { text: 'Page of Cups', callback_data: 36 }
                        ],
                        [ { text: 'Knight of Cups', callback_data: 37 }, 
                          { text: 'Queen of Cups', callback_data: 38 },
                          { text: 'King of Cups', callback_data: 39} 
                        ],
                        [ { text: 'Ace of Cups', callback_data: 40 },
                          { text: 'Two of Cups', callback_data: 41 },
                          { text: 'Three of Cups', callback_data: 42 } 
                        ],
                        [ { text: 'Four of Cups', callback_data: 43 },
                          { text: 'Five of Cups', callback_data: 44 } ,
                          { text: 'Six of Cups', callback_data: 45 } 
                        ],
                        [ { text: 'Seven of Cups', callback_data: 46 },
                          { text: 'Eight of Cups', callback_data: 47 },
                          { text: 'Nine of Cups', callback_data: 48 } 
                        ],
                        [ { text: 'Ten of Cups', callback_data: 49 },
                          { text: 'Page of Pentacles', callback_data: 50 } ,
                          { text: 'Knight of Pentacles', callback_data: 51 } 
                        ],
                        [ { text: 'Queen of Pentacles', callback_data: 52 },
                          { text: 'King of Pentacles', callback_data: 53 } ,
                         { text: 'Ace of Pentacles', callback_data: 54 } 
                        ],
                        [ { text: 'Two of Pentacles', callback_data: 55 },
                          { text: 'Three of Pentacles', callback_data: 56 } ,
                          { text: 'Four of Pentacles', callback_data: 57 } 
                        ],
                        [ { text: 'Five of Pentacles', callback_data: 58 },
                          { text: 'Six of Pentacles', callback_data: 59 } ,
                          { text: 'Seven of Pentacles', callback_data: 60 } 
                        ],
                        [ { text: 'Eight of Pentacles', callback_data: 61 },
                          { text: 'Nine of Pentacles', callback_data: 62 } ,
                          { text: 'Ten of Pentacles', callback_data: 63 } 
                        ],
                        [ { text: 'Page of Swords', callback_data: 64 },
                          { text: 'Knight of Swords', callback_data: 65 } ,
                          { text: 'Queen of Swords', callback_data: 66 } 
                        ],
                        [ { text: 'King of Swords', callback_data: 67 },
                          { text: 'Ace of Swords', callback_data: 68 } ,
                          { text: 'Two of Swords', callback_data: 69 } 
                        ],
                        [ { text: 'Three of Swords', callback_data: 70 }, 
                          { text: 'Four of Swords', callback_data: 71 } ,
                          { text: 'Five of Swords', callback_data: 72 } 
                        ],
                        [ { text: 'Six of Swords', callback_data: 73 }, 
                          { text: 'Seven of Swords', callback_data: 74 } ,
                          { text: 'Eight of Swords', callback_data: 75 } 
                        ],
                        [ { text: 'Nine of Swords', callback_data: 76 },
                          { text: 'Ten of Swords', callback_data: 77 } 
                        ],
                      ]
                    })
                }
             
            return bot.sendMessage(chatId, 'Какую карту ты хочешь выбрать', keyboard)
        }

        return bot.sendMessage(chatId, 'Я тебя не понимаю, гадалка')   
    })
    bot.on('callback_query',async msg=>{
        const chatId = msg.message.chat.id
        let callback_data = msg.data
        const fetchedCards = await fetch('https://tarot-api.onrender.com/api/v1/cards') 
        let cards = await fetchedCards.json()
        return bot.sendMessage(chatId,
            `Имя карты: ${cards.cards[callback_data].name}
            \n Краткое описание: ${cards.cards[callback_data].meaning_rev}    
            \n Описание: ${cards.cards[callback_data].desc}
            \n Толкование: ${cards.cards[callback_data].meaning_up}
            \n Тип: ${cards.cards[callback_data].type}
            \n Масть: ${cards.cards[callback_data].suit}`)
    })
}
start()