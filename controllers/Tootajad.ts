import { Request, Response, Router } from "express";
import axios from "axios";

const router = Router();

router.get("/tootajad/:page", async (req: Request, res: Response) => {
    try {
        const page = req.params.page;

        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);

        const tootajad = response.data.data;

        res.json(tootajad);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tootajad" });
    }
});

export default router;
