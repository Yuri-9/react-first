import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import App from './app';

// ReactDOM.render(<App />, document.getElementById('root'));
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
//----------------------------------------

// function Clock({ delay }: IProps2) {
//   const firstDate = new Date();
//   const [date, setDate] = React.useState(firstDate);

//   useEffect(() => {
//     setInterval(() => {
//       tick();
//     }, delay);
//   });

//   function tick() {
//     setDate(new Date());
//   }

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <FormatDate date={date} />
//     </div>
//   );
// }

// interface IProps {
//   date: Date;
// }

// interface IProps2 {
//   delay: number;
// }

// function FormatDate({ date }: IProps) {
//   return <h2>It is {date.toLocaleTimeString()}.</h2>;
// }

// function App() {
//   return (
//     <div>
//       <Clock delay={10} />
//       <Clock delay={1000} />
//       <Clock delay={5000} />
//     </div>
//   );
// }
//---------------------------------------------------------
// function Toggle() {
//   const [isToggleOn, setIsToggleOn] = useState(true);

//   function handleLoginClick() {
//     setIsToggleOn(true);
//   }

//   function handleLogoutClick() {
//     setIsToggleOn(false);
//   }

//   let button;
//   if (!isToggleOn) {
//     button = <LoginButton onClick={handleLoginClick} />;
//   } else {
//     button = <LogoutButton onClick={handleLogoutClick} />;
//   }

//   return (
//     <div>
//       {button}
//       <UserGreeting isLoggedIn={isToggleOn} />
//     </div>
//   );
// }

// ReactDOM.render(<Toggle />, document.getElementById('root'));

// interface IProps3 {
//   isLoggedIn: boolean;
// }

// function UserGreeting({ isLoggedIn }: IProps3) {
//   return <h3>{isLoggedIn ? 'С возвращением!' : 'Войдите, пожалуйста.'}</h3>;
// }

// function LoginButton({ onClick }: { onClick: () => void }) {
//   return <button onClick={onClick}>Войти</button>;
// }

// function LogoutButton({ onClick }: { onClick: () => void }) {
//   return <button onClick={onClick}>Выйти</button>;
// }

//----------------------------------------

// interface IProps {
//   name: string;
// }

// function Welcome({ name }: IProps) {
//   return <h1>Hello, {name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Alisa" />
//       <Welcome name="Petya" />
//       <Welcome name="Yura" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// --------------------------------------------------------

function ListNumbers({ list }: { list: number[] }) {
  const listNumbers = list.map((item) => {
    return <li>{item}</li>;
  });
  return <ul>{listNumbers}</ul>;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ReactDOM.render(<ListNumbers list={arr} />, document.getElementById('root'));
