export default class VidService {
	constructor () {
		this.uri = 'https://www.perpetualshred.com/';
	}

	getVids() {
		return axios.get(`${this.uri}/vids`);
	}

	getRandomVid() {
		return axios.get(`${this.uri}/vids/random`);
	}

	getVidById(id) {
		return axios.get(`${this.uri}/vids/${id}`);
	}

	getPlayerType(url) {
		if (url.includes('youtube')) {
			return 'youtube';
		}
		if (url.includes('pinkbike')) {
			return 'pinkbike';
		}
		if (url.includes('vimeo')) {
			return 'vimeo';
		} else { return url; }
	}
}
