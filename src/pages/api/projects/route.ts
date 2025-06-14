import type { APIRoute } from 'astro';
import projects from '@/data/projects';

export const GET: APIRoute = async () => {
    try {
        return new Response(JSON.stringify({
            success: true,
            data: projects,
            count: projects.length,
            message: "Projects on site"
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error(error);

        return new Response(JSON.stringify({
            success: false,
            error: "Failed to fetch projects" 
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}