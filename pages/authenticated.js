import React from 'react';
import NavBar from '../components/NavBar';
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";


function Authenticated({session}) {
    firebaseClient();
    if(session){
        return(
            <div>
                {/* <h5>{session}</h5> */}
                <NavBar session={{session}}/>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}
export async function getServerSideProps(context) {
    try {
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: {session: `Logged in as: ${email}, UID: ${uid}`},
        };
    } catch (err){
        context.res.writeHead(302, {location: "/login"});
        context.res.end();
        return { props: [] };
    }
}

export default Authenticated;