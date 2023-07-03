import instance from "./instance.js";

const putCardInfo = async (id, body) => {
    try {
        return await instance.put(`/${id}`, body)
    } catch (error) {
        console.warn(error);
    }
}

export default putCardInfo