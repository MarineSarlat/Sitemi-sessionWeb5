import 'server-only';

//Fetch series populaires
export const getAllPopularSeries = async () => {

    try {

        const resp = await fetch('http://localhost:3000/api/series/trending');
        if (!resp.ok) {
            throw new Error('Une erreur est survenue');
        }

        const data = await resp.json();
        return data.series;

    } catch(err) {
        return [];

    }

};


//Fetch sur toutes les series par slug 
export const getSeriesBySlug = async (seriesSlug) => {
    try {
        const resp = await fetch(`http://localhost:3000/api/series/${seriesSlug}`);
        if (!resp.ok) {
            throw new Error('Une erreur est survenue');
        }

        const data = await resp.json();
        return data.serie;  

    } catch (err) {
        return null;
    }
};


//Fetch series favorites

export const getFavoriteSeries = async () => {

    try {

        const resp = await fetch('http://localhost:3000/api/series/favorites');
        if (!resp.ok) {
            throw new Error('Une erreur est survenue');
        }

        const data = await resp.json();
        return data.series;

    } catch(err) {
        return [];

    }

};


//Fetch recherche series

export const getSeriesRecherche = async (terme) => {

    try {

        const resp = await fetch( `http://localhost:3000/api/series/search?q=${terme}`);
        if (!resp.ok) {
            throw new Error('Une erreur est survenue');
        }

        const data = await resp.json();
        console.log(data, terme);
        return data.series;

    } catch(err) {
        return [];

    }

};