import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move,  MoveOut, Sticky} from "react-scroll-motion";
import Timer from './Timer';
import './App.css';
const FadeUp = batch(Fade(), Move(), Sticky());




function App() {
  const today = new Date();
  const newYear = new Date("2021-12-31T23:59:59");

  return (
    <div>
{today >= newYear ? <ScrollContainer className='container__bg'>

<ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px"}}>Ну АЛЬО!</span> <br/>
      
    </Animator>
  </ScrollPage>

  <ScrollPage page={1}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>Дорогая Катюня! <span className='emojii'>🐈</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>Поздравляю Тибя с Новым Годиком!</span><br/>
      <span className='emojii'>🎄🍾🎉🎊</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={3}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Я очень надиюсь</span>
    </Animator>
  </ScrollPage>

<ScrollPage page={4}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Что Ты встретила этот валшебный праздник </span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={5}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>C радостью и весельем <span className='emojii'>😇</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={6}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>Желание не забыла загадать ? <span className='emojii'>😏</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={7}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Я хочу пожелать Тибе</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={8}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px"}}>Атпусти и забууууть всё плахое и ванючее из 21 года <span className='emojii'>😂</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={9}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>И гатовся ка всем приятнастям 22 года<span className='emojii'>🙄</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={10}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>Желаю Тибе оставаться такой же мудрой</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={11}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Такой же доброй, весёлой и сильной <span className='emojii'>💪</span></span>
    </Animator>
  </ScrollPage>

<ScrollPage page={12}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Малинькай девочкой <span className='emojii'>👸</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={13}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>С которой я познакомился в 21!</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={14}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Жилаю Тибе в новом году много путешествовать <span className='emojii'>✈️🌎</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={15}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Получать новые, незабываемые эмоции</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={16}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>И переживать самые самые яркие моменты в Тваей жизни!</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={17}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Плакать толька харошими сльозками <span className='emojii'>😹</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={18}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "28px" }}>Счастья Тибе дорогая! <span className='emojii'>❤️</span></span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={19}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "28px" }}>Твой личный <span className='emojii'>😽</span></span>
    </Animator>
  </ScrollPage>

<div className="bottom"></div>
</ScrollContainer> : <Timer/>}
    </div>
    
 
  )
}

export default App;
