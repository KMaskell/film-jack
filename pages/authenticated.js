import React from 'react';
import NavBar from '../components/NavBar';
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";


function Authenticated({session}) {
    firebaseClient();
    if(session){
        return(
            <div>
                <h3>(you are now authenticated)</h3>
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
            props: {session: `Your email is ${email} and your UID is ${uid}`},
        };
    } catch (err){
        context.res.writeHead(302, {location: "/login"});
        context.res.end();
        return { props: [] };
    }
}

export default Authenticated;