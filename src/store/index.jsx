import { configureStore, createSlice } from "@reduxjs/toolkit";

import Donald from '../assets/donald.jpg'
import Meme from '../assets/meme.jpg'

const initialState = {
    posts : [{
        postId: 1,
        userId: 1,
        userImg: Donald,
        userName: "DonaldDuck",
        userStatus: "Rich Actor | Business Man",
        postTitle: 'We are celebrating over 4000 followers Today! Enjoy Augemented Reality real time puppet that I made. This is not done by any new AI tools like Chat GPT and done by a team of four. This text is long',
        likedStatus: false,
        likes: 30,
        kudos: 2,
        postedTime: new Date("Wed Feb 20 2024 08:05:29 GMT+0530"),
        isFriend: false
    },
    {
        postId: 2,
        userId: 1,
        userImg: Donald,
        userName: "DonaldDuck",
        userStatus: "Rich Actor | Business Man",
        postTitle: 'We are celebrating over 4000 followers Today! Enjoy Augemented Reality real time puppet that I made. This is not done by any new AI tools like Chat GPT and done by a team of four. This text is long',
        postPhoto: Meme,
        likedStatus: true,
        likes: 30,
        kudos: 2,
        postedTime: new Date("Wed Feb 19 2024 08:05:29 GMT+0530"),
        isFriend: true
    }
    ]
}


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        like(state, action) {
            const pos = state.posts.findIndex(item => item.postId === action.payload);
            state.posts[pos].likedStatus = true;
            state.posts[pos].likes++;
            
        },
        disLike(state, action) {
            const pos = state.posts.findIndex(item => item.postId === action.payload);
            state.posts[pos].likedStatus = false;
            state.posts[pos].likes--;
        }
    }
})

const store = configureStore({
    reducer: postSlice.reducer
})

export const postActions = postSlice.actions;

export default store;