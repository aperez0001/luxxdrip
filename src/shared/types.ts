export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    Featured = "featured",
    OurProducts = "ourproducts",
    ContactUs = "contactus",
    JoinNow = "joinnow"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ProductType {
    name: string;
    description?: string;
    image: string;
  }