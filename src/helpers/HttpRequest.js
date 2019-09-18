
export default async ({ url, ...options }) => {
	try {
		let apiUrl = `https://movies-finder-backend.herokuapp.com/movies`;

		const response = await fetch(`${apiUrl}${url}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
			...options
		});

		return await response.json();
	} catch (error) {
		window.alert('Alguem erro aconteceu. Tente novamente, por favor.')
	}
};


