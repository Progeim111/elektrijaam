import { Request, Response, Router } from "express";
import { Arve } from "../modals/Arve";
import { Maksestaatus } from "../modals/Maksestaatus";
import { Tarbija } from "../modals/Tarbija";
import { Asukoht } from "../modals/Asukoht";
import { Kontaktandmed } from "../modals/Kontaktandmed";

const router: Router = Router();

const arved: Arve[] = [
    new Arve(new Date(2023, 0, 10), 120, 60, new Maksestaatus(true, new Date(2023, 0, 20), 60, new Date()), new Tarbija("Ella Anderson", new Kontaktandmed("ella.anderson@example.com", "+44 1234567890"), new Asukoht("Elm Street 12", "Brighton", "East Sussex", "BN1 3AB"))),
    new Arve(new Date(2023, 1, 15), 250, 50, new Maksestaatus(false, new Date(2023, 2, 1), 0, new Date(2023, 1, 20)), new Tarbija("John Doe", new Kontaktandmed("john.doe@example.com", "+44 1234567891"), new Asukoht("Baker Street 22", "London", "Greater London", "W1U 6BS"))),
    new Arve(new Date(2023, 2, 5), 180, 30, new Maksestaatus(true, new Date(2023, 2, 15), 150, new Date(2023, 2, 7)), new Tarbija("Sophia Green", new Kontaktandmed("sophia.green@example.com", "+44 1234567892"), new Asukoht("King's Road 10", "London", "Greater London", "SW3 4TD"))),
    new Arve(new Date(2023, 3, 22), 300, 100, new Maksestaatus(true, new Date(2023, 3, 28), 250, new Date(2023, 3, 25)), new Tarbija("Tom Richards", new Kontaktandmed("tom.richards@example.com", "+44 1234567893"), new Asukoht("High Street 4", "Bristol", "Avon", "BS1 2AA"))),
    new Arve(new Date(2023, 4, 11), 400, 150, new Maksestaatus(false, new Date(2023, 5, 5), 0, new Date(2023, 4, 20)), new Tarbija("Olivia Williams", new Kontaktandmed("olivia.williams@example.com", "+44 1234567894"), new Asukoht("Victoria Road 33", "Manchester", "Greater Manchester", "M12 6TA"))),
    new Arve(new Date(2023, 5, 19), 500, 200, new Maksestaatus(true, new Date(2023, 5, 25), 400, new Date(2023, 5, 22)), new Tarbija("Liam Brown", new Kontaktandmed("liam.brown@example.com", "+44 1234567895"), new Asukoht("Oxford Street 5", "London", "Greater London", "W1D 1AA"))),
    new Arve(new Date(2023, 6, 3), 150, 50, new Maksestaatus(false, new Date(2023, 6, 10), 0, new Date(2023, 6, 5)), new Tarbija("Mia Clark", new Kontaktandmed("mia.clark@example.com", "+44 1234567896"), new Asukoht("Park Road 15", "Leeds", "West Yorkshire", "LS1 3AG"))),
    new Arve(new Date(2023, 7, 1), 200, 75, new Maksestaatus(true, new Date(2023, 7, 5), 150, new Date(2023, 7, 3)), new Tarbija("Charlotte Davis", new Kontaktandmed("charlotte.davis@example.com", "+44 1234567897"), new Asukoht("Church Street 8", "Liverpool", "Merseyside", "L1 4AB"))),
    new Arve(new Date(2023, 8, 17), 350, 120, new Maksestaatus(false, new Date(2023, 9, 1), 0, new Date(2023, 8, 25)), new Tarbija("Amelia Evans", new Kontaktandmed("amelia.evans@example.com", "+44 1234567898"), new Asukoht("Main Street 12", "Sheffield", "South Yorkshire", "S1 2HB"))),
    new Arve(new Date(2023, 9, 8), 220, 70, new Maksestaatus(true, new Date(2023, 9, 12), 150, new Date(2023, 9, 10)), new Tarbija("Harry Thompson", new Kontaktandmed("harry.thompson@example.com", "+44 1234567899"), new Asukoht("Green Lane 10", "Newcastle", "Tyne and Wear", "NE1 4BJ"))),
    new Arve(new Date(2023, 10, 15), 300, 90, new Maksestaatus(false, new Date(2023, 11, 1), 0, new Date(2023, 10, 25)), new Tarbija("James White", new Kontaktandmed("james.white@example.com", "+44 1234567800"), new Asukoht("Station Road 22", "Manchester", "Greater Manchester", "M4 5AA"))),
    new Arve(new Date(2023, 11, 2), 400, 150, new Maksestaatus(true, new Date(2023, 11, 10), 250, new Date(2023, 11, 5)), new Tarbija("Isla Martin", new Kontaktandmed("isla.martin@example.com", "+44 1234567801"), new Asukoht("Town Hall Road 9", "Birmingham", "West Midlands", "B3 1AA"))),
    new Arve(new Date(2024, 0, 6), 500, 200, new Maksestaatus(false, new Date(2024, 1, 1), 0, new Date(2024, 0, 15)), new Tarbija("Eva Jackson", new Kontaktandmed("eva.jackson@example.com", "+44 1234567802"), new Asukoht("Mill Lane 3", "Cardiff", "Wales", "CF10 1AB"))),
    new Arve(new Date(2024, 1, 20), 600, 250, new Maksestaatus(true, new Date(2024, 2, 1), 400, new Date(2024, 1, 25)), new Tarbija("Lucas Hall", new Kontaktandmed("lucas.hall@example.com", "+44 1234567803"), new Asukoht("Seafront 17", "Brighton", "East Sussex", "BN2 1AA"))),
    new Arve(new Date(2024, 2, 18), 750, 300, new Maksestaatus(false, new Date(2024, 3, 5), 0, new Date(2024, 3, 1)), new Tarbija("Mason Young", new Kontaktandmed("mason.young@example.com", "+44 1234567804"), new Asukoht("Crescent Road 4", "Oxford", "Oxfordshire", "OX1 1AB")))
  ];

const filterArved = (filterFn: (arve: Arve) => boolean) => arved.filter(filterFn);

// Route to get all unpaid invoices
router.get('/MaksmataArved', (req: Request, res: Response) => {
    // Filter for unpaid invoices only (paymentStatus is false)
    res.json(filterArved(arve => !arve.paymentStatus.paymentStatus));
});

// Route to get unpaid invoices that are overdue
router.get('/MaksetahtaegUletatud', (req: Request, res: Response) => {
    const currentDate = new Date();
    // Filter for unpaid invoices and where the due date has passed
    res.json(filterArved(arve => !arve.paymentStatus.paymentStatus && arve.paymentStatus.dueDate < currentDate));
});


router.get('/TarbijaMaksmataArved/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    res.json(filterArved(arve => !arve.paymentStatus.paymentStatus && arve.consumer.name === nimi));
});

router.get('/TarbijaMaksetahtaegUletatud/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    const currentDate = new Date();
    res.json(filterArved(arve => !arve.paymentStatus.paymentStatus && arve.paymentStatus.dueDate < currentDate && arve.consumer.name === nimi));
});

router.get('/TarbijaArved/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    res.json(filterArved(arve => arve.consumer.name === nimi));
});

router.get('/TarbijaArveteSumma/:nimi', (req: Request, res: Response) => {
    const nimi = req.params.nimi;
    const sum = filterArved(arve => arve.consumer.name === nimi).reduce((acc, arve) => acc + arve.amount, 0);
    res.json(sum);
});

export default router;
