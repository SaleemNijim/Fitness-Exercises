
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '258d314a9fmsh5e65edd11e3b449p12b2f3jsn17f9514a3b8a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}




export const youtubeoptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '258d314a9fmsh5e65edd11e3b449p12b2f3jsn17f9514a3b8a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


// url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',