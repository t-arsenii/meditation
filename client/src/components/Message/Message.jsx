import './message.css'

export default function Message({own}){
    return(
        <div className={own ? "message own" : "message"}>
             <div className='messageTop'>
             <img  className='messageImg' src='https://www.jtrholidays.com/static/img/bucket/Tours/UAE/Dubai/Theme-Park/IMG-World-of-Adventure/IMG-World-of-Adventure-03.jpg'/>
             <p className='messageText'>Hello message</p>
             </div>
             <div className='messageBottom'>
               1 hour age
             </div>
        </div>
    )
}