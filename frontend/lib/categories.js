import axios from 'axios';

async function fetchCategories() {
    const data = axios.get(process.env.BACKEND_URL + "category")
        .then(response => response.data)
        .catch(e => { console.log("Error whilte fetching all questions") });
    if (!data) return null;
    else return data;
}

export async function getAllCategories() {
    const categories = await fetchCategories();
    return categories;
}

export async function getAllCategoriesPaths() {
    const categories = await fetchCategories();
    const paths = categories.map(category => {
        return {
            params: {
                cname: category.name // JSON.stringify(category.category) does not work because we are getting "'cpp'"
            }
        }
    })

    return paths;
}

export async function getCategory(cname) {
    const category = await axios.get(process.env.BACKEND_URL + "category/get/" + cname)
        .then(response => response.data)
        .catch(error => console.log(error));

    if (!category) return null;
    else return category.questions;
}