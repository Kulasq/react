import { useEffect } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Kulasq/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
            console.log(resJson);
        })
    }, [])

    return (
        <ul>
            {repos.map(repositorio => (
                <li>
                    <b>Nome</b>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    )
}

export default ReposList;