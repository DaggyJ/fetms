export const destinations = [
  "Kampala", "Vurra", "Bunia", "Ariwara", "Watsa", "Durba", "Moku", "Isiro",
];

export const fuelStations = ["Mombasa", "Eldoret", "Malaba", "Nebbi"];

export const routeStops = [{ name: "Mombasa", origin: true }, ...destinations.map((d) => ({ name: d, origin: false }))];

export const drivers = [
  { id: "ZJ0737", name: "Daniel Kibet Chepkwony", phone: "+254700667444", truck: "KDW653C" },
  { id: "ZJ2867", name: "Abednego Mutuku", phone: "+254718876881", truck: "KDX467B" },
  { id: "ZD4440", name: "Jackson Njoroge Ndichu", phone: "+254702411421", truck: "KDT427T" },
  { id: "2060AC07", name: "Timothy Kipkosgei Ngeny", phone: "+254724854169", truck: "KDR243Y" },
  { id: "ZE1454", name: "Nicholas Safari Metho", phone: "+254723890220", truck: "KDQ160E" },
  { id: "ZH8835", name: "Jacob Mutua Mbuuko", phone: "+254769120402", truck: "KDU255R" },
  { id: "ZD7085", name: "Nicholas Safari Metho", phone: "+254723890220", truck: "KDP287U" },
  { id: "N/A", name: "Haron Ndishu", phone: "+254717596061", truck: "KDW464Z" },
];

export const trips = [
  { id: "TRP-1042", truck: "KDW653C", driver: "Daniel Kibet", destination: "Kampala", status: "In Progress", startDate: "2026-07-27", mileage: 890, cost: 1840, revenue: 2900 },
  { id: "TRP-1041", truck: "KDX467B", driver: "Abednego Mutuku", destination: "Isiro", status: "Completed", startDate: "2026-07-20", mileage: 1620, cost: 3120, revenue: 4600 },
  { id: "TRP-1040", truck: "KDT427T", driver: "Jackson Njoroge", destination: "Bunia", status: "Completed", startDate: "2026-07-18", mileage: 1340, cost: 2680, revenue: 3950 },
  { id: "TRP-1039", truck: "KDR243Y", driver: "Timothy Kipkosgei", destination: "Durba", status: "In Progress", startDate: "2026-07-26", mileage: 1210, cost: 2210, revenue: 0 },
  { id: "TRP-1038", truck: "KDQ160E", driver: "Nicholas Safari", destination: "Watsa", status: "Completed", startDate: "2026-07-14", mileage: 1180, cost: 1990, revenue: 3100 },
  { id: "TRP-1037", truck: "KDU255R", driver: "Jacob Mutua", destination: "Moku", status: "Completed", startDate: "2026-07-10", mileage: 1290, cost: 2340, revenue: 3400 },
  { id: "TRP-1036", truck: "KDP287U", driver: "Nicholas Safari", destination: "Ariwara", status: "Completed", startDate: "2026-07-08", mileage: 1050, cost: 1870, revenue: 2600 },
  { id: "TRP-1035", truck: "KDW464Z", driver: "Haron Ndishu", destination: "Vurra", status: "Completed", startDate: "2026-07-05", mileage: 980, cost: 1650, revenue: 2450 },
];

export const fuelLogs = [
  { trip: "TRP-1042", station: "Mombasa", date: "2026-07-27", litres: 180, costPerLitre: 1.42, total: 255.6 },
  { trip: "TRP-1042", station: "Malaba", date: "2026-07-28", litres: 160, costPerLitre: 1.38, total: 220.8 },
  { trip: "TRP-1041", station: "Eldoret", date: "2026-07-21", litres: 200, costPerLitre: 1.4, total: 280 },
  { trip: "TRP-1040", station: "Nebbi", date: "2026-07-19", litres: 150, costPerLitre: 1.45, total: 217.5 },
  { trip: "TRP-1038", station: "Malaba", date: "2026-07-15", litres: 170, costPerLitre: 1.4, total: 238 },
];

export const repairs = [
  { truck: "KDW653C", date: "2026-07-15", type: "Repair", description: "Brake pad replacement", cost: 340, garage: "Mombasa Auto Works" },
  { truck: "KDX467B", date: "2026-07-10", type: "General Service", description: "Full service & oil change", cost: 520, garage: "Eldoret Truck Care" },
  { truck: "KDT427T", date: "2026-07-05", type: "Repair", description: "Clutch plate replacement", cost: 780, garage: "Malaba Garage" },
];

export const spareParts = [
  { truck: "KDW653C", date: "2026-07-15", part: "Brake pads (set)", qty: 2, cost: 180, supplier: "Autoparts Mombasa" },
  { truck: "KDR243Y", date: "2026-07-20", part: "Fan belt", qty: 1, cost: 45, supplier: "Eldoret Spares Ltd" },
];

export const tyres = [
  { truck: "KDX467B", date: "2026-07-08", qty: 4, costPerTyre: 210, supplier: "Kampala Tyre Center" },
  { truck: "KDQ160E", date: "2026-07-01", qty: 2, costPerTyre: 195, supplier: "Malaba Tyres" },
];

export const costBreakdown = [
  { name: "Fuel", value: 48, color: "#4A9EFF" },
  { name: "Repairs", value: 20, color: "#E74C3C" },
  { name: "Tyres", value: 14, color: "#F5B921" },
  { name: "Spares", value: 10, color: "#2ECC71" },
  { name: "Salaries", value: 8, color: "#8E7CE0" },
];

export const routeProfit = [
  { route: "Kampala", profit: 1060 },
  { route: "Vurra", profit: 720 },
  { route: "Bunia", profit: 1270 },
  { route: "Ariwara", profit: 540 },
  { route: "Watsa", profit: 1110 },
  { route: "Durba", profit: 390 },
  { route: "Moku", profit: 860 },
  { route: "Isiro", profit: 1480 },
];

export const monthlyTrend = [
  { month: "Feb", profit: 4200 },
  { month: "Mar", profit: 5100 },
  { month: "Apr", profit: 3800 },
  { month: "May", profit: 6200 },
  { month: "Jun", profit: 7100 },
  { month: "Jul", profit: 8850 },
];
