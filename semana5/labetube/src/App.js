import React from "react";
import './App.css';
import { CardVideo } from "./components/CardVideo";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <div>
      <main>
        <Menu />
        <section className="container">
          <CardVideo
            imagem={"https://picsum.photos/400/200?a=1"}
            titulo={"Video bacanudo"}
          />
          <CardVideo
            imagem={"https://picsum.photos/400/200?a=2"}
            titulo={"Video bacanudo 2"}
          />
          <CardVideo
            imagem={"https://picsum.photos/400/200?a=3"}
            titulo={"Video de agua"}
          />
          <CardVideo
            imagem={"https://picsum.photos/400/200?a=4"}
            titulo={"Video guarda-chuva"}
          />
          <CardVideo
            imagem={"https://picsum.photos/400/200?a=5"}
            titulo={"Video feliz"}
          />
          <CardVideo
            imagem={"https://picsum.photos/400/200?a=6"}
            titulo={"Video melancolico"}
          />
        </section>
      </main>
      <nav>
        <ul>
          <li className="miclass ">
            <a href="index.html">LabeTube</a>
          </li>
          <li className="4 ">
            <input
              type="text "
              name="busca "
              id="busca "
              placeholder="Busca "
            />
          </li>
        </ul>
      </nav>
      <footer>
        <h1>Oi! Eu moro no footer!</h1>
      </footer>
    </div>
  );
}
