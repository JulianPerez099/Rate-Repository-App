import { useEffect, useState } from "react";

// Cache simple en memoria
const cacheMap = new Map();

const useRepositories = (language = "javascript", sortBy = "stars", order = "desc") => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepositories = async () => {
        try {
            setLoading(true);

            // Crear una clave única para el cache
            const cacheKey = `${language}-${sortBy}-${order}`;

            // Verificar si ya tenemos los datos en cache
            if (cacheMap.has(cacheKey)) {
                setRepositories(cacheMap.get(cacheKey));
                setError(null);
                setLoading(false);
                return;
            }

            // API REST de GitHub - Busca repositorios con filtros dinámicos
            const query = language ? `language:${language}` : "*";
            const url = `https://api.github.com/search/repositories?q=${query}&sort=${sortBy}&order=${order}&per_page=15`;

            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'RateRepositoryApp',
                }
            });

            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error('Límite de solicitudes alcanzado. Por favor, espera unos minutos.');
                }
                throw new Error('Error al cargar repositorios');
            }

            const data = await response.json();

            // Mapear los datos de GitHub a nuestro formato
            const formattedRepos = data.items.map((repo) => ({
                id: repo.id,
                fullName: repo.full_name,
                description: repo.description || 'Sin descripción',
                language: repo.language || 'No especificado',
                forksCount: repo.forks_count,
                stargazersCount: repo.stargazers_count,
                ratingAverage: Math.round((repo.stargazers_count / repo.watchers_count) * 100) || 0,
                reviewCount: repo.open_issues_count,
                ownerAvatarUrl: repo.owner.avatar_url,
            }));

            // Guardar en cache
            cacheMap.set(cacheKey, formattedRepos);

            setRepositories(formattedRepos);
            setError(null);
        } catch (err) {
            console.error('Error fetching repositories:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, [language, sortBy, order]);

    return { repositories, loading, error };
};

export default useRepositories;
