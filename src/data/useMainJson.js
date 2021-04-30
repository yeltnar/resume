import React, {useEffect, useState} from 'react';

import { configureStore, createReducer } from '@reduxjs/toolkit'

import resume_json from "../data/main.json";

const rootReducer = createReducer([], (builder)=>{
    builder.addCase('replace_obj',(state,action)=>{
        state.push(action.payload);
    })
});

const store = configureStore({
  reducer: rootReducer,
})

export default store;

// function useMainJson(){
//     const [resume, setResumeData] = useState(holder.get());

//     if(resume===undefined){debugger}

//     useEffect(()=>{
//         holder.add(setResumeData);
//         return () => holder.remove(setResumeData);
//     });

//     return resume;
// }

// export default useMainJson;