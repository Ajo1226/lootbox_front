// import { CHAIN } from "@tonconnect/sdk";
// import { useMemo } from "react";
// import { Address } from "ton";

// export function useSlicedAddress(
//   address: string | null | undefined,
//   chain?: CHAIN
// ) {
//   return useMemo(() => {
//     console.log("HERE", chain, address);
//     if (!address) {
//       return "";
//     }

//     console.log("CHAIN", chain);

//     const userFriendlyAddress = Address.parseRaw(address).toString({
//       testOnly: chain === CHAIN.TESTNET,
//     });

//     return (
//       userFriendlyAddress.slice(0, 4) + "..." + userFriendlyAddress.slice(-3)
//     );
//   }, [address]);
// }
