import axios from "axios";

/**
 * The following code obtains the API gateway and API Key from the
 * eas.json environment variables. Resolved in both debug & release builds.
 */

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

/**
 * This is an example function for GET requests with an API backend
 * GET requests include the URL and the Request Inputs.
 *
 * GET requests don't always require Bearer tokens especially
 * for information that is for public viewing.
 */
export const getAllSamples = async (data) => {
  return axios.get(`${API_URL}`, {
    headers: {
      Authorization: "INSERT-AUTH-KEY",
    },
    params: {
      key: API_KEY,
      // Insert other parameters
    },
  });
};

/**
 * This is an example function for POST requests with an API backend
 * POST requests include the URL, Payload, and Request Inputs.
 *
 * Payload includes the data sent to the server in JSON. In some cases it can be
 * a media from the user's phone. In this case, the header configuration must change
 * "Content-Type" to "multipart/form-data"
 *
 * Request Input includes information such as the params, headers, and such.
 */
export const addSample = async (data) => {
  return axios.post(
    `${API_URL}`,
    {},
    {
      headers: {
        Authorization: "INSERT-AUTH-KEY",
      },
      params: {
        key: API_KEY,
      },
    }
  );
};

/**
 * This is an example function for DELETE requests with an API backend
 * DELETE requests include the URL and the Request Inputs.
 *
 * Since DELETE can be an administrative action, it is recommended
 * to implement authorization through Bearer tokens or anything similar.
 */
export const deleteSample = async (data) => {
  return axios.delete(`${API_URL}`, {
    headers: {
      Authorization: "INSERT-AUTH-KEY",
    },
    params: {
      key: API_KEY,
      // Insert other parameters
    },
  });
};

/**
 * This is an example function for PUT requests with an API backend
 * PUT requests include the URL, Payload, and the Request Inputs.
 *
 * Since PUT can be an administrative action, it is recommended
 * to implement authorization through Bearer tokens or anything similar.
 */
export const updateSample = async (data) => {
  return axios.put(
    `${API_URL}`,
    {},
    {
      headers: {
        Authorization: "INSERT-AUTH-KEY",
      },
      params: {
        key: API_KEY,
      },
    }
  );
};
