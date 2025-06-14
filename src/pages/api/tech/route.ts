import techStacks from '@/data/techStacks';
import type { APIRoute } from 'astro';
export const GET: APIRoute = async () => {
    try { 
      
        return new Response(JSON.stringify({
            success: true,
            data : techStacks,
            count: techStacks.length,
            message: "Tech Stacks on site:",
        }), {
            status: 200,
            
            headers: {
                "Content-type" : "application/json"
            }
        });
    }
    catch (error) {
        return new Response(JSON.stringify({
            succes: false,
            errror: " Failed to fecth tech Stacks"
        }), { 
            status:500,
            headers: {
                "Content-type" : "application/json"
            }
        });
    }
} 

// src/pages/api/hello.ts
// import type { APIRoute } from 'astro';

// export const GET: APIRoute = async ({ params, request }) => {
//   return new Response(JSON.stringify({
//     message: "Hello from TypeScript API!"
//   }), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
// }