import client from '../config/ApolloClient';
import {userInfo} from '../querys/users.graphql';
import {addPost, getDataForSearch, getPosts} from '../querys/article.graphql';

let users = JSON.parse(localStorage.getItem('user')) || [];

export const sessionService = {
    login,
    getAllPosts,
    getTagsCategory,
    savePost,
    logout
};

function login(email) {
    return new Promise((resolve, reject) => {
        client.query({
            query: userInfo,
            variables: {
                id: {
                    email: email
                }
            }
        }).then(result => {
            if (result.data.users.length === 0) {
                reject("Invalid email address");
            } else {
                users.push(result.data.users[0]._id);
                localStorage.setItem('user', JSON.stringify(users));
                resolve({user: result.data.users[0]});
            }
        }).catch(err => {
            reject(err);
        });
    });
}

function getAllPosts(variables) {
    return new Promise((resolve, reject) => {
        client.query({
            query: getPosts,
            variables: variables
        }).then(result => {
            resolve(result.data);
        }).catch(err => {
            reject(err);
        });
    });
}

function getTagsCategory() {
    return new Promise((resolve, reject) => {
        client.query({
            query: getDataForSearch
        }).then(result => {
            resolve(result.data);
        }).catch(err => {
            reject(err);
        });
    });
}

function savePost(title, description, category, tags) {
    let PostCreateInput = {
        title: title,
        description: description,
        categoryId: category,
        userId: JSON.parse(localStorage.getItem('user'))[0],
        tagIds: tags
    };
    return new Promise((resolve, reject) => {
        client.mutate({
            mutation: addPost,
            variables:{data:PostCreateInput}
        }).then(result => {
            resolve(result.data);
        }).catch(err => {
            reject(err);
        });
    });
}

function logout(){
    return new Promise((resolve, reject) => {
        localStorage.removeItem('user');
        resolve();
    });
}