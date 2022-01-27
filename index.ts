import { Truck, Parcel } from './classes';

const parcelOne = new Parcel(10, 'parcelOne');
const parcelTwo = new Parcel(20, 'parcelTwo');
const parcelThree = new Parcel(30, 'parcelThree');
const parcelFour = new Parcel(40, 'parcelFour');
const parcelFive = new Parcel(50, 'parcelFive');
const parcelSix = new Parcel(60, 'parcelSix');
const parcelSeven = new Parcel(70, 'parcelSeven');

// New Truck
const newTruck = new Truck(5000);

// Load New Parcels
newTruck.load([parcelOne, parcelTwo, parcelThree, parcelFour, parcelFive, parcelSix, parcelSeven]);
// Unload Parcels
newTruck.unLoad([parcelThree.packageId, parcelFive.packageId]);

// Logs
console.log('NEW TRUCK CREATED ', newTruck);
console.log('TRUCK INFO', newTruck.info());
