interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
}

interface INonBrandWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface IAppleWatch {
  heartRate: string;
  bloodRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const poorDeveloper: Developer<INonBrandWatch> = {
  name: "Mr. Poor",
  salary: 10000,
  device: {
    brand: "HP",
    model: "A22",
    releasedYear: "2019",
  },
  smartWatch: {
    heartRate: "150",
    stopWatch: true,
  },
};

const richDeveloper: Developer<IAppleWatch> = {
  name: "Mr. rich",
  salary: 100000,
  device: {
    brand: "APPLE",
    model: "MACM4",
    releasedYear: "2024",
  },
  smartWatch: {
    heartRate: "110",
    bloodRate: "98",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
};
