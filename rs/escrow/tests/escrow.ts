// import * as anchor from "@coral-xyz/anchor"
// import { Program, BN } from "@coral-xyz/anchor"
// import { Escrow } from "../target/types/escrow"
// import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
// import { getAssociatedTokenAddressSync, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";

// describe("escrow", () => {
//     anchor.setProvider(anchor.AnchorProvider.env());
//     const provider = anchor.getProvider();
//     const connection = provider.connection;

//     const program = anchor.workspace.Escrow as Program<Escrow>;

//     const [maker, taker, mintA, mintB] = Array.from({ length: 4 }, () => Keypair.generate());

//     const tokenProgram = TOKEN_2022_PROGRAM_ID;
//     const [makerAtaA, makerAtaB, takerAtaA, takerAtaB] = [maker, taker]
//         .map((a) => [mintA, mintB]
//             .map((m) => getAssociatedTokenAddressSync(a.publicKey, m.publicKey, false, tokenProgram)))
//         .flat();
//     const seed = new BN(0);
//     const amount = new BN(100);
//     const receive = new BN(200);

//     const escrow = PublicKey.findProgramAddressSync([
//         Buffer.from("escrow"),
//         maker.publicKey.toBuffer(),
//         seed.toArrayLike(Buffer, "le", 8),
//     ], program.programId);
//     const accounts = {
//         maker,
//         mint_a,
//         mint_b,
//         maker_ata_a,
//         escrow,
//         vault,
//         associated_token_program,
//         token_program,
//         system_program,
//     };

//     it("tests make()", async () => {
//         const tx = await program.methods
//             .make(seed, amount, receive)
//             .accounts({ ...accounts })
//             .signers([])
//             .rpc();

//         console.log(tx);
//     });

//     it("tests take()", async () => {

//     });
// });