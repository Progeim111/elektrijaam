import { Request, Response, Router } from "express";
import { Arve } from "../modals/Arve";
import { Maksestaatus } from "../modals/Maksestaatus";
import { Tarbija } from "../modals/Tarbija";
import { Asukoht } from "../modals/Asukoht";
import { Kontaktandmed } from "../modals/Kontaktandmed";


const router: Router = Router();

const arved: Arve[] = [
    new Arve(new Date(2022, 1, 1), 100, 50, new Maksestaatus(true, new Date(2022, 1, 15), 0, new Date()), new Tarbija("John Doe", new Kontaktandmed("john.doe@example.com", "+1 1234567890"), new Asukoht("Street 1", "City", "State", "12345"))),
    new Arve(new Date(2022, 2, 1), 200, 100, new Maksestaatus(true, new Date(2022, 2, 15), 100, new Date()), new Tarbija("Jane Smith", new Kontaktandmed("jane.smith@example.com", "+1 9876543210"), new Asukoht("Street 2", "City", "State", "23456"))),
    new Arve(new Date(2022, 3, 1), 300, 150, new Maksestaatus(true, new Date(2022, 3, 15), 0, new Date()), new Tarbija("Bob Johnson", new Kontaktandmed("bob.johnson@example.com", "+1 5678901234"), new Asukoht("Street 3", "City", "State", "34567"))),
    new Arve(new Date(2022, 4, 1), 400, 200, new Maksestaatus(true, new Date(2022, 4, 15), 0, new Date()), new Tarbija("Alice Brown", new Kontaktandmed("alice.brown@example.com", "+1 9012345678"), new Asukoht("Street 4", "City", "State", "45678"))),
    new Arve(new Date(2022, 5, 1), 500, 250, new Maksestaatus(false, new Date(2022, 5, 15), 0, new Date()), new Tarbija("Mark Johnson", new Kontaktandmed("mark.johnson@example.com", "+1 2345678901"), new Asukoht("Street 5", "City", "State", "56789"))),
    new Arve(new Date(2022, 6, 1), 600, 300, new Maksestaatus(false, new Date(2022, 6, 15), 0, new Date()), new Tarbija("Sarah Davis", new Kontaktandmed("sarah.davis@example.com", "+1 3456789012"), new Asukoht("Street 6", "City", "State", "67890"))),
    new Arve(new Date(2022, 7, 1), 700, 350, new Maksestaatus(false, new Date(2022, 7, 15), 0, new Date()), new Tarbija("Michael Johnson", new Kontaktandmed("michael.johnson@example.com", "+1 4567890123"), new Asukoht("Street 7", "City", "State", "78901"))),
    new Arve(new Date(2022, 8, 1), 800, 400, new Maksestaatus(false, new Date(2022, 8, 15), 0, new Date()), new Tarbija("Emily Davis", new Kontaktandmed("emily.davis@example.com", "+1 5678901234"), new Asukoht("Street 8", "City", "State", "89012"))),
    
];


//Kõik maksmata arved kõikide tarbijate osas
router.get('/MaksmataArved', (req: Request, res: Response) => {
    res.json(arved.filter(arve => !arve.paymentStatus.paymentStatus));
});

//Kõik maksmata arved kõikide tarbijate osas millel on maksetähtaeg ületatud
router.get('/MaksetahtaegUletatud', (req: Request, res: Response) => {
    const currentDate = new Date();
    const overdueArved = arved.filter((arve: Arve) => !arve.paymentStatus.paymentStatus && arve.paymentStatus.dueDate < currentDate);
    res.json(overdueArved);
});

// Kõik ühe tarbija maksmata arved
router.get('/TarbijaMaksmataArved/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    const tarbijaArved = arved.filter((arve: Arve) => !arve.paymentStatus.paymentStatus && arve.consumer.name === nimi);
    res.json(tarbijaArved);
});

// Kõik ühe tarbija maksmata arved millel on maksetähtaeg ületatud
router.get('/TarbijaMaksetahtaegUletatud/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    const currentDate = new Date();
    const overdueArved = arved.filter((arve: Arve) => !arve.paymentStatus.paymentStatus && arve.paymentStatus.dueDate < currentDate && arve.consumer.name === nimi);
    res.json(overdueArved);
});

// Kõik ühe tarbija arved
router.get('/TarbijaArved/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    const tarbijaArved = arved.filter((arve: Arve) => arve.consumer.name === nimi);
    res.json(tarbijaArved);
});

// Ühe tarbija kõikide arvete summa kokku
router.get('/TarbijaArveteSumma/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    const tarbijaArved = arved.filter((arve: Arve) => arve.consumer.name === nimi);
    const sum = tarbijaArved.reduce((acc, arve) => acc + arve.amount, 0);
    res.json(sum);
});

export default router;