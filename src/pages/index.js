import * as React from "react"
import "../styles/index.css"

export default function Home() {
  return (
    <div className="container">
      <h1>Cyan Henaff</h1>
      <img className="logo" alt="Logo venant du film d'animation Nausicaa de la vallée du vent" src="/logo.png"/>
      <p>Je sui étudiante en 3ème année de Bachelor Universitaire de Technologie des Métiers du Multimédia et de l'Internet (BUT MMI) parcours Développement web et Dispositif Interactif. Je réalise actuellement mon alternance à Lagoon, un fournisseur d'accès à internet de Nouvelle-Calédonie.</p>
      <p>Pour garder contact :</p>
      <div>
        <a href="https://www.instagram.com/cyanhenaff/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 55 55">
            <path fill="#761558" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path><path fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path><path fill="#ffffff" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/cyan-henaff-45a358249/?originalSubdomain=nc" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 55 55">
            <path fill="#11207c" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path><circle cx="15.5" cy="15.5" r="2.5" fill="#ffffff"></circle><path fill="#ffffff" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path><path fill="#ffffff" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1	v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
          </svg>
        </a>
        <a href="mailto:cyanhenaff@gmail.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 55 55">
            <path fill="#f0b81b" d="M38.182,44H17.818C14.605,44,12,41.395,12,38.182V17.818C12,14.605,14.605,12,17.818,12h20.364	C41.395,12,44,14.605,44,17.818v20.364C44,41.395,41.395,44,38.182,44z"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M27.532,40.5H13.5c-3.314,0-6-2.686-6-6V21.809"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,16.064V13.5c0-3.314,2.686-6,6-6h21c3.314,0,6,2.686,6,6v21c0,3.314-2.686,6-6,6"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M23.383,31.516H13.5c-0.552,0-1-0.448-1-1V17.484c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1v13.032c0,0.552-0.448,1-1,1h-4.862	H23.383z"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M34.856,17.319l-9.022,7.347c-1.073,0.874-2.613,0.873-3.685-0.001l-4.381-3.573"></path><line x1="19.824" x2="13.144" y1="24" y2="30.681" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3"></line><line x1="34.856" x2="28.166" y1="30.681" y2="24" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3"></line>
          </svg>
        </a>
      </div>
      <div>
        <a href="https://github.com/Luunagda" target="_blank">
          <svg className="github-logo" width="98" height="96" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

//modifier le title
export const Head = () => (
  <>
    <title>Cyan Henaff - BUT MMI</title>
    <meta name="description" content="Cyan Henaff, étudiante en 3ème année de Bachelor Universitaire de Technologie des Métiers du Multimédia et de l'Internet (BUT MMI) parcours Développement web et Dispositif Interactif." />
  </>
)