// import { Request, Response, NextFunction } from "express";
// import admin from "./firebase";

// export const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization?.split(" ")[1];
//     try {
//         if (token === undefined) {
//             return res.status(401).json({ message: "Unauthorized" });
//         } else {
//             const decodeValue = await admin.auth().verifyIdToken(token!);
//             if (decodeValue != null || decodeValue != undefined) {
//                 return next();
//             }
//             return res.json({ message: "Unauthorized" });
//         }
//     } catch (error) {
//         return res.send("Internal Server Error").status(500);
//     }
// }