import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";

const connection = new Connection("https://api.devnet.solana.com");

const feepayer = Keypair.fromSecretKey(
    bs58.decode(
        "56FWeKYKqv74BZw68mDSvhQ3QEMjXpDBqVPYeVtA4QwLzS21t821jJ1X17MYYWRQngwjppLQ5kyG11fRXNjM6e9f"
    )
);
(async () => {
    let balance = await connection.getBalance(feepayer.publicKey);
    console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
})();