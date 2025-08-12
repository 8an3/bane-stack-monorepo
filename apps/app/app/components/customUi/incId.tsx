import { prisma } from "~/modules/libs/prisma";



export async function IncId({ type }) {
  // const dealerId = await IncId({ type: "Client" });
  // Client, PO, PO Inv, Sales, WO, Unit, FinanceTradeUnit, ServiceUnit, Service, ServicePackages, Dealer
  let oldId;
  let newId;
  switch (type) {
    case "Client":
      const lastClient = await prisma.clientfile.findFirst({
        orderBy: { createdAt: "desc" }, // Get the last created item
        select: { dealerId: true },
      });
      oldId = lastClient?.dealerId || "CLIENT_0"; // Default to "CLIENT-0" if no items exist
      newId = incrementId(oldId, "CLIENT");
      break;
    case "Order":
      const lastPAC = await prisma.accOrder.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastPAC?.dealerId || "PO_0";
      newId = incrementId(oldId, "PO");
      break;
    case "Acc Inv":
      const lastAcc = await prisma.accessories.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastAcc?.dealerId || "INV_0";
      newId = incrementId(oldId, "INV");
      break;
   case "Ticket":
      const lastTicket = await prisma.clientTickets.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastTicket?.dealerId || "TICKET_0";
      newId = incrementId(oldId, "TICKET");
      break;
    case "Receipt":
      const lastPayment = await prisma.payment.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastPayment?.dealerId || "RECEIPT_0";
      newId = incrementId(oldId, "RECEIPT");
      break;
    case "User":
      const lastUser = await prisma.user.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastUser?.dealerId || "USER_0";
      newId = incrementId(oldId, "USER");
      break;
    default:
      throw new Error("Invalid type");
  }
  return newId;
}
function incrementId(oldId, prefix) {
  // Extract the numeric part using a regular expression
  const numericMatch = oldId.match(/\d+/);

  // If no numeric part is found, default to 0
  const numericPart = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  // Increment the numeric part
  const newNumericPart = numericPart + 1;

  // Return the new ID in the format "PREFIX_{incrementedNumber}"
  return `${prefix}_${newNumericPart}`;
}