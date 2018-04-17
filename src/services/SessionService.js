import client from '../config/ApolloClient';
import {userInfo} from '../constants/querys/users.graphql';
let users = JSON.parse(localStorage.getItem('user')) || [];

export const sessionService = {
    login
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
            if(result.data.users.length === 0){
                reject("Invalid email adress");
            }else{
                users.push(result.data.users[0]._id);
                localStorage.setItem('user', JSON.stringify(users));
                resolve({user:result.data.users[0]});
            }
        }).catch(err => {
            reject(err);
        });
    });
}