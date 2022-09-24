import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: () => {
                headers.set('X-RapidAPI-Key', '845ea87b68msh2742d9894fde6ebp1789ccjsn64ee6e16e934')
            }
        })
    })