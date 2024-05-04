// Si se saca la información de la API, se puede usar este hook para hacer la petición y obtener los datos

// import { useEffect, useState } from "react";

// const useRepositories = () => {
//     const [repositories, setRepositories] = useState(null);

//     const fetchRepositories = async () => {
//         try {
//             const response = await globalThis.fetch("http://localhost:5000/api/repositories");
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const json = await response.json();
//             setRepositories();
//         } catch (error) {
//             console.error('Error fetching repositories:', error);
//         }
//     };


//     useEffect(() => {
//         fetchRepositories()
//     }, []);

//     const repositoriesNodes = repositories
//         ? repositories.edges.map(edge => edge.node)
//         : [];

//     return { repositories: repositoriesNodes };
// }

// export default useRepositories;

// Sacar la información localmente

import { useEffect, useState } from "react";
import repositories from "../data/repositories";

const useRepositories = () => {
    const [repositoriesData, setRepositoriesData] = useState(null);

    const fetchRepositories = async () => {
        try {
            // No necesitas hacer una solicitud a través de la red, simplemente asigna los datos importados.
            setRepositoriesData(repositories);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    const repositoriesNodes = repositoriesData || [];

    return { repositories: repositoriesNodes };
}

export default useRepositories;
