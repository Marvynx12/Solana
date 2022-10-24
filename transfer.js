import { 
    Connection, 
    Keypair,
    Transaction,
    SystemProgram,
    PublicKey, 
    LAMPORTS_PER_SOL
    } from "@solana/web3.js";
import bs58 from "bs58";

const connection = new Connection("https://api.devnet.solana.com")

const alice = Keypair.fromSecretKey(
    bs58.decode(
        "56FWeKYKqv74BZw68mDSvhQ3QEMjXpDBqVPYeVtA4QwLzS21t821jJ1X17MYYWRQngwjppLQ5kyG11fRXNjM6e9f"
    )
);

const bob = Keypair.fromSecretKey(
    bs58.decode(
        "56FWeKYKqv74BZw68mDSvhQ3QEMjXpDBqVPYeVtA4QwLzS21t821jJ1X17MYYWRQngwjppLQ5kyG11fRXNjM6e9f"
    )
);

(async () => {
    let tx = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: alice.publicKey,
            toPubkey: bob.publicKey,
            lamports: 1 * LAMPORTS_PER_SOL
        })
    );


    tx.feePayer = alice.publicKey;

    let txhash = await connection.sendTransaction(tx [alice, bob]);
    console.log(`${txhash}`)
})
