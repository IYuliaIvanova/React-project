import React from "react";

interface IFooterNavigationData {
    path: string;
    children: React.ReactNode;
    id: string;
}

export const FOOTER_NAVIGATION: IFooterNavigationData[] = [
    { id: "f5f54d6", path: "aboutCompany", children: "О компании" },
    { id: "f1d2b127", path: "ShippingAndPayment", children: "Доставка и оплата" },
    { id: "f4be1ba8", path: "MaterialTape", children: "Лента материалов" },
    { id: "f35186b9", path: "ReturnPolicy", children: "Политика возврата" },
]