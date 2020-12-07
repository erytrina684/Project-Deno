import{ Router } from 'https://deno.land/x/oak/mod.ts';
import { home, signup } from './controllers/blog.ts';

const router = new Router();

router
        .get("/", home)
        .get("/daftar", signup)
        .get("/kategori", (ctx) => {
            ctx.response.body = "Ini Halaman kategori";
        })
        .get("/about", (ctx) => {
            ctx.response.body = "Ini Halaman About";
        })
        export default router;