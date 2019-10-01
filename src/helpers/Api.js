const apiUrls = {
    development: "http://localhost:3001",
    production: "https://movies-finder-backend.herokuapp.com"
};

export default {
    url: apiUrls[process.env.NODE_ENV] || apiUrls.production
};