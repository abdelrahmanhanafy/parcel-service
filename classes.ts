type parcel = { packageName?: string; weight: number; recipientName?: string; recipientAddress?: string };
// Truck load can be of any type, as we can loads the trucks with any kind of packages.
type truckLoad = parcel[] | any[];
type truckInfo = { weight: number; packagesNum: number; packagesItems: truckLoad };

class Truck {
  // Properities
  readonly weight: number;
  truckLoad: truckLoad = [];

  // New Truck
  constructor(weight: number, truckLoad: truckLoad = []) {
    this.weight = weight;
    this.truckLoad = truckLoad;
  }

  // Load New Packages
  public load(load: truckLoad): void {
    this.truckLoad.push(...load);
    return;
  }

  // Unload Packages
  public unLoad(load: truckLoad): void {
    this.truckLoad = this.truckLoad.filter((item) => !load.includes(item.packageId));
    return;
  }

  // Get Truck Info
  public info(): truckInfo {
    return { weight: this.weight, packagesNum: this.truckLoad.length, packagesItems: this.truckLoad };
  }
}

class Parcel {
  // Properities
  packageName: string;
  packageId: string = Math.random().toString(36).substring(2, 9);
  weight: number; //Mandotry
  recipientName: string;
  recipientAddress: string;
  shippingDate: Date = new Date();

  // New Parcel
  constructor(weight: number, packageName: string = '', recipientName: string = '', recipientAddress: string = '') {
    this.weight = weight;
    this.packageName = packageName;
    this.recipientName = recipientName;
    this.recipientAddress = recipientAddress;
  }
}

export { Truck, Parcel, parcel };
