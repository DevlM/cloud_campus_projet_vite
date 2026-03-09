// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// La  balise <></> représente la balise <Fragment></Fragment> qui permet de représenter un élément parent qui ne sera pas répercuté dans la page web

function App() {
  return (
    <>
      {/* Commentaire en JSX */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Mon Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Accueil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <h1 className="my-5 border-bottom pb-3 text-center">Mon Blog</h1>
      </header>

      <main className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/31/20/51/crowd-2361583_1280.jpg"
              alt="Image de concert ..."
              className="img-fluid"
            />
            <h2 className="my-3">Festival lorem ipsum</h2>
            <a href="">Musique</a> - <a href="">Concert</a> -{" "}
            <a href="">Festival</a>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla
              corrupti dolor, inventore laudantium, suscipit veniam modi, in
              quae magnam accusamus? Velit amet, odit aperiam quibusdam fugiat
              quae eaque dicta. Facilis, sed sint, vero dolor facere quibusdam,
              voluptate saepe porro omnis assumenda ratione quo odio aliquid
              nemo reprehenderit! Velit, excepturi! Perferendis quibusdam,
              quidem nobis doloribus assumenda quisquam fugiat rem nostrum? Vel
              et rem, voluptas non ratione fugiat nemo! Nam beatae excepturi
              dolor. Expedita tempora natus magni perferendis mollitia repellat,
              explicabo repudiandae quibusdam, quaerat pariatur eum ipsa eos
              optio odio tempore! Provident soluta facere illo, voluptates nemo
              error laboriosam incidunt, dolores molestias iusto vero
              temporibus. Recusandae saepe facilis maiores excepturi suscipit,
              aliquam praesentium consequatur architecto dolores dolor nulla
              velit voluptatum cumque? Praesentium, aliquam. Explicabo quam
              ratione dolor, quod voluptatem ullam debitis distinctio
              consequatur, non temporibus impedit. Expedita similique nisi
              accusantium consequatur veritatis quasi libero, iure aut.
              Deserunt, dicta. Ipsa, facere temporibus? Provident repellendus
              voluptatibus ratione modi. Cumque maxime corporis saepe esse
              facilis provident sunt ipsa magnam, eius eaque optio deserunt
              possimus. Nesciunt fugit beatae excepturi similique harum nihil
              inventore fuga ipsa. Iure ipsum reprehenderit, minus quibusdam
              possimus quaerat quas ducimus sequi sapiente modi facilis
              temporibus numquam deleniti deserunt culpa voluptatum omnis
              dolores ipsam, eveniet nesciunt. Corporis deserunt expedita
              placeat quae doloribus!
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-dark mt-5">
        <p className="p-3 text-center text-white mb-0">&copy; 2026 Copyright</p>
      </footer>
    </>
  );
}

export default App;
