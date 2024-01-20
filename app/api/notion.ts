import { NotionDataBaseResponse } from "../@types/TypeNotion";
const { Client } = require('@notionhq/client');
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = '9f93d510de7241348ca6d00c3fb19529';

export async function getPosts() {

    const response: NotionDataBaseResponse = await notion.databases.query({
        database_id: DATABASE_ID,
    });

    return response.results.map((post) => {
        return {
            id: post.id,
            title: post.properties.nome.title[0].plain_text,
            slug: post.properties.slug.rich_text[0].plain_text,
            tags: post.properties.tags.multi_select.map((tag) => tag.name),
            createdAt: post.created_time
        }
    })
}

export async function getPost(slug: string) {

    const response: NotionDataBaseResponse = await notion.databases.query({
        database_id: DATABASE_ID,
        filter: {
            or: [
                {
                    property: "slug",
                    rich_text: {
                        equals: slug,
                    },
                },
            ]
        }
    });

    const pageId = response.results[0].id;

    const n2m = new NotionToMarkdown({ notionClient: notion });

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    const typedResponse = response as unknown as NotionDataBaseResponse

    return {
        title: typedResponse.results[0].properties.nome.title[0].plain_text,
        content: mdString.parent
    }
}