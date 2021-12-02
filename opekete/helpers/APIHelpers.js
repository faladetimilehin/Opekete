import axios from 'axios';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

const API_BASE_URL =
	process.env.VERCEL_GIT_COMMIT_REF !== 'master'
		? process.env.DEV_API_BASE_URL
		:  process.env.API_BASE_URL

const instance = axios.create({
  baseURL: API_BASE_URL,
});

const useConfig = (config) => {
  const customConfig = config;
  const opeketeToken = cookies.get("opeketeToken");

  if (opeketeToken) {
    customConfig.headers.Authorization = `Bearer ${opeketeToken}`
  }

  return customConfig;
};

instance.interceptors.request.use(useConfig);

const APIHelper = {
  get(endpoint, config = null) {
		return config ? instance.get(endpoint, config) : instance.get(endpoint);
	},

	post(endpoint, data, config = null) {
		return config ? instance.post(endpoint, data, config) : instance.post(endpoint, data);
	},

	patch(endpoint, data) {
		return instance.patch(endpoint, data);
	},

	delete(endpoint, config = null) {
		return config ? instance.delete(endpoint, config) : instance.delete(endpoint);
	},

	put(endpoint, data, config) {
		return config ? instance.put(endpoint, data, config) : instance.put(endpoint, data);
	},
}

export default APIHelper;
