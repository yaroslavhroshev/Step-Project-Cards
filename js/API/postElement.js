import instance from "./instance.js";

const postElement = async (body) => {
    try {
        return await instance.post('/', body);
    } catch (err) {
        console.log(err)
    }
}

export default postElement;