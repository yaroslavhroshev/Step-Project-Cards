import instance from "./instance.js";

const getElement = async () => {
    try {
        return await instance.get();
    } catch (err) {
        console.log(err)
    }
}

export default getElement;