import React from 'react';
import './App.css';
import Kursus from "./state/State";
import Materi from "./prop/Props";

export default function App() {
  return (
    <div className="wr">
      <Kursus/>
      <p>Harga Kelas Progamer</p>
      <hr/>
        <Materi img={require('./prop/img/vue.png')} desc="belajar seo" harga="120000"/>
        <Materi img={require('./prop/img/seo.jpg')} desc="belajar Vue and Laravel" harga="170000"/>
        <Materi img={require('./prop/img/vue.png')} desc="belajar NodeJS" harga="120000"/>
    </div>
  );
}
