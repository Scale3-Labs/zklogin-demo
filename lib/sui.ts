import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
export const getActiveNetworkSuiClient = async () => {
  try {
    const client = new SuiClient({ url: getFullnodeUrl("devnet") });
    return client;
  } catch (error) {
    console.log("Sui client error:", error);
    throw error;
  }
};
