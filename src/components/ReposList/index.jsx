import styles from './ReposList.module.css';

import { useEffect, useState } from "react";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const [deuErro, setDeuErro] = useState(false);

  useEffect(() => {
    setEstaCarregando(true);
    setDeuErro(false);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Erro ao buscar repositórios.");
        }
        return res.json();
      })
      .then(resJson => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(resJson);
        }, 3000);
      })
      .catch(e => {
        setDeuErro(true);
        setEstaCarregando(false);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {deuErro ? (
        <p className={styles.errorMessage}>Erro ao carregar os repositórios. Verifique o nome de usuário e tente novamente.</p>
      ) : estaCarregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemName}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem:</b> {language}
              </div>
              <a className={styles.itemLink} href={html_url} target="_blank" rel="noopener noreferrer">Link</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ReposList;