import 'server-only'
import {Client} from '@notionhq/client'
import React from 'react'
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export const fetchPages = React.cache(()=>{
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter:{
            property:"status",
            status:{
                equals: "Live",
            },
        },
    });
});

export const fetchBySlug = React.cache((slug: string) => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter:{
            property:"slug",
            rich_text:{
                equals: slug,
            },
        },
    })
    .then((res)=> res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((page_Id: string) => {
    return notion.blocks.children.list({
        block_id: page_Id
    })
    .then((res)=> res.results as BlockObjectResponse[]);
});
