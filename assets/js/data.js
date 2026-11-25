/* Shared data: room tariffs (per day, revised rates effective 1 April 2025) */
const ROOMS = [
  { id: "rajrishi", name: "Rajrishi Cottage", room: 4000, treat: 7000, persons: "1–2 persons",
    feats: ["Bedroom + drawing room", "2 ACs", "Sofa set", "Dining table", "Western toilet", "Geyser", "Electric kettle"] },
  { id: "maharishi2", name: "Maharishi Cottage (2 persons)", short: "Maharishi Cottage", room: 2500, treat: 5500, persons: "2 persons",
    feats: ["Double bed", "1 AC", "Sofa set", "Almirah & chair", "Western toilet", "Geyser", "Electric kettle"] },
  { id: "maharishi1", name: "Maharishi Cottage (1 person)", room: 2500, treat: 3000, persons: "1 person",
    feats: ["Double bed", "1 AC", "Sofa set", "Almirah & chair", "Western toilet", "Geyser", "Electric kettle"] },
  { id: "tapasvi", name: "Tapasvi Cottage", room: 2000, treat: 5000, persons: "1–2 persons",
    feats: ["Double bed", "Cooler", "Ceiling fan", "Almirah", "Western toilet", "Geyser", "Electric kettle"] },
  { id: "nisarg", name: "Nisarg Cottage", room: 1500, treat: 5000, persons: "1–2 persons",
    feats: ["Double bed", "1 AC", "Table & 2 chairs", "Almirah", "Western toilet", "Geyser", "Electric kettle"] }
];
const REG_FEE = 300;   // one-time, per person
const MIN_DAYS = 7;
const inr = n => "₹" + n.toLocaleString("en-IN");
