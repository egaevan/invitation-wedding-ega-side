import {NextApiRequest, NextApiResponse} from "next";
import { google } from 'googleapis';

type SheetForm = {
    nama:string
    ucapan:string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'POST'){
        return res.status(405).send({message:'Method Not Allowed'})
    }

    const body = req.body as SheetForm

    try {
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),

            },
            scopes:[
                'http://www.googleapis.com/auth/drive',
                'http://www.googleapis.com/auth/drive.file',
                'http://www.googleapis.com/auth/spreadsheets',
            ]
        });
        
        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range:'A1:B1',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[
                    [
                        [body.nama, body.ucapan]
                    ]
                ]
            }
        });

        return res.status(200).json({
            data:response
        })

    }catch (e){
        console.error(e)
        return res.status(500).send({message: e.message ?? 'Something went wrong'})
    }
}