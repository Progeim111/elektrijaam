import { Request, Response, Router } from "express";
import { Seade } from "../modals/Seade";

const router: Router = Router();

const seadmed: Seade[] = [
    new Seade(1, "Laptop", "Dell", new Date(2022, 10, 1), 500, 1000, true),
    new Seade(2, "Smartphone", "Apple", new Date(2023, 5, 15), 300, 800, true),
    new Seade(3, "Camera", "Canon", new Date(2022, 8, 20), 200, 600, false),
    // Add more Seade objects here if needed
];

// Näita kõiki seadmeid mida on vaja hooldada (hoolduskuupäev minevikus)
router.get('/HooldusKuupaevMinevikus', (req: Request, res: Response) => {
    const currentDate = new Date();
    const hooldusKuupaevMinevikus = seadmed.filter((seade: Seade) => seade.nextService < currentDate);
    res.json(hooldusKuupaevMinevikus);
});

// Näita kõikide seadmete soetusmaksumust kokku
router.get('/SeadmeteSoetusmaksumus', (req: Request, res: Response) => {
    const sum = seadmed.reduce((acc, seade) => acc + seade.purchasePrice, 0);
    res.json(sum);
});

// Näita kõikide seadmete jääkmaksumust kokku
router.get('/SeadmeteJaakmaksumus', (req: Request, res: Response) => {
    const sum = seadmed.reduce((acc, seade) => acc + seade.residualValue, 0);
    res.json(sum);
});

// Näita kõiki mitteaktiivseid seadmeid
router.get('/MitteaktiivsedSeadmed', (req: Request, res: Response) => {
    res.json(seadmed.filter(seade => !seade.isActive));
});

// Näita kõiki aktiivseid seadmeid
router.get('/AktiivsedSeadmed', (req: Request, res: Response) => {
    res.json(seadmed.filter(seade => seade.isActive));
});


export default router;