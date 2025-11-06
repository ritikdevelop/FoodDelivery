
import { NavigatorScreenParams } from '@react-navigation/native';

export enum RootRoutes {
    AuthStack = 'AuthStack',
    MainTabs = 'MainTabs',
}

export enum AuthRoutes {
    Login = 'Login',
    SignUp = 'SignUp',
}

export enum MainRoutes {
    Home = 'Home',
    Store = 'Store',
    ProductDetails = 'ProductDetails',
    Profile = 'Profile',
    Checkout = 'Checkout',
    Category = 'Category',
    Cart = 'Cart',
    AddAddress = 'AddAddress',
    EditAddress = 'EditAddress',
}


export type RootStackParamList = {
    [RootRoutes.AuthStack]: undefined;
    [RootRoutes.MainTabs]: undefined;
}

export type AuthStackParamList = {
    [AuthRoutes.Login]: undefined;
    [AuthRoutes.SignUp]: undefined;
}

export type MainTabParamList = {
    [MainRoutes.Home]: undefined;
    [MainRoutes.Store]: undefined;
    [MainRoutes.Cart]: undefined;
}

export type MainStackParamList = {
    MainTabs:NavigatorScreenParams<MainTabParamList>;
    [MainRoutes.ProductDetails]: { productId: string };
    [MainRoutes.Profile]: undefined;
    [MainRoutes.Checkout]: undefined;
    [MainRoutes.Category]: undefined;
    [MainRoutes.AddAddress]: undefined;
    [MainRoutes.EditAddress]: undefined;
}
