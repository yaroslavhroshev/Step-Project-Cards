import instance from "./instance.js";

const loginFunction = async (body) => {
    try {
        return await instance.post('/login', body);
    } catch (err) {
        console.log(err)
    }
}

export default loginFunction;